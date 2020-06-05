import React, { Component } from 'react';

import '../css/App.css';
import {CSSTransition} from 'react-transition-group';

class Fade extends Component{
    
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
            <div>
                {/* Provide class and CSSTransition will handle transitions automatically */}
                <CSSTransition
                    in={this.state.show}
                    timeout={500}
                    classNames = 'square'
                >
                    {/* return element to animate */}
                    <div className={`square ${this.state.show}`}>CSS transition div</div>
                </CSSTransition>
                 <button 
                    className="showDiv"
                    onClick={this.showDiv}
                >
                    Transitions comp
                </button>
            </div>
        )
    }
}


export default Fade;