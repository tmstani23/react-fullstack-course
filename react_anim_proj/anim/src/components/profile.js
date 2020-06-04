import React, {Component} from 'react';
import propTypes from 'prop-types';

class Profile extends Component {
    state = {
        name: '',
        lastname: ''
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleLastNameChange = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState);
        return true;
    }
    
    render() {
        
        return (
            <div>
                <form>
                    <div>
                        <label>Enter Name</label>
                        <input 
                            type='text'
                            //specifying the value allows react to control all values to the input.  This is called "controlled component"
                            //receives its value from React's state
                            value={this.state.name} 
                            onChange={this.handleNameChange}
                        />
                    </div>
                    <br/><br/>
                    <div>
                        <label>Enter Last Name</label>
                        <input
                            //Value is not specified so this is uncontrolled 
                            //input field receives its value from internal DOM node state
                            // Having an uncontrolled element/component in your React application can lead to unwanted behavior and therefore bugs. You want to drive your UI from one source of truth instead; which in React should be props and state. 
                            type='text' 
                            onChange={this.handleLastNameChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
//Proptypes tests a prop or state object properties and throws an error if they aren't correct type
// Profile.propTypes = {
//     //throws an error if prop value isn't one of the values
//     name: propTypes.oneOf(['Tim', 'James']),
//     //Can perform multiple type checks using oneOfType
//         //If any of the props are in the check the entire thing will pass even if other parts of the check would fail.
//     lastname: propTypes.oneOfType([
//         propTypes.string,
//         propTypes.number,
//         propTypes.oneOf(['bob', 'slavi'])
//     ]),
//     age: propTypes.number,
//     //Will throw an error if hobbies is not an array of strings
//     hobbies:propTypes.arrayOf(propTypes.string),
//     spanish: propTypes.bool,
//     message:propTypes.func,
//     car: propTypes.object,
//     //Checks if mother prop exists and is of type string
//     //mother: propTypes.string.isRequired,
//     //Can also use a function do more specific and advanced type and prop checking
//     mother: function(props, propName, componentName ){
//         if(props['propName'] !== 'Jane') {
//             return new Error(`The name ${props[propName]} should be Jane`);
//         }
//     },
// }

export default Profile;