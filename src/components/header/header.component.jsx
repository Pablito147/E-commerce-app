import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../Firebase/firebase-utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import CardIcon from '../card-icon/card-icon.component';
import CartDropDown from '../card-dropdown/card-drop-down.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/cart.selector';

import '../header/header.styles.scss';


const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">
                Shop
            </Link>
            <Link className='option' to="/Contact">
                Contact
            </Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>Sing Out</div>
                    : <Link className='option' to='/signin'>Sign In</Link>
            }
            <CardIcon />
        </div>
        { hidden ? null :
            <CartDropDown />
        }
    </div>

)
const mapStateToProp = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProp)(Header);