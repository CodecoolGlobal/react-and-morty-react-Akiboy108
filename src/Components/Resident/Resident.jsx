import React from "react";
import { useState } from "react";
import { useResidents } from '../../api/useData';
import CharacterDisplay from '../CharacterDisplay/CharacterDisplay'

export default function Resident({ resident }) {
    //const [resData, setResData] = useState(1);
    const res = resident.split("/")
    const residentNumber = res[res.length - 1];

    const residentsObj = useResidents(residentNumber);
    console.log(residentsObj)
    return <div className="Resident pointer">
        Resident: {residentsObj.name}
        {/* <CharacterDisplay character={residentsObj} /> */}
    </div>
}