import React from 'react'
import Resident from "./../Resident/Resident" //Evil
import './LocationDisplay.css'
const Locationdisplay = (props) => {


  return (
    <div className='Locationdisplay'>
      <span className='Locationdisplay__name extra'>Name: {props.location.name}</span>
      <span className='Locationdisplay__type extra'>Type: {props.location.type}</span>
      <span className='Locationdisplay__dimension extra'>Dimension: {props.location.dimension}</span>
      <span className='Locationdisplay__created extra'>Created: {props.location.created}</span>
      <span className='Locationdisplay__url extra'>URL: {props.location.url}</span>
      <div className='Locationdisplay__residents extra'>
        {props.location.residents.map((x, ind) => <Resident index={ind} resident={x}></Resident>)}
      </div>
    </div>
  )
}
export default Locationdisplay;