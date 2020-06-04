import React, { Component } from 'react';
import {Transition} from 'react-transition-group';
import '../css/App.css';

class TransitionComp extends Component {
    state = {
        show: false
    }
    showDiv = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render(){
        return(
            //Empty tag refers to React Fragment
            <>
                {/* Transition has 4 states entering/entered/exiting/exited 
                    in is a boolean for triggering the transition
                    timeout is the time between transitions
                */}
                <Transition
                    in={this.state.show}
                    timeout={2000}
                    // can disable different transition states:
                    enter={false}
                    exit={false}
                    //call function on state transition. also has access to the dom node
                    onEntered = {(node) => {
                        console.log("entered func trigger in trans comp")
                    }}
                    onExited = {(node) => {
                        console.log("exit", node)
                    }}
                >
                    {/* State function must be provided to add the classes */}
                    {state => (
                        <div className={`square square-${state}`}>
                            {state}
                        </div>
                    )}
                </Transition>
                <button 
                    className="showDiv"
                    onClick={this.showDiv}
                >
                    Show style
                </button>
                
            </>

        )
    }
}


export default TransitionComp;