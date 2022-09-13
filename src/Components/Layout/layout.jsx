import React from "react";
import "./Layout.css";
import logo from "./../../img/logo.png";
import Characters from "../Characters/Characters";
import Locations from "../Locations/locations";
import LayoutDescriptions from "../LayoutDescriptions/LayoutDescriptions"
import { useState } from "react";

export default function Layout(props) {
    const [isClickedCharacters, setIsClickedCharacters] = useState(false);
    const [isClickedLocations, setIsClickedLocations] = useState(false);
    return (
        <div className="Layout">
            <img src={logo} alt="" className="Layout__img"></img>
            <div className="Layout__buttons">
                <span
                    className="Layout__button pointer"
                    onClick={() => {
                        setIsClickedLocations(false);
                        setIsClickedCharacters(true);
                    }}
                >
                    Characters
                </span>
                <span
                    className="Layout__button pointer"
                    onClick={() => {
                        setIsClickedLocations(true);
                        setIsClickedCharacters(false);
                    }}
                >
                    Locations
                </span>
            </div>
            <div className="Layout__content">
                {(!isClickedCharacters && !isClickedLocations) && <LayoutDescriptions></LayoutDescriptions>}
                {isClickedCharacters && (
                    <Characters characters={props.characters}></Characters>
                )}
                {isClickedLocations && (
                    <Locations locations={props.locations}></Locations>
                )}
            </div>
        </div>
    );
}
