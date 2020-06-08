import React, {Component} from 'react';
import axios from 'axios';
import {URL_SUBSCRIPTIONS} from './paths';

class Subscriptions extends Component {
    state = {
        email: '',
        error: false,
        success: false,
        alreadyInDb: false
    }
    
    saveSubscription = (email) => {
        axios.get(`${URL_SUBSCRIPTIONS}?email=${email}`)
        .then(response => {
            if(!response.data.length) {
                //post user
            } else {
                //already in
            }
        })
    }

    onInputChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email;
        let emailValidateRegex = /^\S+@\S+\.\S+$/;

        if(emailValidateRegex.test(email)){
            this.saveSubscription(email);
        } else {
            this.setState({error: true})
        }

    }

    render() {
        const state = this.state;
        
        return (
            <div className="subscribe_panel">
               <h3>Subscribe to use</h3> 
               <div>
                   <form onSubmit={this.handleSubmit}>
                       <input 
                        type='text'
                        value={state.email}
                        placeholder='youremail@gmail.com'
                        onChange={this.onInputChange}
                       />
                   </form>
               </div>
               <small>Lorem ipsum dolor sit amet</small>
            </div>
        )
    }
}

export default Subscriptions;