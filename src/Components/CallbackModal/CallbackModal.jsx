import React, { useEffect } from 'react'
import './CallbackModal.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {Link} from 'react-router-dom'

const CallbackModal = ({ closeModal }) => {
  // useEffect
  return (
    <>
    <div className='modal-wrapper' onClick={closeModal}></div>
    <div></div>
    <div className='callback-popup'>
        <div className="close" onClick={closeModal}>&times;</div>
        <h1>Need help in planning your holiday?</h1><br /><br />
        <h2>How can we get in touch with you?</h2>
        <div>
        <Formik
        initialValues={{destination:'',departurecity:'',name:'',email:'',numbers:'',terms:''}}
        validationSchema={Yup.object({
            destination:Yup.string()
            .max(20,'must be 20 characters or less')
            .min(2,'must be minimum of 2 character')
            .required('Destination is mandatory'),

            departurecity:Yup.string()
            .max(20,'must be 20 characters or less')
            .required('Departure City is mandatory'),

            name:Yup.string()
            .max(20,'must be 20 characters or less')
            .min(2,'must be minimum of 2 character')
            .required('name is mandatory'),

            email:Yup.string()
            .email('invalid email format must include @ and .')
            .required('email is mandatory'),

            numbers:Yup.number()
            .max(10,'must be 10 digits')
            .required('number is mandatory'),

            cpassword:Yup.string()            
            .required('confirm password is mandatory')
            .oneOf([Yup.ref('password'),null],'password and confirm password must match'),

            terms: Yup.bool()
            .oneOf([true], 'You need to accept the terms and conditions')
            .required('You need to accept the terms and conditions')


        })}>
      <div className="d-flex1">
          <Form>
            <div className="destination-deprature">
              <div>
              <label htmlFor="destination">Destination</label>
              <Field
                type="text"
                name="destination"
                id="destination1"
                className="input-box"
                placeholder='Enter your Destination'
              />
              <ErrorMessage name="destination">
                {msg => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              </div>
              <div>
              <label htmlFor="departurecity">Departure City</label>
              <Field
                type="text"
                name="departurecity"
                id="departurecity"
                className="input-box"
                placeholder='Enter your Departure City'
              /><br/>
              <ErrorMessage name="departurecity">
                {msg => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              </div>
              </div>
              <div className="destination-deprature">
                <div className='namee'>
              <label htmlFor="name">Name</label><br/>
              <Field
                type="text"
                name="name"
                placeholder="Enter your name"
                id="name"
                className="input-box"
              /><br/>
              <ErrorMessage name="name">
                {msg => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              </div>
              <div className='emaill'>
              <label htmlFor="email">Email</label><br/>
              <Field
                type="email"
                name="email"
                id="email"
                className="input-box"
                placeholder="abc123@gmail.com"
              /><br/>
              <ErrorMessage name="email">
                {msg => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              </div>
              </div>
              <label htmlFor="numbers">Phone</label><br/>
              <Field
                type="numbers"
                name="numbers"
                id="numbers"
                className="input-box"
                placeholder="Enter your number"
              /><br/>
              <ErrorMessage name="numbers">
                {msg => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            
              <div className="remember">
               <Field type="checkbox" name="terms" id="terms" className="remember"/>            
              <label htmlFor="remember" className="remember">I have read and agree to the  <Link to="/login"> User Agreement </Link> & <Link to='/terms&conditions'>Privacy Policy</Link></label>
              <ErrorMessage name="terms">
                {msg => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              </div>           
            <div className="login">
                <button className="btn">Get a Callback</button>
            </div>
          </Form>
      </div>
    </Formik>
        </div>
    </div>
    </>
  )
}

export default CallbackModal