import React from "react";
import './Resident.css'
import { useState } from "react";
import { useResidents } from '../../api/useData';
import CharacterDisplay from '../CharacterDisplay/CharacterDisplay'

export default function Resident({ resident }) {
    //const [resData, setResData] = useState(1);
    const res = resident.split("/")
    const residentNumber = res[res.length - 1];
    const residentsObj = useResidents(residentNumber);
    const [char, setChar] = useState("")
    const nthChar = useResidents(residentNumber);

    function selectResident(target) {
        setChar(target)
    }

    return <div className="Resident pointer bgslide" onClick={(e) => selectResident(e.target.innerText)}>
        {residentsObj.name === undefined ? 'Loading...' :
            <div>
                {residentsObj.name}
            </div>
        }
        {/* {nthChar.name === residentsObj.name ? <CharacterDisplay character={obj} /> : console.log('NOT OK')} */}

    </div>
}