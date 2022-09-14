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
    const [char, setChar] = useState("");

    function selectResident(target) {
        if (target === char) {
            setChar("")
        }
        else {
            setChar(target)
        }
    }

    return (
        <div className="Resident pointer bgslide" onClick={(e) => selectResident(e.target.innerText)}>
            {residentsObj.name === undefined ? 'Loading...' :
                <div>
                    {residentsObj.name}
                </div>
            }
            <div className="charDispCont">
                {char === residentsObj.name ?
                    (
                        <div className="charDispImg">
                            <CharacterDisplay character={residentsObj} />
                        </div>
                    ) : ("")}
            </div>
        </div>
    )
}