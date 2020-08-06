import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsers, userRegister} from '../../store/actions/user_actions';
import {Link} from 'react-router-dom';

class Register extends Component {
    
    state = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        error: ''
    }

    componentDidMount(){
        this.props.dispatch(getUsers())
    }

    handleInputEmail = (event) => {
        this.setState({email: event.target.value})
    }
    handleInputPassword = (event) => {
        this.setState({password: event.target.value})
    }
    handleInputName = (event) => {
        this.setState({name: event.target.value})
    }
    handleInputLastname = (event) => {
        this.setState({lastname: event.target.value})
    }
    //reset the form or display an error if not registered
        //props come from redux store after getUsers returns the data 
    componentWillReceiveProps(nextProps) {
        if(nextProps.user.register === false) {
            let errMsg = nextProps.user.error.message;
            
            this.setState({error: errMsg})
        } else {
            this.setState({
                name: '',
                lastname: '',
                email: '',
                password: '',
                error: ''
            })
        }
        
    }

    submitForm = (event) => {
        event.preventDefault();
        //clear errors on form submit
        this.setState({error: ''});
        
        this.props.dispatch(userRegister({
            email: this.state.email,
            password: this.state.password,
            name:this.state.name,
            lastname:this.state.lastname
            }, this.props.user.users
        ))
    }
    showUsers = (user) => (
        user.users 
            ? user.users.map(item => (
                <tr key = {item._id}>
                    <td>{item.name}</td>
                    <td>{item.lastname}</td>
                    <td>{item.email}</td>
                </tr>
            ))
            : null
    )

    render() {
        
        let user = this.props.user;
        return (
            <div className='container form_container'>
                <form onSubmit={this.submitForm}>
                    <h2>Add User</h2>
                    <div className='form_element'>
                        <input
                            type='text'
                            placeholder='Enter Name'
                            value={this.state.name}
                            onChange={this.handleInputName}
                        />
                    </div>
                    <div className='form_element'>
                        <input
                            type='text'
                            placeholder='Enter Lastname'
                            value={this.state.lastname}
                            onChange={this.handleInputLastname}
                        />
                    </div>
                    <div className='form_element'>
                        <input
                            type='text'
                            placeholder='Enter Email'
                            value={this.state.email}
                            onChange={this.handleInputEmail}
                        />
                    </div>
                    <div className='form_element'>
                        <input
                            type='text'
                            placeholder='Enter Password'
                            value={this.state.password}
                            onChange={this.handleInputPassword}
                        />
                    </div>
                    <button type='submit'>Add User</button>
                    {
                        this.state.error !== '' 
                            ? (
                                <div className='error_label'>
                                    {this.state.error}
                                </div>
                            )
                            : null
                    }
                    

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
                            {this.showUsers(user)}
                        </tbody>
                    </table>
                </div>
                <div className='container'><Link className="conf_link" to = {'/login'}>Login User</Link></div>
                
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