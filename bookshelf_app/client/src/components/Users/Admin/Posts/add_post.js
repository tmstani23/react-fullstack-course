import React, {Component} from 'react';
import {Formik} from 'formik';
import {Link} from 'react-router-dom';
import AdminLayout from '../../../../hoc/admin_layout';
import {
    FormElement, BookSchema
} from './helpers/posts_helper';
// react-draft wysiwyg component imports
import {EditorState} from 'draft-js'
import {stateToHTML} from 'draft-js-export-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// Redux imports
import {connect} from 'react-redux';
import {addBook, clearBook} from '../../../../store/actions/book_actions';

class AddPosts extends Component {
    state = {
        editorState: EditorState.createEmpty(),
        editorContentHtml: '',
        success: false
    }
    // Update state with editor object and converted html
    onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
          editorContentHtml: stateToHTML(editorState.getCurrentContent())
        })
    }

    // dispatch the input vals from the book form to the redux reducer
    onPostBook = (values) => {
      this.props.dispatch(addBook(values));
    }

    componentDidUpdate(prevProps) {
      const hasChanged = this.props.books !== prevProps.books;
      
      if(hasChanged) this.setState({success: true});
    }

    componentWillUnmount(){
      this.props.dispatch(clearBook());
    }

    render() {
        return (
          <AdminLayout>
            <h4>Add a book</h4>
            {/* Formik form for handling book inputs and form event handling as well as validation of form inputs */}
            <Formik
              initialValues={{
                name: '',
                author: '',
                pages: '',
                rating: '',
                price: '',
              }}
              validationSchema={BookSchema}
              // resetForm is a builtin Formik helper function
              onSubmit={(values, {resetForm}) => {
                //post the book data to the backend server
                this.onPostBook({
                  ...values,
                  content: this.state.editorContentHtml
                })
                //reset state to empty
                this.setState({
                  editorState: EditorState.createEmpty(),
                  editorContentHtml: ''
                })
                // reset form
                resetForm({});
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                // form containing various inputs for book details
                <form onSubmit={handleSubmit}>
                    {/* Element for entering the books title */}
                    <FormElement
                        elData={{
                            element: "input",
                            type: "text",
                            value: values.name,
                        }}
                        placeholder="The title of the book"
                        name="name"
                        onHandleChange={(event) => handleChange(event)}
                        onHandleBlur={(event) => handleBlur(event)}
                        errors={errors.name}
                        touched={touched.name}
                    />

                    <Editor
                        editorState={this.state.editorState}
                        onEditorStateChange={this.onEditorStateChange}
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"  
                    />

                    <h4>Book Info</h4>
                    {/* Element for entering the books author */}
                    <FormElement
                        elData={{
                            element: "input",
                            type: "text",
                            value: values.author,
                        }}
                        placeholder={`The Author's name`}
                        name="author"
                        onHandleChange={(event) => handleChange(event)}
                        onHandleBlur={(event) => handleBlur(event)}
                        errors={errors.author}
                        touched={touched.author}
                    />
                    {/* Element for entering the books # of pages */}
                    <FormElement
                        elData={{
                            element: "input",
                            type: "number",
                            value: values.pages,
                        }}
                        placeholder="Number of pages"
                        name="pages"
                        onHandleChange={(event) => handleChange(event)}
                        onHandleBlur={(event) => handleBlur(event)}
                        errors={errors.pages}
                        touched={touched.pages}
                    />
                    {/* Select element for entering the books rating */}
                    <FormElement
                        elData={{ element: "select", value: values.rating }}
                        name="rating"
                        onHandleChange={(event) => handleChange(event)}
                        onHandleBlur={(event) => handleBlur(event)}
                        errors={errors.rating}
                        touched={touched.rating}
                        >
                        <option default>Select a rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </FormElement>
                    {/* Element for entering the books price */}
                    <FormElement
                        elData={{
                            element: "input",
                            type: "number",
                            value: values.price,
                        }}
                        placeholder="What is the price?"
                        name="price"
                        onHandleChange={(event) => handleChange(event)}
                        onHandleBlur={(event) => handleBlur(event)}
                        errors={errors.price}
                        touched={touched.price}
                    />
                    <button type="submit">Add book</button>
                    <br />
                    {
                      // link to the book if the post is successful
                      this.state.success 
                        ? <div className='succes_entry'>
                          <div>Congrats!</div>
                          <Link to={`/article/${this.props.books.addBook.bookId}`}>
                            See your book
                          </Link>
                        </div>
                          
                        : null
                    }

                </form>
              )}
            </ Formik>
          </AdminLayout>
        );
    }

}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(AddPosts);