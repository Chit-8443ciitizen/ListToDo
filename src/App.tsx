

import { Toaster } from 'react-hot-toast';
import './App.css';

import { Outlet } from "react-router"

function App() { 
  
  return (
    <>
    
      <div className='flex  justify-center h-full '>
      <Outlet/>
      <Toaster/>
      </div>
      
    </>
  );
}

export default App;
