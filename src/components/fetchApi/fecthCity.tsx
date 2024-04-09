import React, { useEffect, useState } from 'react';
interface City{
    province_id: string,
    province_name: string,
    province_type: string
}

const FecthCity = ()=> {
    const [cities, setCities] = useState<City[]>([]);
    // let cityList : City[]= [];
    useEffect( ()=>{
        const fetchData = async () => {
            try{
                const response = await fetch(`https://vapi.vnappmob.com/api/province`);
                if (!response.ok){
                    throw new Error('Failed to fetch data');
                }           
                const data = await response.json();
                setCities(data.results);
                // console.log(data.results);
              
                // setCities(data);
            }catch(error){
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
  return ( 
    <>
    {cities ? cities.map( (city)=>(
        <option key={city.province_id} value={city.province_name}>{city.province_name}</option>
    ))
    : "empty"
    }
    
    </>
  )
}

export default FecthCity