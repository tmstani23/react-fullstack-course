import React,{ Component } from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

class FormTwo extends Component {

    state = {
        maxAge:80,
        submitting: false
    }

    myFormSchema = Yup.object().shape({
        name: Yup.string().required('This item is necessary'),
        lastname: Yup.string().required('This field is necessary'),
        age: Yup.number().min(20, 'Min age is 20').required('This item is necessary'),
        message: Yup.string().required('This field is necessary')
    })

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


    render(){
        return(
            <>
                {/* Formik handles events, value targeting and validation for forms */}
                <Formik
                    initialValues={{
                        name: '', 
                        lastname: '', 
                        age: '', 
                        message: ''
                    }}
                    validationSchema={this.myFormSchema}
                    
                    //Formik validation logic
                    // validate={values => {
                    //     let errors = {};

                    //     if(!values.name ) {
                    //         errors.name = "Sorry name input is required."
                    //     }
                    //     if(!values.lastname ) {
                    //         errors.lastname = "Sorry lastname input is required."
                    //     }
                    //     if(!values.message ) {
                    //         errors.message = "Sorry message input is required."
                    //     }
                    //     if(values.age) {
                    //         //Check for min age
                    //         if (values.age < 20) {
                    //             errors.age = "Sorry the min. age is 20."
                    //         }
                    //     } else {
                    //         errors.age = "Age is a required field"
                    //     }
                    //     console.log(errors, "errors obj");
                    //     return errors;
                    //}}

                    //ResetForm is a Formik method for resetting the form
                    onSubmit= {(values, {resetForm}) => {
                        this.setState({submitting: true})
                        //submit to server if values are valid
                        setTimeout(() => {
                            resetForm();
                            this.setState({submitting: false})
                            
                        }, 2000)
                    }}
                >
                    {   ({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                            <form onSubmit={handleSubmit}> 
                              <div className="form-group">
                                <label>Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  value={values.name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  style = {{
                                      background: `${errors.name && touched.name ? 'red' : ''}`
                                  }}
                                />
                                {errors.name && touched.name?
                                    <div style = {{
                                        color: 'red'
                                    }}>
                                        {errors.name}
                                    </div>
                                    : null
                                }
                              </div>
                              <div className="form-group">
                                <label>Lastname</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="lastname"
                                  value={values.lastname}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  style = {{
                                    background: `${errors.lastname && touched.lastname ? 'red' : ''}`
                                    }}
                                />
                                {errors.lastname && touched.lastname ?
                                    <div style = {{
                                        color: 'red'
                                    }}>
                                        {errors.lastname}
                                    </div>
                                    : null
                                }
                              </div>
                              <div className="form-group">
                                <label>Age</label>
                                <select
                                  name="age"
                                  className="form-control"
                                  value={values.age}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  style = {{
                                    background: `${errors.age && touched.age ? 'red' : ''}`
                                    }}
                                >
                                    {this.generateOptions()}
                                </select>
                                {errors.age && touched.age?
                                    <div style = {{
                                        color: 'red'
                                    }}>
                                        {errors.age}
                                    </div>
                                    : null
                                }
                              </div>

                              <div className="form-group">
                                <label>Enter your message here</label>
                                <textarea
                                  rows="3"
                                  placeholder="Add your message here..."
                                  className="form-control"
                                  name='message'
                                  value={values.message}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  style = {{
                                    background: `${errors.message && touched.message ? 'red' : ''}`
                                    }}
                                ></textarea>
                                {errors.message && touched.message ?
                                    <div style = {{
                                        color: 'red'
                                    }}>
                                        {errors.message}
                                    </div>
                                    : null
                                }
                              </div>

                              <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={this.state.submitting}
                              >
                                Submit
                              </button>
                            </form>
                    )}
                </Formik>

                
            </>
        )
    }
}

export default FormTwo;