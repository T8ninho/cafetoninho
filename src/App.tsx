import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Inicio from './components/Inicio';
import Sobre from './components/Sobre';
import NotFound from './components/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />,
    errorElement: <NotFound />
  },
  {
    path: '/sobre',
    element: <Sobre />
  }
]);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}