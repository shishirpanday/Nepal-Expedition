import React from 'react'
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import {Link} from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import "./ContactUs.css"

const ContactUs = () => {
  return (
    <>
    <ScrollToTop/>
    <div className='contact-us1'>
    <h6><div class="hardwork">Get Touch in</div></h6>
          <h3><div class="features">Contact Us</div></h3>
    <div className='contact-us'>
        <div>
        <Formik
        initialValues={{firstname:'',lastname:'',email:'',story:''}}
        validationSchema={Yup.object({
            firstname:Yup.string()
            .max(20,'must be 20 characters or less')
            .min(2,'must be minimum of 2 character')
            .required('first name is mandatory'),

            lastname:Yup.string()
            .max(20,'must be 20 characters or less')
            .required('last name is mandatory'),

            email:Yup.string()
            .email('invalid email format must include @ and .')
            .required('email is mandatory'),

            story:Yup.string()
            // .max(20,'must be 20 characters or less')
            .min(1000,'must be minimum of 100 character')
            .required('Message is mandatory'),



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
              <label htmlFor="story">Message</label><br/>
              <Field
                component="textarea"
                rows="6"
                name="story"
                id="story"
                className="input-box"
                placeholder="Place your Message"
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
        <div className='information'>
        <div class="bg12second">
        <div class="info">
          <div class="address">
            <div class="home"><i class="fa-solid fa-house-chimney"></i></div>
            <div class="addd">
              <div class="addr">Address</div>
              <div class="south">South Brisbane,Old 4101 Australia</div>
            </div>
          </div>
          <div class="phoneno">
            <div class="home"><i class="fa-solid fa-phone"></i></div>
            <div class="addd">
              <div class="addr">Phone</div>
              <div class="south">+971 9820450000</div>
              <div class="south">+971 9850000000</div>
          </div>         
        </div>
        <div class="email">
          <div class="envelope"><i class="fa-solid fa-envelope"></i></div>
          <div class="addd">
            <div class="addr">Email</div>
            <div class="south">info@gmail.com</div>
            <div class="south">info@gmail.com</div>
        </div>
        </div>
      </div>
    </div>
        </div>
    </div>
    </div>
    <div class="map">
        <h1><i class="fa-solid fa-location-dot fa-beat-fade"></i> Find Us Here!!!</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21313.995555464164!2d85.30783240980078!3d27.676766550542634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c50daa2fb1%3A0x6f197fa38097b530!2sPatan%20Durbar%20Square!5e0!3m2!1sen!2snp!4v1655615863052!5m2!1sen!2snp" width="100%" height="385"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </>
  )
}

export default ContactUs