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
        title: 'The keywords are: ',
        keywords: '',
        count: 0
    }

    //logs pasted input value to console
    inputPaste(event) {
        console.log(event.clipboardData.getData('text'));
    }

    //adds input value to keywords on change
    inputChange(event) {
        //console.log(event.target.value);
        this.setState({
            keywords: event.target.value
        })
    }
    //Add one to counter
    addOne() {
        this.setState({count: this.state.count + 1})
    }

    render() {

        return (
            <header>
                <div className='logo' onClick={() => console.log("I was clicked")}>
                    Logo
                </div>
                <input 
                    onChange = {(event) => this.inputChange(event)}
                    // calling onChange = inputChange() will call the function directly when the render happens not onChange
                    // onPaste = {(event) => this.inputPaste(event)}
                    onPaste = {(event) => this.inputPaste(event)}
                />
                <div>{this.state.title}</div>
                <div>{this.state.keywords}</div>
                <br />
                <div>Count: {this.state.count}</div>
                <div onClick = { () => this.addOne()}>Add one</div>

            </header>
        )
    }
    
}

export default Header;
