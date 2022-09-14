import React from "react";
import Resident from "./../Resident/Resident"; //Evil
import "./LocationDisplay.css";
const Locationdisplay = ({ location }) => {
  return (
    <div className="Locationdisplay">
      <span className="Locationdisplay__name extra">Name: {location.name}</span>
      <span className="Locationdisplay__type extra">Type: {location.type}</span>
      <span className="Locationdisplay__dimension extra">
        Dimension: {location.dimension}
      </span>
      <span className="Locationdisplay__created extra">
        Created: {location.created}
      </span>
      <span className="Locationdisplay__url extra">URL: {location.url}</span>
      <div className="Locationdisplay__residents extra">
        {" "}
        {location.residents.length !== 0 ? (
          <div>
            <h2>Residents</h2>
            {location.residents.map((resident, ind) => (
              <Resident index={ind} resident={resident} key={ind} />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Locationdisplay;
