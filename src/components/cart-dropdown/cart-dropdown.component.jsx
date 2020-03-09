import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.components';
import CartItem from '../cart-item/cart-item.component';
import { toogleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length ?
          cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        :
          (<span className='empty-message'>Your cart is empty</span>)
      }
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout')
        dispatch(toogleCartHidden());
      }}
    >
      Go to checkout
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
