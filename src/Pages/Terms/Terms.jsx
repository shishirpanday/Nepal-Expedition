import React from 'react'
import './Terms.css'
import ScrollToTop from '../ScrollToTop'

const Terms = () => {
  return (
    <>
    <ScrollToTop/>
    <div className='terms'>
    <h1>Terms and Conditions for Nepal Expeditions:</h1>
    <ol className='a'>
        <li>Booking and Reservation:
            <ul>
                <li>All bookings and reservations with Nepal Expeditions are subject to availability.</li>
                <li>A non-refundable deposit or full payment, as specified by the company, is required to secure the booking.</li>
                <li>The balance payment must be made by the specified due date prior to the trip departure.</li>
            </ul>
        </li>
        <li>Cancellations and Refunds:
            <ul>
                <li>Cancellations must be made in writing and will be subject to cancellation charges based on the timeframe before the trip departure.</li>
                <li>The applicable cancellation policy will be provided at the time of booking.</li>
                <li>No refunds will be provided for any unused services or portions of the trip.</li>
            </ul>
        </li>
        <li>Itinerary Changes:
            <ul>
                <li>Nepal Expeditions reserves the right to modify or alter the itinerary, including changes in accommodations, transportation, or activities, if necessary due to unforeseen circumstances or events beyond our control.</li>
                <li>In such cases, the company will provide suitable alternatives of equal value and quality.</li>
            </ul>
        </li>
        <li>Travel Insurance:
            <ul>
                <li>It is mandatory for all participants to have comprehensive travel insurance that covers medical expenses, trip cancellation, trip interruption, and emergency evacuation.</li>
                <li>Proof of travel insurance must be provided before the trip departure.</li>
            </ul>
        </li>
        <li>Health and Fitness:
            <ul>
                <li>Participants should be in good health and have a suitable level of fitness to participate in the chosen trip.</li>
                <li>It is the responsibility of participants to inform Nepal Expeditions of any pre-existing medical conditions or dietary requirements that may affect their ability to participate fully in the trip.</li>
            </ul>
        </li>
        <li>Liability and Responsibility:
            <ul>
                <li>Nepal Expeditions acts as an agent for various suppliers and is not responsible for any loss, damage, injury, or delay caused by the actions or negligence of these suppliers or other third parties.</li>
                <li>Participants are responsible for their personal belongings and are advised to obtain appropriate travel insurance coverage.</li>
            </ul>
        </li>
        <li>Travel Documents:
            <ul>
                <li>Participants are responsible for ensuring they have valid passports, visas, and any other required travel documents for entry into Nepal.</li>
                <li>Nepal Expeditions will provide assistance and guidance regarding necessary travel documents but is not responsible for any issues or complications related to the participant's failure to obtain the required documents.</li>
            </ul>
        </li>
        <li>Code of Conduct
            <ul>
                <li>Participants are expected to adhere to local customs, laws, and regulations during the trip.</li>
                <li>Any behavior that is deemed offensive, disrespectful, or harmful to fellow participants, local communities, or the environment may result in immediate termination of the trip without any refund.</li>
            </ul>
        </li>
    </ol>
    <p>By making a booking with Nepal Expeditions, participants acknowledge that they have read, understood, and agreed to these terms and conditions. It is recommended to review the terms and conditions thoroughly before confirming a booking.</p>
    </div>
    </>
  )
}

export default Terms