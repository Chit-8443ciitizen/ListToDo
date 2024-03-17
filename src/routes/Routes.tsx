import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home";
import SignIn from "../components/signIn/signIn";
import SignUp from "../components/signUp/signUp";
import Board from "../components/board/board";
import OverView from "../components/overview/overView";
import Today from "../components/today/today";
import Week from "../components/week/week";
import Month from "../components/month/month";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "signIn", element: <SignIn /> },
      { path: "signUp", element: <SignUp/> },
      {
        path: "board",
        element: <Board />,
        children: [
          { path: "", element: <OverView/> },
          { path: "overview", element: <OverView/> },
          { path: "today", element: <Today /> },
          { path: "week", element: <Week /> },
          { path: "month", element: <Month /> },
        ],
      },
    ],
  },
]);
