import React from 'react'

const Main = (props) => {
  return (
    <div className="locations">
        <img src={props.image} alt="" className='location--img'/>
        <div className='travel--details'>
            <div className="location--details">
                <h2 className='location--country'>{props.location}</h2>
                <a href={props.map}>View on Google Maps</a>
            </div>
            <h1 className='location--name'>{props.title}</h1>
            <span className='travel--dates'>{props.startDate} - {props.endDate}</span>
            <p className='travel--description'>{props.description}</p>
        </div>
    </div>
  )
}

export default Main