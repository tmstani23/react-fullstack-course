import React, {Component} from 'react';

class Footer extends Component {
    
    //constructor code must include props for render to use them
        //dont need to include the constructor as it is initialized auto by react
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        return (
            <footer>{this.props.footerText}</footer>
        )
    }
}

export default Footer;