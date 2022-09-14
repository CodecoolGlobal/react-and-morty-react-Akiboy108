import React from "react";
import Resident from "./../Resident/Resident"; //Evil
import "./LocationDisplay.css";
const Locationdisplay = ({ location }) => {
  return (
    <div className="Locationdisplay">
      <div className="Locationdisplay__text_container">
        <span className="Locationdisplay__name extra">
          <strong>Name:</strong> {location.name}
        </span>
        <span className="Locationdisplay__type extra">
          <strong>Type:</strong> {location.type}
        </span>
        <span className="Locationdisplay__dimension extra">
          <strong>Dimension:</strong> {location.dimension}
        </span>
        <span className="Locationdisplay__created extra">
          <strong>Created:</strong> {location.created}
        </span>
        <span className="Locationdisplay__url extra">
          <strong>URL:</strong> {location.url}
        </span>
      </div>

      <div className="Locationdisplay__residents extra">
        {" "}
        {location.residents.length !== 0 ? (
          <div>
            <h2>Residents</h2>
            {location.residents.map((resident, ind) => (
              <Resident index={ind} resident={resident} key={resident} />
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
