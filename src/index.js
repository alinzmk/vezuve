import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import ErrorPage from "./Pages/Error-page";
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Documents from './Pages/Documents';
import Products from './Pages/Products';
import Services from './Pages/Services';
import MarketFinder from './Pages/MarketFinder';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProSidebarProvider>
      <RouterProvider router={router} />
    </ProSidebarProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
