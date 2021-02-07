import react from 'react';
import '../header/header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../Firebase/firebase-utils';

const Header = ({ currentUser }) => (
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
        </div>
    </div>

)
export default Header;