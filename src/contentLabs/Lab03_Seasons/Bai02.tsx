import React, { Component } from "react";
import Geolocation from "../../interfaces/geolocation";


class GeolocationLifeCircle extends Component<{}, Geolocation> {
  constructor(props:any) {
    super(props);
    this.state = {
      latitude: null,

      error: null
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            latitude: position.coords.latitude,
          
          });
        },
        (err) => {
          this.setState({ error: err.message });
        }
      );
    } else {
      this.setState({ error: "Geolocation is not supported by this browser." });
    }
  }

  render() {
    const { latitude, error } = this.state;

    const getDirection = (angle:number) => {
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
            <p>Latitude: {latitude !== null ? `${latitude}° ${getDirection(latitude)}` : "N/A"} </p>
            
          </>
        )}
      </div>
    );
  }
}

export default GeolocationLifeCircle;
