import React, { Component } from 'react';
import Aux from '../../../hoc/_Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    //This could be a functional component but doesn't have to be
    
    // componentWillUpdate () {
    //     console.log('[OrderSummary] WillUpdate')
    // }
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li>
                <span style={{textTransform: 'capitalize'}}>
                    {igKey}
                </span>: {this.props.ingredients[igKey]}
            </li>
        });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}
export default OrderSummary;