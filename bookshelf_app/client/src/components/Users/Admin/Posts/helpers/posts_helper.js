import React from 'react';
import * as Yup from 'yup';

export const BookSchema = Yup.object().shape({
        name: Yup.string().required('Name required'),
        author: Yup.string().required('Author required'),
        pages: Yup.number().required('Pages required'),
        rating: Yup.number().required('Rating required'),
        price: Yup.number().required('Price required'),
});



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
        // template for select type elements
        case 'select':
            template = <div className='row'>
                <div className='twelve columns'>
                    <select
                        name={props.name}
                        onChange={(event) => props.onHandleChange(event)}
                        onBlur={(event) => props.onHandleBlur(event)}
                        value={props.elData.value}
                        className='u-full-width'
                    >
                        {props.children}
                    </select>
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