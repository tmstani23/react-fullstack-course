import React, {Component} from 'react';

// font-family: 'Anton', sans-serif;
// font-family: 'DM Mono', monospace;

//Function that returns current year
//Allows more than one operation to be imported into component

// const getTheYear = () => {
//     const newsDate = new Date();
//     return newsDate.getFullYear();
// }

// const Header = () => {
//     return (
//         <div>
//             Header Component
//             {/* Can only return one JS expression per component in React */}
//             The year is {getTheYear()}
//         </div>
//     )
// }

class Header extends Component {

    state = {
        keywords: '',
        active: false,
    }

    

    //adds input value to keywords on change
    inputChange(event) {
        //console.log(event.target.value);

        //check if input has been entered and update active status in state if true
        const isInputActive = event.target.value === '' ? false : true;

        this.setState({
            keywords: event.target.value,
            active: isInputActive,
        })
    }
    

    render() {
        
        let dynamicStyle = {
            background: 'red'
        }
        

        return (
            <header 
                style={{
                    background: `${this.state.active === true
                        ? 'blue' 
                        : 'red'
                    }`
                }}
            >
                <div className='logo' onClick={() => console.log("I was clicked")}>
                    Logo
                </div>
                <input 
                    onChange = {(event) => this.inputChange(event)}
                    // calling onChange = inputChange() will call the function directly when the render happens not onChange 
                />
                <div>{this.state.keywords}</div>

            </header>
        )
    }
    
}

export default Header;
