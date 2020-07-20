import React, {Component} from 'react';
import {Formik} from 'formik';
import {Link} from 'react-router-dom';
import AdminLayout from '../../../../hoc/admin_layout';
import {
    FormElement
} from './helpers/posts_helper';

class AddPosts extends Component {
    state = {
        editorState:'',
        editorContentHtml: '',
        success: false
    }

    render() {
        return (
            <AdminLayout>
                <h4>Add a post</h4>
                <Formik
                    initialValues={{
                        "name": "",
                        "author": "",
                        "content": "dummy content",
                        "pages": "",
                        "rating": "",
                        "price": ""
                    }}
                    onSubmit={(values) => {

                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <FormElement 
                                elData={{element: 'input', type: 'text', value: values.name}}
                                placeholder='The title of the book'
                                name='name'
                                onHandleChange={(event) => handleChange(event)}
                                onHandleBlur={(event) => handleBlur(event)}
                                errors = {errors.name}
                                touched={touched.name}
                            />

                            <FormElement 
                                elData={{element: 'input', type: 'text', value: values.name}}
                                placeholder='The title of the book'
                                name='name'
                                onHandleChange={(event) => handleChange(event)}
                                onHandleBlur={(event) => handleBlur(event)}
                                errors = {errors.name}
                                touched={touched.name}
                            />
                        </form>
                    )}

                </Formik>
            </AdminLayout>
            
        )
    }
}

export default AddPosts;