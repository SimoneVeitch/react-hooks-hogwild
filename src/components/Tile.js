import React, { useState } from "react";

function Tile({ hog }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="pigTile" onClick={toggleDetails}>
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={hog.name} className="minPigTile" />
      {showDetails && (
        <div>
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
          <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
        </div>
      )}
    </div>
  );
}

export default Tile;