import React from "react";
import Geolocation from "../../interfaces/geolocation";

const GeolocationStateProp: React.FC<Geolocation> = ({
  latitude,  
  error,
}) => {
  const getDirection = (angle: number) => {
    if (angle > 0) {
      return "North";
    } else if (angle < 0) {
      return "South";
    } else {
      return "Equator";
    }
  };

  return (
    <div>
      <h1>Geolocation :</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <p>
            Latitude:{" "}
            {latitude !== null
              ? `${latitude}° ${getDirection(latitude)}`
              : "N/A"}{" "}
          </p>
         
        </>
      )}
    </div>
  );
};

export default GeolocationStateProp;
