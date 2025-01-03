import React, {Component} from 'react';
import Aux from '../../../hoc/Auxillary/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component instead of a class if i want

    // componentDidUpdate() {
    //     console.log('[OrderSummary.js] didUpdate');
    // }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
        )});

        return (
            <Aux>
                <h3> Your Order</h3>
                <p>Delicious Burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}  
                </ul>
                <p><strong>Total Price: ${this.props.price}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType ="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType ="Success" clicked ={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
    
};

export default OrderSummary;