import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
      // 5dollars
        amount = {500}
        // token representing the charge from stripe
        token ={token => console.log(token)}
        stripeKey ={process.env.REACT_APP_STRIPE_KEY}
        />
    );
  }
}


export default Payments;
