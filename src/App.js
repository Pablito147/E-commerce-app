import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/Shop/shop-component';
import SignInAndSignUp from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import Header from './components/header/header.component';
import { setCurrentUser } from './redux/user/user.acctions'

import { auth, createUserProfileDocument } from './Firebase/firebase-utils';

class App extends React.Component {

  unsubscribeFromAuth = null;
  componentDidMount() {
    // Open subscription, messaging system btw app and firbase, ked sa stane zmena vo firebase, app sa upadatne 
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshod => {
          setCurrentUser({
            id: snapshod.id,
            ...snapshod.data()

          });
        });
      }
      setCurrentUser(userAuth);
    })
  }
  // zavrie subscribtion ked compemnet Un mount.. 
  componentWillUnmounth() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SignInAndSignUp}></Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);

