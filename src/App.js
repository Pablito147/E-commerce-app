import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/Shop/shop-component';
import SignInAndSignUp from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './Firebase/firebase-utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    // Open subscription, messaging system btw app and firbase, ked sa stane zmena vo firebase, app sa upadatne 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshod => {
          this.setState({
            currentUser: {
              id: snapshod.id,
              ...snapshod.data()
            }
          }, () => {
            console.log(this.state)
          })
        })
      } else {
        this.setState({ currentUser: userAuth });
      }
    })
  }
  // zavrie subscribtion ked compemnet Un mount.. 
  componentWillUnmounth() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SignInAndSignUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

