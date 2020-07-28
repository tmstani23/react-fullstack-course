import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsers, userRegisterUser} from '../../store/actions/user_actions';

class Register extends Component {
    
    state = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        error: ''
    }

    componentWillMount(){
        this.props.dispatch(getUsers())
    }

    handleInputEmail = (event) => {

    }
    handleInputPassword = (event) => {
        
    }
    handleInputName = (event) => {
        
    }
    handleInputLastname = (event) => {
        
    }

    submitForm = (event) => {
        event.preventDefault();
    }
    render() {
        console.log(this.props)
        return (
            <div className='container form_container'>
                <form onSubmit={this.submitForm}>
                    <h2>Add User</h2>

                </form>
                <div>
                    <h4>Current Users</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Name:</th>
                                <th>Lastname:</th>
                                <th>Email:</th>
                            </tr>
                            
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Register);