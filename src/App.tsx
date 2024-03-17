

import './App.css';

import { Outlet } from "react-router"

function App() { 
  
  return (
    <>
    
      <div className='flex  justify-center h-full '>
      <Outlet/>
        
      </div>
      
    </>
  );
}

export default App;
