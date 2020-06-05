import React, { Component } from 'react';
import '../css/App.css';
import { CSSTransition, TransitionGroup} from 'react-transition-group'

class Slide extends Component{
    state = {
        items:[23, 99,32]
    }
    
    showElements () {
        return this.state.items.map((item, i) => (
            <CSSTransition
                classNames='item'
                timeout={1000}
                //appear allows default (items) elements to show
                appear={true}
                key={i}
                // active class is added to the node when it's added to the list
                onEntered={(node) => {
                    node.classList.add('active')
                }}
            >
                <div className="item">{item}</div>
            </CSSTransition>
            
        ))
    }

    generateNumber(){
       let itemsArr = [
            // include whatever is in state items before update   
            ...this.state.items,
            Math.floor(Math.random()*100) + 1
       ]
       this.setState({
           items: itemsArr
       })
    }

    removeNumber(){
        let itemsArr = [
            ...this.state.items,
        ].splice(1);
        
        this.setState({
            items: itemsArr
        })
    }

    render(){
        return(
            <div>
                {/* component parameter specifies to wrap all elements from the list in divs */}
                <TransitionGroup component='div' className="list">
                    {this.showElements()}
                </TransitionGroup>
                
             
                <div className="btns">
                    <div className="btn-add" onClick={()=> this.generateNumber()}>Add Elements</div>
                    <div className="btn-remove" onClick={()=> this.removeNumber()}>Remove Elements</div>
                </div>
            </div>
        )
    }



}


export default Slide;