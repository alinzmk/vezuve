import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Pages/Error-page";
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Documents from './Pages/Documents';
import Products from './Pages/Products';
import Services from './Pages/Services';
import MarketFinder from './Pages/MarketFinder';
import Task from './Pages/Tasks';
import Tutorials from './Pages/Tutorials';
import Payment from './Payment.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const router = createHashRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/Kayıt",
    element: <Register/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/Panel",
    element: <Dashboard />,
  },
  {
    path: "/Profil",
    element: <Profile />, 
  },
  {
    path: "/Belgelerim",
    element: <Documents />, 
  },
  {
    path: "/Ürünler",
    element: <Products />, 
  },
  {
    path: "/Ürünler",
    element: <Products />, 
  },
  {
    path: "/Urunler",
    element: <Products />, 
  },
  {
    path: "/Hizmetler",
    element: <Services />, 
  },
  {
    path: "/MarketFinder",
    element: <MarketFinder />, 
  },
  {
    path: "/Proje",
    element: <Task />, 
  },
  {
    path: "/Dersler",
    element: <Tutorials />, 
  },
  {
    path: "/api",
    element: <Payment/>, 
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
