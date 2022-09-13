import React from 'react';
import Location from '../Location/Location';
import { useState } from 'react';
import { useLocations } from '../../api/useData';
import Locationdisplay from '../LocationDisplay/LocationDisplay';
import './Locations.css'

const Locations = (props) => {

    const [page, setPage] = useState(1);
    const [location, setLocation] = useState(1);
    const locations = useLocations(page);

    function selectLocation(target) {
        setLocation(target);
    }

    const nextPage = (nextPage = 1) => { setPage(nextPage); }

    function pagination() {
        return (
            <>
                {locations.info.prev === null ?
                    (<button disabled>Prev</button>) :
                    (<button onClick={() => nextPage(page - 1)}>Prev</button>)
                }
                {
                    <span className='pageCounter'>{page}</span>
                }
                {locations.info.next === null ?
                    (<button disabled>Next</button>) :
                    (<button onClick={() => nextPage(page + 1)}>Next</button>)
                }
            </>
        );
    }

    return (
        <div>
            <h2>Locations</h2>
            <div className='pagination'>
                {locations === 'Loading...' ? 0 : pagination()}
            </div>
            <div id='Container'>
                {locations === 'Loading...' ? locations :
                    locations.results.map((x, index) => (
                        <div id='location'>
                            <div className='Click pointer' key={index} onClick={(e) => selectLocation(e.target.innerText)}>
                                <Location location={x} />
                            </div>
                            {location === x.name ?
                                (<div> <Locationdisplay location={x} /> </div>) :
                                ("")
                            }
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Locations;