import React from "react";
import Location from "../Location/Location";
import { useState, useRef, useCallback, Fragment } from "react";
import { useLocations } from "../../api/useData";
import "./Locations.css";
import Pagination from "../Pagination/Pagination";
import Locationdisplay from "../LocationDisplay/LocationDisplay";
import useScrollList from "../../Hooks/useScrollList";
import ToTopButton from "../ToTopButton/ToTopButton";

const Locations = (props) => {
    const [page, setPage] = useState(1);
    const locationsData = useLocations(page);

    const [locationSelect, setLocationSelect] = useState("");

    const [pageScroll, setPageScroll] = useState(page);
    const { items, setItems, hasMore, loading, error } = useScrollList(
        pageScroll,
        "location"
    );

    const observer = useRef();
    const lastLocElementRef = useCallback(
        (node) => {
            // console.log(node);
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    // console.log("Last item element visible");
                    setPageScroll((prevPageScroll) => prevPageScroll + 1);
                    // console.log(pageScroll);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, hasMore]
    );

    const newPage = (newPage = 1) => {
        setPage(newPage);
        setItems([]);
        setPageScroll(newPage);
    };

    const selectLocation = (newLocation) => {
        if (newLocation === locationSelect) {
            setLocationSelect("");
        } else {
            setLocationSelect(newLocation);
        }
    };

    return (
        <Fragment>
            <h2>Locations</h2>
            {locationsData === "Loading..." ? (
                0
            ) : (
                <Pagination data={locationsData} page={page} newPage={newPage} />
            )}
            <div id="Container">
                {!items === "Loading..."
                    ? "Loading..."
                    : items.map((loc, index) => (
                        <div id="location" key={index}>
                            <div
                                className="Click pointer"
                                onClick={(e) => selectLocation(e.target.innerText)}
                                ref={items.length === index + 1 ? lastLocElementRef : null}
                            >
                                <Location location={loc} />
                            </div>
                            {locationSelect === loc.name ? (
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
            <div>{loading && "Loading..."}</div>
            <div>{error && "Error"}</div>
        </Fragment>
    );
};

export default Locations;
