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
    //Clears subscription error messages after 2 seconds
    clearMessages = () => {
        setTimeout(() => {
            this.setState({
              error: false,
              success: false,
              alreadyInDb: false,
            })
        }, 2000)
    }
    
    saveSubscription = (email) => {
        //Get email info and update db
        axios.get(`${URL_SUBSCRIPTIONS}?email=${email}`)
        .then(response => {
            if(!response.data.length) {
                //post email to db
                axios(URL_SUBSCRIPTIONS, {
                    method: 'POST',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    data: JSON.stringify({email})
                }).then(response => {

                    this.setState({
                        success: true,
                        email: ''
                    });
                    this.clearMessages()
                })
            } else {
                //Email already in database
                this.setState({
                    email: '',
                    alreadyInDb: true
                })
                this.clearMessages();
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
        //Check to make sure input email is a valid email type
        if(emailValidateRegex.test(email)){
            this.saveSubscription(email);
        } else {
            this.setState({error: true})
            this.clearMessages();
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
                       {/* Conditional error messages depending on state.  Classes handle whether to show the div or not. */}
                       <div className={state.error ? "error show" : "error"}>Check your email.</div>
                       <div className={state.success ? "success show" : "success"}>Thank you for subscribing.</div>
                       <div className={state.alreadyInDb? "success show" : "success"}>You are already in the database. </div>
                   </form>

               </div>
               <small>Lorem ipsum dolor sit amet</small>
            </div>
        )
    }
}

export default Subscriptions;