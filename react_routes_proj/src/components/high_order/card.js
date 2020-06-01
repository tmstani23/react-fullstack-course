import React from 'react';

//High order component that renders a background on all its child components
const Card = (props) => {
    const style = {
        background:'lightgrey'
    }
    
    return (
      <div style={style} className="card">
        {/* renders any child components wrapped under the parent Card comp */}
        {props.children}
      </div>
    ); 
}

export default Card;