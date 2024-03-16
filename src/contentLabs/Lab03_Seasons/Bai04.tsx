import React from "react";
import Geolocation from "../../interfaces/geolocation";
const GetCurrentSeason:React.FC<Geolocation> = ({latitude, error} )=>{
    try{
        const month = new Date().getMonth();
        if (latitude !== null){
            if( (month>2) && (month<9) && (latitude !== 0) ){
                return <>{latitude > 0 ? 'summmer' : 'winter'}</>;
            } else {
                return  <>{latitude > 0 ? 'winter' : 'summer'}</>;
            }
        } else {
            return <>Latitude is null</>;
        }
    } catch (err){
        return <>Error: {err} or : {error}</>;
    }
    
    
    
}
export default GetCurrentSeason