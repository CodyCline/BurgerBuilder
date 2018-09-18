import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street:'',
            postalCode: '',
        },
        loading: false,
    }

    orderHandler = () => {
        console.log( this.props.ingredients)
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.state.totalPrice, //Server side calculation nessecary to avoid manipulation
            customer: {
                name: 'Solomon Gerd',
                address: {
                    street: '123 main st.',
                    zipCode: '12345',
                    country: 'United States',
                },
                email: 'test@test.com',
            },
            delivery_method: 'very fast'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false});
            })
            .catch(error => {
                this.setState({ loading: false});
            });
    }

    render() {
        let form = (
            <form>
                {/* Form goes here */}
                <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
                <input className={classes.Input} type="text" name="email" placeholder="Your email"/>
                <input className={classes.Input} type="text" name="postal" placeholder="Your street"/>
                <input className={classes.Input} type="text" name="postal" placeholder="Your postal code"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner/>; 
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
