import React, { Component } from 'react';
import '../css/App.css';

class Slide extends Component{
    state = {
        items:[]
    }
    
    addElements () {
      
    }

    generateNumber(){
       
    }

    removeNumber(){
      
    }

    render(){
        return(
            <div>
                {this.addElements()}
             
                <div className="btns">
                    <div className="btn-add" onClick={()=> this.generateNumber()}>Add Elements</div>
                    <div className="btn-remove" onClick={()=> this.removeNumber()}>Remove Elements</div>
                </div>
            </div>
        )
    }



}


export default Slide;