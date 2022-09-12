import React from 'react'
import Resident from "./../Resident/Resident"

export default function Locationdisplay(props) {
  return (
    <div className='Locationdisplay'>
      <span className='Locationdisplay__name'>Name: {props.location.name}</span>
      <span className='Locationdisplay__type'>Type: {props.location.type}</span>
      <span className='Locationdisplay__dimension'>Dimension: {props.location.dimension}</span>
      <span className='Locationdisplay__created'>Created: {props.location.created}</span>
      <span className='Locationdisplay__url'>URL: {props.location.url}</span>
      <div className='Locationdisplay__residents'>
          {props.location.residents.map((x, ind) => <Resident index={ind} resident={x}></Resident>)}
      </div>
    </div>
  )
}
