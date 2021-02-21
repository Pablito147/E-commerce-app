import React from 'react';
import CustomButton from '../custom-btn/custom-btn.component';

import './card-drop-down.styles.scss';

const Cart = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'></div>
        <CustomButton>Go to Checkout</CustomButton>
    </div>
)

export default Cart;