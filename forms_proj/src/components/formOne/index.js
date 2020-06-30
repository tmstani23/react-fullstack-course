import React,{ Component } from 'react';
import FormField from '../utils/formFields';
import {validate} from '../utils/validate';
import FormFields from '../utils/formFields';

class FormOne extends Component {
  state = {
    maxAge: 80,
    loading: false,
    //General template used for updating form fields, handling values and validation
    formData: {
      name: {
        element: "input",
        value: "",
        config: {
          name: "name_input",
          type: "text",
          placeholder: "Enter your name",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      lastname: {
        element: "input",
        value: "",
        config: {
          name: "lastname_input",
          type: "text",
          placeholder: "Enter your lastname",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      age: {
        element: "select",
        value: "",
        config: {
          name: "age_input",
        },
        validation: {
          required: true,
          minNum: 20,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      message: {
        element: "textarea",
        value: "",
        config: {
          name: "message_input",
          rows: 3,
          placeholder: 'Enter your message here...'
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
    },
  };
  //Function for generating options in select element of form
  generateOptions = () => {
    const ageArray = [];

    for (let i = 1; i < this.state.maxAge; i++) {
      ageArray.push(i);
    }
    return ageArray.map((value, i) => {
      return (
        <option key={i} value={value}>
          {value}
        </option>
      );
    });
  };
  updateForm = (element) => {
    //Copy form data template from state
    const newFormData = {
      ...this.state.formData,
    };
    //copy form data template name (based on passed in id)
    const newElement = {
      ...newFormData[element.id],
    };
    //Update new element value to the input target value
    newElement.value = element.event.target.value;

    //Validate form data
    let validateData = validate(newElement);
    newElement.valid = validateData[0];
    newElement.validationMessage = validateData[1];

    //Catch blur when user clicks off input and update touched field
    if (element.blur) {
      newElement.touched = element.blur;
    }

    //Update new form data with the newly updated element
    newFormData[element.id] = newElement;

    //Update form template in state with new validated data
    this.setState({
      formData: newFormData,
    });
    //console.log(newFormData);
  };

  onSuccess = () => {
      let formDataCopy = {
          ...this.state.formData
      }
      //Reset form data fields
      for(let key in this.state.formData) {
          formDataCopy[key].value = '';
          formDataCopy[key].valid = false;
          formDataCopy[key].touched = false;
      }
      this.setState({
          formData: formDataCopy
      })
      alert('Thank You we will get back to you..or not.')
  }

  submitForm = (event) => {
    event.preventDefault()

    let dataToSubmit = {};
    let formIsValid = true;

    //Check if each property of formData is valid and if previous were valid
    for(let key in this.state.formData) {
        formIsValid = this.state.formData[key].valid && formIsValid
    }
    if(formIsValid) {
        this.setState({loading: true});

        for(let key in this.state.formData) {
            //Update submit object with formData property and input value
            dataToSubmit[key] = this.state.formData[key].value
        }
        //Simulate network request
        setTimeout(() =>{
            this.setState({loading: false});
            this.onSuccess();
        }, 2000)
    } else {
        alert('Sorry form is not valid.');
    }

    //console.log(dataToSubmit);
  }

  render() {
    return (
      <>
        <form>
          <div className="form-group">
            <label>Name</label>
            <FormField
              formData={this.state.formData.name}
              id="name"
              change={(element) => this.updateForm(element)}
            />
          </div>
          <div className="form-group">
            <label>Lastname</label>
            <FormField
              formData={this.state.formData.lastname}
              id="lastname"
              change={(element) => this.updateForm(element)}
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <FormField
              formData={this.state.formData.age}
              id="age"
              change={(element) => this.updateForm(element)}
            >
                <option value=''>Select Age</option>
                {this.generateOptions()}
            </FormField>
          </div>

          <div className="form-group">
            <label>Message</label>
            <FormField
              formData={this.state.formData.message}
              id="message"
              change={(element) => this.updateForm(element)}
            >
            </FormField>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(event) => this.submitForm(event)}
            disabled={this.state.loading}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default FormOne;