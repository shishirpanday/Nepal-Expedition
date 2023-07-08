import React from 'react'
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom'
import Header from './Pages/Header/Header'
import Packages from './Pages/Packages/Packages'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Nav from './Pages/Nav/Nav'
import Footer from './Pages/Footer/Footer'
import Adventure from './Pages/Adventure/Adventure'
import Terms from './Pages/Terms/Terms'
import About from './Pages/About/About'
// import GetCallback from './Pages/GetCallback/GetCallback'
import GetCallbackbox from './Pages/GetCallbackbox/GetCallbackbox'
import ShareExperience from './Pages/ShareExperience/ShareExperience'
import ContactUs from './Pages/ContactUs/ContactUs'


const MyRoute = () => {
  return (
   <Router>
    <Nav/>
    <GetCallbackbox/>
    <Routes>
         <Route path='/' element={<Header/>}/> 
         <Route path='/packages' element={<Packages/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/login/register' element={<Register/>}/>
         <Route path='/adventure' element={<Adventure/>}/>
         <Route path='/terms&conditions' element={<Terms/>}/>
         <Route path='/aboutus' element={<About/>}/>
         <Route path='/share-experience' element={<ShareExperience/>}/>
         <Route path='/Contactus' element={<ContactUs/>}/>
         {/* <Route path='/getcallback' element={<GetCallback/>}/> */}
    </Routes>
    <Footer/>
   </Router>
  )
}

export default MyRoute