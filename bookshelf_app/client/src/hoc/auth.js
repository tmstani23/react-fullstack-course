import React, {Component} from 'react';
import {auth} from '../store/actions/user_actions';
import {connect} from 'react-redux';

//Authentication component that runs as middleware before the route
export default function (ComposedClass, reload) {
    
    class AuthenticationCheck extends Component {
        state = {
            loading: true
        }


        componentDidMount() {
            this.props.dispatch(auth())
                .then(response => {
                    let user = this.props.user.auth;

                    this.setState({loading: false})
                    //redirect user to login if not auth else send them to admin route
                    if(!user) {
                        this.props.history.push('/login')
                    } 
                    else {
                        //reload prevents logged in users from going to wrong routes
                        console.log(reload);
                        if(reload === false) {
                            this.props.history.push('/admin')
                        }
                        
                        
                    }
                        

                })
        }

        render() {
            //console.log(this.props, 'props in authcheck comp')
            //render loading message or the passed in component
            return this.state.loading 
                ? <div className='loader'>Loading...</div>
                : <ComposedClass {...this.props} user={this.props.user} />
            
        }
    }
    //Maps user state from redux store to connected component as props
    function mapStateToProps(state) {
        return {
            user: state.user
        }
    }

    return connect(mapStateToProps)(AuthenticationCheck);
}





