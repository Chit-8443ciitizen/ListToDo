import { useState } from "react"

const Geolocation = () =>{
    const [latitude, setLatitude] = useState<number | null> (null);
    const [longtitude, setLongtitude] = useState<number | null> (null);
    const [error, setError] = useState<string | null>(null);
   
    const getLocation = () =>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position)=> {
                    setLatitude(position.coords.latitude);
                    setLongtitude(position.coords.longitude);
                },
                (err) =>{
                    setError(err.message);
                }
            )
        } else {
      setError("Geolocation is not supported by this browser.");
    }
    }
    const getDirection = (angle: number) =>{
      
        if(angle >0){
            return "North";
        } else {
            return "Earth";
        }
    }
    getLocation(); 

    return <>
    <div>
        <h1>Geolocation :</h1>
        {error ? 
        (<p>Error: {error}</p> ) :
           <>
           <p>Latitude: {latitude !== null ? `${latitude}° |${getDirection(latitude)}` : "N/A" }  </p>
          <p>Longitude: {longtitude !== null ? `${longtitude}° | ${getDirection(longtitude)} ` : "N/A" } </p>
          </>
    }
    </div>
    </>
}

export default Geolocation