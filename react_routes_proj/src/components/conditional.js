import React, { Fragment, Component } from 'react';

// // Demonstrating using conditional rendering with es6 ternary operator
// const Conditional = () => {
    
    
//     const returnValue = () => {
//         return false;
//     }
//     //Parenthesis isntead of curly braces are used when returning jsx
//     const showIt = () => (
//         //return jsx depending on returnVal functions return
//         returnValue() ?
//             <div>val is true</div>
//         : <div>val is false</div>
//     )
        
    
//     return (
//         <Fragment>
//             {showIt()}
//             <div>Conditional</div>
//         </Fragment>
//     )
// }

class Conditional extends Component {
    state = {
        loading: true
    }

    
    
    
    
    render() {
        if(this.state.loading === true ) {
            return (
                <div>Loading...</div>
            )
        }
        else {
            return (
                <div>Conditional</div>
            )
        }
        
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 3000)
    }
}

export default Conditional;