import { FC, useState } from "react";
import Geolocation from "../Lab02/geolocation";
import GeolocationLifeCircle from "./Bai02";
import GeolocationStateProp from "./Bai03";
import GetCurrentSeason from "./Bai04";
import OptionToConfig from "./Bai05";
import RenderLoading from "./Spinner";
const Lab03: FC = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
            setLoading(false);
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };
  getLocation();

  return (
    <>
      <div className="space-y-5 p-10">
        <div>
          <h2>Bài01</h2>
          <Geolocation />
        </div>
        <hr />

        <div>
          <h2>Bài02: LifeCircle</h2>
          <GeolocationLifeCircle />
        </div>
        <hr />

        <div>
          <h2>Bài03: State -&gt; Prop</h2>
          <GeolocationStateProp latitude={latitude}  error={error} />
        </div> <hr />

        <div>
          <h2>Bài04: CurrentSeason</h2>
          {loading ? 
          (<RenderLoading/>) :
          (<GetCurrentSeason latitude={latitude} error={error} />)}
          
        </div> <hr />

        <div>
          <h2>Bài05</h2>
          {loading ? 
          (<RenderLoading/>) :
          (<OptionToConfig latitude={latitude} error={error} />)}
         
        </div> <hr />

      

      </div>
    </>
  );
};

export default Lab03;
