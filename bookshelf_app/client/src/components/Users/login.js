import React, {Component} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import {loginUser} from '../../store/actions/user_actions';

//Yup schema for login form field validation
const loginSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters.')
        .required('Password Required!'),
    email: Yup.string()
        .email('Invalid Email: ')
        .required('Email Required!')
})


class Login extends Component {
    state = {
        success: false,
        validation: false,
    }
    
    render() {
        return (
            <div className='container form_container'>
                <h1>Welcome back!</h1>
                <hr/>
                <h4>Sign in here:</h4>

                {/* Form containing the password/email inputs and validation */}
                <Formik
                    initialValues={{email: 'timbob2@gmail.com', password: 'timbob123'}}
                    validationSchema={loginSchema}
                    // dispatch is a redux method to execute the loginUser redux action
                    onSubmit={values => this.props.dispatch(loginUser(values))}
                >
                    {/* destructuring properties from Formik input obj*/}
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit,
                        handleBlur
                    }) => (
                        <form onSubmit = {handleSubmit}>
                            <div className='row'>
                                <div className='twelve columns'>
                                    {/* onChange and onBlur handled automatically by Formik */}
                                    <input
                                        type='email'
                                        name='email'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder='Enter email.'
                                        className='u-full-width'
                                    />
                                    {errors.email && touched.email 
                                        ? <div className='error_label'> {errors.email} </div> 
                                        : null
                                    }
                                </div>
                            </div>
                            <div className='row'>
                                <div className='twelve columns'>
                                    <input
                                        type='password'
                                        name='password'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        placeholder='Enter your password.'
                                        className='u-full-width'
                                    />
                                    {errors.password && touched.password 
                                        ? <div className='error_label'> {errors.password} </div> 
                                        : null
                                    }
                                </div>
                            </div>

                            <button type='submit'>
                                Login
                            </button>
                        </form>

                    )}
                </Formik>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Login);