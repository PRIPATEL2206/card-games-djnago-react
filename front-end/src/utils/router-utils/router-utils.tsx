import { Navigate, RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from "react-router-dom";
import { useUsername } from '../hooks/name-provider';
import NameInputPage from '../../pages/name-input-page';
import MindiGamePage from '../../pages/mindi-game-page';

export default function RouterComponent() {
 const {hasUsername} =useUsername() 
 
  const router = createBrowserRouter([
    {
      path: "/mindi-game",
      element: hasUsername ? <MindiGamePage /> : <Navigate to="/name-input" replace />,
    },
    {
        path: "/name-input",
        element:<NameInputPage/> ,
    }
  ]);


  return (
    <RouterProvider router={router} />
  )
}