import React from 'react'
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import {Link} from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import "./ShareExperience.css"

const ShareExperience = () => {
  return (
    <>
     <ScrollToTop/>
     <div className="share-experience">
     <h1 >Share Your Experience</h1>
     <div>
    <Formik
        initialValues={{firstname:'',lastname:'',username:'',email:'',story:'',cpassword:'',terms:''}}
        validationSchema={Yup.object({
            firstname:Yup.string()
            .max(20,'must be 20 characters or less')
            .min(2,'must be minimum of 2 character')
            .required('first name is mandatory'),

            lastname:Yup.string()
            .max(20,'must be 20 characters or less')
            .required('last name is mandatory'),

            username:Yup.string()
            .max(20,'must be 20 characters or less')
            .min(2,'must be minimum of 2 character')
            .required('Destination is mandatory'),

            email:Yup.string()
            .email('invalid email format must include @ and .')
            .required('email is mandatory'),

            story:Yup.string()
            // .max(20,'must be 20 characters or less')
            .min(1000,'must be minimum of 100 character')
            .required('Story is mandatory'),

            cpassword:Yup.string()            
            .required('confirm password is mandatory')
            .oneOf([Yup.ref('password'),null],'password and confirm password must match'),

            terms: Yup.bool()
            .oneOf([true], 'You need to accept the terms and conditions')
            .required('You need to accept the terms and conditions')


        })}>
      <div className="d-flex2">
          <Form>
              <label htmlFor="firstname">FirstName</label><br/>
              <Field
                type="text"
                name="firstname"
                id="firstname"
                className="input-box"
                placeholder='Enter your Firstname'
              /><br/>
              <ErrorMessage name="firstname">
                {msg => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <label htmlFor="lastname">LastName</label>
              <Field
                type="text"
                name="lastname"
                id="lastname"
                className="input-box"
                placeholder='Enter your lastname'
              /><br/>
              <ErrorMessage name="lastname">
                {msg => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <label htmlFor="username">Destination You Visited</label><br/>
              <Field
                type="text"
                name="username"
                placeholder="Enter your Destination"
                id="username"
                className="input-box"
              /><br/>
              <ErrorMessage name="username">
                {msg => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
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
              <label htmlFor="story">Your Travel Stories</label><br/>
              <Field
                component="textarea"
                rows="6"
                name="story"
                id="story"
                className="input-box"
                placeholder="Share your Story"
                style={{ border : "2px solid black" }}
              /><br/>
              <ErrorMessage name="story">
                {msg => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            <div className="login">
                <button className="btn">Submit</button>
            </div>
          </Form>
      </div>
    </Formik>
    </div>
    </div>
    </>
  )
}

export default ShareExperience