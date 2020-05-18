import React, {Component} from 'react';

// font-family: 'Anton', sans-serif;
// font-family: 'DM Mono', monospace;

class Header extends Component {

    state = {
        keywords: '',
        active: false
    }

    

    // //adds input value to keywords on change
    // inputChange(event) {
    //     //console.log(event.target.value);

    //     //check if input has been entered and update active status in state if true
    //     const isInputActive = event.target.value === '' ? false : true;

    //     this.setState({
    //         keywords: event.target.value,
    //         active: isInputActive,
    //     })
    // }
    

    render() {
        //console.log(this.props.getKeywords);
        return (
        //    Styles are dynamically rendered on input change.  
            //ternary operator allows JS expressions within object
            <header 
                // style={{
                //     background: `${this.state.active === true
                //         ? 'blue' 
                //         : 'red'
                //     }`
                // }}
            >
                {/* <div className='logo' onClick={() => console.log("I was clicked")}> */}
                <div>
                    Logo
                </div>
                <input 
                    onChange = {this.props.getKeywords}
                    // calling onChange = inputChange() will call the function directly when the render happens not onChange 
                />
                <div>{this.state.keywords}</div>

            </header>
        )
    }
    
}

export default Header;
