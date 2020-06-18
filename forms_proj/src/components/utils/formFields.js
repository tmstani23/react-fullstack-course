import React from 'react';

const FormFields = ({formData, change, id}) => {
    
    const showError = () => {
        let errorMessage = null;
        if(
            formData.validation &&
            !formData.valid &&
            formData.validationMessage
        ){
            errorMessage = (
                <div className="error-label">
                    {formData.validationMessage}
                </div>
            )
        }
        return errorMessage;
    }


    const renderTemplate = () => {
        let formTemplate = null;
        console.log(formData);
        switch(formData.element) {
            case('input'):
                formTemplate = (
                    <>
                        
                        <input 
                            {...formData.config}
                            value={formData.value}
                            className='form-control'
                            onBlur={(event) => change({event, id, blur:true})}
                            onChange={(event) => change({event, id, blur:null})}
                        />
                        {showError()}

                    </> 
                )

            break;
            default: 
                formTemplate = null;
        }

        return formTemplate;
    }
    
    return (
        <>
            {renderTemplate()}    
        </>
    )
}

export default FormFields;