import React from 'react';
import Location from '../Location/Location';
import { useState } from 'react';
import { useLocations } from '../../api/useData';

const Locations = (props) => {

    const [page, setPage] = useState(1);
    const locations = useLocations(page);
    console.log('LOC: ', locations);

    const nextPage = (nextPage = 1) => { setPage(nextPage); }

    function pagination() {
        console.log('HÍV')
        return (
            <>
                {locations.info.prev === null ?
                    (<button disabled>Prev</button>) :
                    (<button onClick={() => nextPage(page - 1)}>Prev</button>)
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
            <div>
                {locations === 'Loading...' ? 0 : pagination()}
            </div>
            <div id='Container'>
                {locations === 'Loading...' ? locations :
                    locations.results.map((x, index) => <Location location={x} key={index} />)}
            </div>
        </div>
    )
}

export default Locations;