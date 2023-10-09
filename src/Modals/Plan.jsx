import {React, useRef, useState} from 'react';
import '../App.css';
import { Link, NavLink, useHistory, useNavigate} from 'react-router-dom';

const Plan1 = ({isOpen,onClose,selectedItem, serviceItems }) => {


    if (!selectedItem) return null;
    console.log(selectedItem.img);
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
                        <img className='service-img fadeIn' src={require(`../Assets/services/${selectedItem.image}`)} alt="" />
                   </div>
                   <div className="col-6 mt-5 ps-5">
                        <img className='modal-logo ' src={require(`../Assets/${selectedItem.logo}`)} alt="" />
                            <h3 className='modal-info-1 mt-4'>{selectedItem.name}</h3>
                        <div className="mt-4">
                                {selectedItem.firstPrice && (
                                    <h4 className='modal-info-2'>{selectedItem.firstPrice}₺</h4>
                                )}
                            <h4 className='modal-info-4'>{selectedItem.price}₺{selectedItem.month && (<span className='month'>/aylık</span>)}</h4>
                        </div>
                        <ul className='mt-4 ps-3'>
                            {selectedItem.info1 && (
                                <li>
                                    <h5 className='modal-info-3'>{selectedItem.info1}</h5>
                                </li>
                            )}
                            {selectedItem.info2 && (
                                <li>
                                    <h5 className='modal-info-3'>{selectedItem.info2}</h5>
                                </li>
                            )}
                            {selectedItem.info3 && (
                                <li>
                                    <h5 className='modal-info-3'>{selectedItem.info3}</h5>
                                </li>
                            )}
                            {selectedItem.info4 && (
                                <li>
                                    <h5 className='modal-info-3'>{selectedItem.info4}</h5>
                                </li>
                            )}
                        </ul>

                        <button className='satin-al mt-4' type="">Satın Al</button>

                        
                        
                   </div>
                </div>
            </div>
        </div>
    
    );
    };

export default Plan1;