import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {Link} from 'react-router-dom'
import './Login.css'
import ScrollToTop from '../ScrollToTop';


const Login = () => {
  return (
    <>
    <ScrollToTop/>
    <Formik
        initialValues={{username:'',lastname:'',email:'',password:'',terms:''}}
        validationSchema={Yup.object({
            username:Yup.string()
            .max(20,'must be 20 characters or less')
            .min(2,'must be minimum of 2 character')
            .required('Username is mandatory'),

            password:Yup.string()
            .matches(/(?=.*[A-Za-z])(?=.*\d)(?=.*[*&#@.?!])[A-Za-z\d*&#@.?!]{8,}$/,'must contain 8 character ,one uppercase,one lower case,one digit and one special chracter like @#&')
            .required('password is mandatory'),

            

        })}>
      <div className="d-flex">
          <Form>
                <h1 className='log'>Log-In</h1>
                <label htmlFor="username">Username</label><br/>
              <Field
                type="text"
                name="username"
                placeholder="Enter your Username"
                id="username"
                className="input-box"
              />

              <ErrorMessage name="username">
                {msg => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
             
             
              <label htmlFor="password">Password</label><br/>
              <Field
                type="password"
                name="password"
                placeholder="Enter your Password"
                id="password"
                className="input-box"
              />
              <br/>
              <ErrorMessage name="password">
                {msg => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <div className="remember">
               <Field type="checkbox" name="terms" id="terms" className="remember"/>            
              <label htmlFor="remember" className="remember">Remember me</label>
              </div>
            
            <div className='forget'><Link to='#'>Forget Password?</Link></div>
            <div className="login">
                <button className="btn ">Log-In</button>
            </div>
            <div className='register'>Don't have an account? <Link to="/login/register"> Register </Link></div>
          </Form>
      </div>
    </Formik>
    
    </>
  )
}

export default Login