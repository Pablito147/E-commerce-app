import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux//cart/cart.actions'
import { selecrCartItemsCount } from '../../redux/cart/cart.selectors'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';


import './card-icon.styles.scss';

const CardIcon = ({ toggleCartHidden, itemCount }) => (

    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'></ShoppingIcon>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
    itemCount: selecrCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);