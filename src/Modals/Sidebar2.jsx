import React, { useState } from 'react';
import '../App.css';
import { Link, NavLink } from 'react-router-dom';
import logo from "../Assets/kare-logo.jpg";
import { useLocation } from "react-router-dom";

const Sidebar2 = () => {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

  return (
    <>
    <div className="sidebar2 m-0 p-0">
        <div className="sidebar-wrapper2">
            <div className="col-12 mt-0 ms-2 ps-2 text-center">
                             <img className='small-logo' src={logo} alt="" />
                <ul className='sidebar-ul2'>
                <li className={splitLocation[1] === "Panel" || !splitLocation[1] ? "side-active sidebar-li2" : "sidebar-li2"}>

                         <NavLink exact to={"/Panel"} className='sidebar-link' activeClassName="side-active" >
                             <i className="fa-solid fa-chart-line"></i>
                         </NavLink>
                    </li>
                    <li className={splitLocation[1] === "Profil" ? "side-active sidebar-li2" : "sidebar-li2"}>
                         <NavLink to={"/Profil"} className='sidebar-link' activeClassName="side-active">
                            <i class="fa-solid fa-user"></i>
                         </NavLink>
                    </li>
                    <li className={splitLocation[1] === "Hizmetler" ? "side-active sidebar-li2" : "sidebar-li2"}>
                         <NavLink to={"/Hizmetler"} className='sidebar-link' activeClassName="side-active">
                             <i class="fa-solid fa-pen-ruler"></i>
                         </NavLink>
                    </li>
                    <li className={splitLocation[1] === "MarketFinder" ? "side-active sidebar-li2" : "sidebar-li2"}>
                         <NavLink to={"/MarketFinder"} className='sidebar-link' activeClassName="side-active">
                            <i class="fa-solid fa-crosshairs"></i>
                         </NavLink>
                    </li>
                    <li className={splitLocation[1] === "Urunler" ? "side-active sidebar-li2" : "sidebar-li2"}>
                         <NavLink to={"/Urunler"} className='sidebar-link' activeClassName="side-active">
                            <i class="fa-solid fa-bag-shopping"></i>
                         </NavLink>
                    </li>
                    <li className={splitLocation[1] === "Belgelerim" ? "side-active sidebar-li2" : "sidebar-li2"}>
                         <NavLink to={"/Belgelerim"} className='sidebar-link' activeClassName="side-active">
                            <i class="fa-solid fa-file"></i>
                         </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  );
}

export default Sidebar2;


