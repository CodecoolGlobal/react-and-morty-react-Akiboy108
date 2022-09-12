import React from 'react'
import Episode from "./../Episode/Episode"

export default function Characterdisplay(props) {
  return (
    <div className='Characterdisplay'>
      <div className='Characterdisplay__header'>
        <span className='Characterdisplay__name'>Name: {props.name}</span>
        <span className='Characterdisplay__gender'>Gender: {props.gender}</span>
        <image className='Characterdisplay__img' src={props.image} alt=""></image>
      </div>
      <div className='Characterdisplay__details'>
        <span className='Characterdisplay__species'>Species: {props.species}</span>
        <span className='Characterdisplay__location'>Location: {props.location}</span>
        <span className='Characterdisplay__origin'>Origin: {props.origin}</span>
        <span className='Characterdisplay__type'>Type: {props.type}</span>
        <span className='Characterdisplay__status'>Status: {props.status}</span>
      </div>
      <div className='Characterdisplay__episodes'>
        {props.characters.episode.map( (x,ind) => <Episode episode={x} index={ind}></Episode>)}
      </div>
    </div>
  )
}
