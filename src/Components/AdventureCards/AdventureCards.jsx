import React from 'react'
import './AdventureCards.css'

const AdventureCards = ({item}) => {
  return (
    <>
     <div className="activities hiking">
          <h1>{item.title}</h1>
          <img src={item.img} alt="#" />
          <div className="callback">
            <button>
              <h4>Get a Callback</h4>
            </button>
          </div>
        </div>
    </>
  )
}

export default AdventureCards