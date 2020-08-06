import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


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
        //update email state with email input from form
        this.setState({
            email: event.target.value,
        })
    }

    handleSuccess = (data) => {
        //Dynamically set the error or success message 
            //based on what is returned as data from the backend
        this.setState({
            email: data.email ? data.email : '',
            error: data.error ? data.error : '',
            success: data.success
        })
    }
    deleteUser = () => {
        let bodyObj = {
            email: this.state.email,
            loggedInUserRole: this.props.user.userData.role
        };
        
        axios.post('/api/users/delete_user', bodyObj)
            .then(response => {
                this.handleSuccess(response.data)
                //console.log(response.data)
                return response.data
            })
            .catch(error => {
                console.log(error);
            })
        
        
    }
    
    render() {
        console.log(this.props);
        return (
            <div >
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
                {/* Display a success or error message depending on the result of the api call */}
                {this.state.success
                    ? <div className="error_label">User removed: {this.state.email}</div> 
                    : (this.state.error ? <div className='error_label'> {this.state.error}</div> : null)
                }
                
            </div>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(DeleteUser);