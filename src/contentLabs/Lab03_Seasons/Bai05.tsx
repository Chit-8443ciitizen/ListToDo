
import React from "react";
import Geolocation from "../../interfaces/geolocation";
import './Bai05.css'

const SeasonConfig = {
    summer:{
        text: "So hot, crave VitaminC",
        iconName: "https://i.imgur.com/xC1O0kJb.jpg",
        color: "text-yellow"
    },
    winter:{
        text: "Very cold, crave Crush",
        iconName: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy22ddLEvk9uWNKPx9D7wkUFyDjQMif0gNmg&usqp=CAU"
        ,color: "text-blue"
    },
}
const OptionToConfig:React.FC<Geolocation> = ({latitude, error} )=>{
    try{
        if (latitude !== null){
            const month = new Date().getMonth();
            const season = ((month>2) && (month<9) && (latitude !== 0) ? 
            ( latitude > 0 ? 'summer' : 'winter' ) :
            ( latitude > 0 ? 'winter' : 'summer' ) );
            const{text, iconName, color} = SeasonConfig[season];
               return <>
               <div className="bai5">
                    <img className="shadow-lg shadow-gray-500/50 " src={iconName} alt="" />
                    <h2 className={color}>{text}</h2>
               </div>
               </>

        } else {
                return <>Latitude is null</>;
        }
    } catch (err){
        return <>Error: {err} or : {error}</>;
    }
    
    
    
}
export default OptionToConfig