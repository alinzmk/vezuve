import {React, useRef, useState} from 'react';
import '../App.css';
import { Link, NavLink, useHistory, useNavigate} from 'react-router-dom';
import image from "../Assets/services/amazon-business.png";
import logo from "../Assets/amazon.png";

const Plan1 = ({isOpen,onClose}) => {

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('overlay')) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div onClick={handleOverlayClick} className="overlay ">

            <div onClick={(e)=>{e.stopPropagation()}} class="modalContainer fadeIn">
                    <button onClick={onClose} class="closeBtn"><i class="fa-solid fa-x"></i></button>
                <div class="row px-5 py-3 w-100">
                   <div className="col-6">
                        <img className='service-img fadeIn' src={image} alt="" />
                   </div>
                   <div className="col-6 mt-5 ps-5">
                        <img className='modal-logo ' src={logo} alt="" />
                        <h3 className='modal-info-1 mt-4'>Amazon Business</h3>
                        <h4 className='modal-info-2 mt-4'>83.000tl</h4>
                        <ul className='mt-4 ps-3'>
                            <li>
                                <h5 className='modal-info-3'>2 farklı Amazon paketimizden veya
                                aylık abonelik sistemimizden
                                işletmeniz için en uygun olanını
                                seçebilirsiniz.
                            </h5>
                            </li>
                            <li>
                                <h5 className='modal-info-3'>
                                Kredi kartı ile 12 taksite kadar
                                ödeme yapılabilmektedir.</h5>
                            </li>
                        </ul>
                        <button className='finder-submit mt-4' type="submit">Satın Al</button>

                        
                        
                   </div>
                </div>
            </div>
        </div>
    
    );
    };

export default Plan1;