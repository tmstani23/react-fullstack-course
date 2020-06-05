import React, {PureComponent, Component, Fragment} from 'react';

// class PureComp extends Component {
//     state = {
//         name: 'Timothy'
//     }
//     //Component decides if re-render should occur
//     shouldComponentUpdate(nextProps, nextState) {
//         //if the next name state is going to be the same as current don't rerender
//         if(nextState.name === this.state.name) {
//             return false;
//         }
//         return true;
//     }

//     render(){
//         console.log('rendering non-purecomp')
//         return (
//             <Fragment>
//                 <h3>{this.state.name}</h3>
//                 <button onClick={() => {
//                     this.setState({name: "Timbob"})
//                 }}>Click to change name</button>
//             </Fragment>
//         );
//     }
// }

//react PureComponents will automatically only rerender if next state val is same as current
class PureComp extends PureComponent {
    state = {
        name: 'Timothy'
    }

    render(){
        console.log('rendering purecomp')
        return (
            <Fragment>
                <h3>{this.state.name}</h3>
                <button onClick={() => {
                    this.setState({name: "Timbob"})
                }}>Click to change name</button>
            </Fragment>
        );
    }
}

export default PureComp;