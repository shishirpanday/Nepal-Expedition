import React from 'react'
import { Link } from 'react-router-dom'
import './Getcallbackbox.css'
import CallbackModal from '../../Components/CallbackModal/CallbackModal'
import { useState } from 'react'



const GetCallbackbox = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal= () => setShowModal(false);
  
  return (
    <>
    <div className="get-call" onClick={()=>setShowModal(true)}>
        <div className="get-callbox">
          <div>
            <i class="fa-solid fa-phone-volume fa-beat-fade"></i>
          </div>
          <h3>Get a Callback</h3>
        </div>
      </div>
     {showModal && <CallbackModal closeModal={closeModal}/>} 
    </>
  )
}

export default GetCallbackbox