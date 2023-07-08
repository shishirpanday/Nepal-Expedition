import React from 'react'
import './packagesCard.css'
const PackagesCard = ({item}) => {
  return (
    <>
    <div className="packages1 sixbox">
          <h2>{item.title}</h2>
          <div className="image1">
            <img src={item.img} alt="#" />
          </div>
          <div className="dur">
            <div className="duration">
              <h4>{item.duration}</h4>
            </div>
          </div>
          <div className="nights">
            <h4>
              <span>{item.durDetail.days[0]}</span> {item.durDetail.location[0]} | <span>{item.durDetail.days[1]}</span> {item.durDetail.location[1]} |{" "}
              <span>{item.durDetail.days[2]}</span> {item.durDetail.location[2]}
            </h4>
          </div>
          <div className="price">
            <h2>Rs. {item.price}/-</h2>Per Person
          </div>
          <div className="booking">
            <button>
              <h3>Book Now</h3>
            </button>
          </div>
        </div>
    </>
  )
}

export default PackagesCard