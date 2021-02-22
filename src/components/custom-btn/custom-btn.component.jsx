import React from 'react';
import './custom-btn.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button type="button" className={`${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)
export default CustomButton;

// pozri children 