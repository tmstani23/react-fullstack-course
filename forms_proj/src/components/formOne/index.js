import React,{ Component } from 'react';
import FormField from '../utils/formFields';
import {validate} from '../utils/validate';

class FormOne extends Component {

    state = {
        maxAge:80,
        //General template used for updating form fields, handling values and validation
        formData: {
            name: {
                element: 'input',
                value: '',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name',
                },
                validation: {
                    required: true
                },
                valid:false,
                touched: false,
                validationMessage: ''
            }
        }
    }
    //Function for generating options in select element of form
    generateOptions = () => {
        const ageArray = [];

        for(let i=1; i<this.state.maxAge; i++) {
            ageArray.push(i)
        }
        return ageArray.map((value, i) => {
            return (
                <option key={i} value = {value}>{value}</option>
            )
        })
    }
    updateForm = (element) => {
        //Copy form data template from state
        const newFormData = {
            ...this.state.formData
        }
        //copy form data template name (based on passed in id)
        const newElement = {
            ...newFormData[element.id]
        }
        //Update new element value to the input target value
        newElement.value = element.event.target.value;
        
        //Validate form data
        let validateData = validate(newElement);
        newElement.valid = validateData[0];
        newElement.validationMessage = validateData[1];
        
        //Catch blur when user clicks off input and update touched field
        if(element.blur) {
            newElement.touched = element.blur;
        }

        //Update new form data with the newly updated element
        newFormData[element.id] = newElement;

        //Update form template in state with new validated data
        this.setState({
            formData: newFormData
        })
        console.log(newFormData)
    }

    render(){
        return(
            <>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <FormField 
                            formData={this.state.formData.name}
                            id='name'
                            change={(element) => this.updateForm(element)}
                        />
                        {/* <input 
                            type="text"
                            className="form-control"
                            name="name_input"
                        /> */}
                    </div>
                    <div className="form-group">
                        <label>Lastname</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="lastname_input"
                        />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <select
                            name="age_input"
                            className="form-control" 
                        >
                        {/* Generates # of ages to select from dropdown */}
                        {this.generateOptions()}  
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label>Enter your message here</label>
                        <textarea 
                            rows="3"
                            placeholder="Add your message here..."
                            className="form-control"
                        ></textarea>
                    </div>
                    
                    <button 
                        type="submit"
                        className="btn btn-primary"
                        onClick={(event)=>this.submitForm(event)}
                        disabled={this.state.loading}
                    >
                        Submit
                    </button>

                </form>
            </>
        )
    }
}

export default FormOne;