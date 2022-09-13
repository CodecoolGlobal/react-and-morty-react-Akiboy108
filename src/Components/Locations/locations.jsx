import React from "react";
import Location from "../Location/Location";
import { useState } from "react";
import { useLocations } from "../../api/useData";
import Locationdisplay from "../LocationDisplay/LocationDisplay";
import ToTopButton from "../ToTopButton/ToTopButton";
import "./Locations.css";
import Pagination from "../Pagination/Pagination";

const Locations = (props) => {
    const [page, setPage] = useState(1);
    const [location, setLocation] = useState("");
    const locations = useLocations(page);

    function selectLocation(target) {
        if (location === target) {
            setLocation('');
        }
        else {
            setLocation(target)
        }
    }

    const newPage = (newPage) => {
        setPage(newPage);
    };

    return (
        <div>
            <h2>Locations</h2>

            {locations === "Loading..." ? (
                0
            ) : (
                <Pagination data={locations} page={page} newPage={newPage} />
            )}

            <div id="Container">
                {locations === "Loading..."
                    ? locations
                    : locations.results.map((loc, index) => (
                        <div id="location">
                            <div
                                className="Click pointer"
                                key={index}
                                onClick={(e) => selectLocation(loc.name)}
                            >
                                <Location location={loc} />
                            </div>
                            {location === loc.name ? (
                                <div className="locDispCont">
                                    {" "}
                                    <Locationdisplay location={loc} />{" "}
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    ))}
                    <ToTopButton />
            </div>
        </div>
    );
};

export default Locations;
