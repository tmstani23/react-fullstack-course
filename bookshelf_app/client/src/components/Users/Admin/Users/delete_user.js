import React, {Component} from 'react';
import axios from 'axios';


class DeleteUser extends Component {
    
    state = {
        email: '',
        error: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            error: ''
        })

        this.deleteUser();
    }

    handleChange = (event) => {
        this.setState({
            email: event.target.value,
        })
    }

    deleteUser = () => {
        const email = {
            email: this.state.email}
        ;
        let error = '';
        console.log(email);
        let request = axios.post('/api/users/delete_user', email)
            .then(response => {
                
                console.log(response.data)
                return response.data
            }).catch(err => {
                console.log(err)
                error = 'Incorrect email entered';
                return error;
            })

        this.setState({
            email: request.email ? request.email : '',
            error: error !== '' ? error : '',
            success: request.success
        })
    }
    
    render() {
        //console.log(this.state.error)
        return (
            <div className='container admin_layout'>
                <form onSubmit={this.handleSubmit}>
                    <h4>Delete User</h4>
                    <input 
                        className='u-full-width'
                        placeholder="Enter Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    ></input>
                    <button type="submit">Submit</button>
                </form>
                {this.state.error !==  '' ? this.state.error : null}
            </div>
        )
    }
    
}


export default DeleteUser;