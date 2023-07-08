import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {Link} from 'react-router-dom'
import ScrollToTop from '../ScrollToTop';

const Register = () => {
  return (
    <>
    <ScrollToTop/>
    <Formik
        initialValues={{firstname:'',lastname:'',username:'',email:'',password:'',cpassword:'',terms:''}}
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
            .required('Username is mandatory'),

            email:Yup.string()
            .email('invalid email format must include @ and .')
            .required('email is mandatory'),

            password:Yup.string()
            .matches(/(?=.*[A-Za-z])(?=.*\d)(?=.*[*&#@.?!])[A-Za-z\d*&#@.?!]{8,}$/,'must contain 8 character ,one uppercase,one lower case,one digit and one special chracter like @#&')
            .required('password is mandatory'),

            cpassword:Yup.string()            
            .required('confirm password is mandatory')
            .oneOf([Yup.ref('password'),null],'password and confirm password must match'),

            terms: Yup.bool()
            .oneOf([true], 'You need to accept the terms and conditions')
            .required('You need to accept the terms and conditions')


        })}>
      <div className="d-flex">
          <Form>
                <h1 className='log'>Registration</h1>
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
              <label htmlFor="username">Username</label><br/>
              <Field
                type="text"
                name="username"
                placeholder="Enter your Username"
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
              <label htmlFor="password">Password</label><br/>
              <Field
                type="password"
                name="password"
                id="password"
                className="input-box"
                placeholder="*************************"
              /><br/>
              <ErrorMessage name="password">
                {msg => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <label htmlFor="cpassword">Confirm Password</label><br/>
              <Field
                type="password"
                name="cpassword"
                id="cpassword"
                className="input-box"
                placeholder="**************************"
              /><br/>
              <ErrorMessage name="cpassword">
                {msg => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>   
              <div className="remember">
               <Field type="checkbox" name="terms" id="terms" className="remember"/>            
              <label htmlFor="remember" className="remember">I agree to the <Link to='/terms&conditions'>terms and conditions.</Link></label>
              <ErrorMessage name="terms">
                {msg => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              </div>           
            <div className="login">
                <button className="btn">Register</button>
            </div>
            <div className='register'>Already have an account? <Link to="/login"> Log-In </Link></div>
          </Form>
      </div>
    </Formik>
    </>
  )
}

export default Register