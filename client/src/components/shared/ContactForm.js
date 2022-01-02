import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form'
import CTAButton from './CTAButton'

const sender = (values) => {
  return fetch("/api/mailer/contact-me", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
    .then((res) => true)
    .catch((err) => false)  
}

let ContactForm = () => {

  const [disableSubmit, setDisableSubmit] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageClass, setMessageClass] = useState(null);

  const handleSubmit = async (values) => {
    const res = await sender(values);

    console.log(res);
    if(res){
      setDisableSubmit(true);
      setMessage('You have successfully submitted the form, you will be contacted soon!')
      setMessageClass('text-primary');
    } else {
      setMessage('Something went wrong, please try again later.');
      setMessageClass('text-danger');
    }
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
                  <textarea rows="5" {...input} type="textarea" placeholder="Provide the reason for contacting..." className="form-control" />
                  {meta.error && meta.touched && <span className="small-text text-danger">{meta.error}</span>}
                </div>
              )}
          </Field>  
        <div className="p-4 text-center">
          <button className="btn cta-button d-inline-block w-auto" type="submit" disabled={disableSubmit}>
            <strong className="text-warning">Submit</strong>
          </button>        
        </div>
        {message != '' && <div className={messageClass}>{message}</div>}
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