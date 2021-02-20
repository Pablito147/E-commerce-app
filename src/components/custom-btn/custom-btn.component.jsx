import React from 'react';
import './custom-btn.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button type="button" className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)
export default CustomButton;

// pozri children 