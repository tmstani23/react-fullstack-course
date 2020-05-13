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

    render() {

      
        return (
            <header>
                <div className='logo'>Logo</div>
                <input />
            </header>
        )
    }
    
}

export default Header;
