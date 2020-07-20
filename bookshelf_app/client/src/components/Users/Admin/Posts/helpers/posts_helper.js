import React from 'react';



export const FormElement = (props) => {
    let template = null;

    switch(props.elData.element) {
        case 'input':
            template = <div className='row'>
                <div className='twelve columns'>
                    <input
                        type={props.elData.type}
                        name={props.name}
                        onChange={(event) => props.onHandleChange(event)}
                        onBlur={(event) => props.onHandleBlur(event)}
                        value={props.elData.value}
                        placeholder={props.placeholder}
                        // classname from skeleton
                        className='u-full-width'
                    >
                    </input>
                    {props.errors && props.touched 
                        ? <div className="error_label">{props.errors}</div>
                        : null 
                    }
                </div>
            </div>

        break;
        default:
            template = null;
    }

    return template;
}