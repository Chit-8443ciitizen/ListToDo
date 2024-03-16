import {createBrowserRouter} from 'react-router-dom';
import App from '../App'

import Home from '../components/home';
import Lab01 from '../contentLabs/Lab01/Lab01';
import Lab02 from '../contentLabs/Lab02/Lab02';
import Lab03 from '../contentLabs/Lab03_Seasons/Lab03';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "", element: <Home/> },
            {path: "lab01", element: <Lab01/> },
            {path: "lab02", element: <Lab02/> },
            {path: "lab03", element: <Lab03/> },
         
        ]
    }
])