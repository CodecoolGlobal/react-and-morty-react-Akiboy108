import React from 'react'
import Resident from "./../Resident/Resident"

export default function Locationdisplay(props) {
  return (
    <div className='Locationdisplay'>
      <span className='Locationdisplay__name'>Name: {props.name}</span>
      <span className='Locationdisplay__type'>Type: {props.type}</span>
      <span className='Locationdisplay__dimension'>Dimension: {props.dimension}</span>
      <span className='Locationdisplay__created'>Created: {props.created}</span>
      <span className='Locationdisplay__url'>URL: {props.url}</span>
      <div className='Locationdisplay__residents'>
          {props.residents.map((x, ind) => <Resident index={ind} resident={x}></Resident>)}
      </div>
    </div>
  )
}
