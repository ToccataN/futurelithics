import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form'
import CTAButton from './CTAButton'

const handleSubmit = (values) => {
  fetch("/api/mailer/contact-me", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
    .then((res) => console.log(res, "res"))
    .catch((err) => console.log(err,"error"))
}

const validators = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.message) {
    errors.message = "Required";
  }  
  return errors;
}

let ContactForm = () => {
  return( 
    <Form
      onSubmit={handleSubmit}
      validate={validators}
    >
    { (props) => (
      <form onSubmit={props.handleSubmit}>
        <div className="row mb-4 g-3">
          <Field name="firstName">
              {({ input, meta }) => (
                <div className="col">
                  <label>First Name</label>
                  <input {...input} type="text" placeholder="First Name" className="form-control" />
                  {meta.error && meta.touched && <span className="small-text text-danger">{meta.error}</span>}
                </div>
              )}
          </Field>
          <Field name="lastName" className="col">
              {({ input, meta }) => (
                <div className="col">
                  <label>Last Name</label>
                  <input {...input} type="text" placeholder="Last Name" className="form-control" />
                  {meta.error && meta.touched && <span className="small-text text-danger">{meta.error}</span>}
                </div>
              )}
          </Field>       
        </div>
          <Field name="email" className="col">
              {({ input, meta }) => (
                <div className="mb-4">
                  <label>Email</label>
                  <input {...input} type="text" placeholder="Email" className="form-control" />
                  {meta.error && meta.touched && <span className="small-text text-danger">{meta.error}</span>}
                </div>
              )}
          </Field>  
          <Field name="message" className="col">
              {({ input, meta }) => (
                <div className="mb-4">
                  <label>Message</label>
                  <input {...input} type="text" placeholder="Provide the reason for contacting..." className="form-control" />
                  {meta.error && meta.touched && <span className="small-text text-danger">{meta.error}</span>}
                </div>
              )}
          </Field>  
        <div className="p-4 text-center">
          <button className="btn cta-button d-inline-block w-auto" type="submit">
            <strong className="text-warning">Submit</strong>
          </button>        
        </div>
      </form>
      )
    }
    </Form>
  )
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.any
}

export default ContactForm;