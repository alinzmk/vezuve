import '../App.css';
import { useState } from 'react';
import logo from "../Assets/logo-renkli.png"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Sidebar from "../Modals/Sidebar";
import { ResponsiveLine } from '@nivo/line';
import Plan from '../Modals/Plan';
import { UserData } from '../Assets/Mockdata';
import Sidebar2 from '../Modals/Sidebar2';


function Profile() {

    const navigate = useNavigate();    
    const [openModal, setModalOpen] = useState(false);
    const userIdToFind = parseInt(localStorage.getItem("id")); // Replace with the ID you're looking for

    const selectedUser = UserData.find(data => data.id === userIdToFind);

    if (selectedUser) {
    var name = selectedUser.name;
    var plan = selectedUser.currentPlan;
    var phone = selectedUser.phone;
    var mail = selectedUser.email;
    var accaountName = selectedUser.accountName;
    var companyTitle = selectedUser.companyTitle;
    var taxAdmin = selectedUser.taxAdmin;
    var taxNumber = selectedUser.taxNumber;
    var city = selectedUser.city;
    var adress = selectedUser.adress;
    }
    else {
        
    console.log(`User with ID ${userIdToFind} not found`);
    
    }
    const toServices = () => {
        navigate('/Hizmetler');
      };
  return (
    <>
        <div className="dashboard m-0">
        <div className='slideup'>
            <Plan open={openModal} onClose={()=>setModalOpen(false)}/>
        </div> 
            <div className="row">
                <div className="p-0">
                 <Sidebar2/>
                </div>
                <div className="container mt-4 slideleft right">
                    <div className="row">
                        <div className="col-12 mb-0">                           
                            <div className="row mb-4 me-5 d-flex justify-content-between">
                                <h2 className='purple w-auto mt-3'>Profil</h2>
                                <img src={logo} className='sidebar-logo' alt="" />
                            </div>
                        </div>
                        <div className="col-9 mb-4">
                           <div className="row ps-5 my-3 slideup">
                                <div id="profile-photo" className="col-5">
                                    <h1 id='profile-name'>AS</h1>
                                </div>
                                <div className="col-9 my-auto">
                                    <div className="col-12">
                                        <h3 className='ms-4 purple'>Hoş geldiniz<i class="fa-solid fa-hands"></i>, Sayın {name}.</h3>

                                    </div>
                                    <div className="col-12 ms-4 purple ">
                                        <h6 className=''>Şu anda ödeme planınız; {plan}  
                                        <button class="buton2 ms-2 mt-2 trans" onClick={toServices} ><i class="fa-solid fa-repeat"></i> Değiştir</button></h6>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-12 slideleft">
                            <div className="row mb-3">
                                <div className="col-4 ps-0 pe-3">
                                    <div className="pbg">
                                        <p className='profile-title'>Hesap Adı</p>
                                        <h6 className='profile-info'>{accaountName}</h6>

                                    </div>
                                </div>
                                <div className="col-4 ps-0 pe-3">
                                    <div className="pbg">
                                        <p className='profile-title'>E-mail</p>
                                        <h6 className='profile-info'>{mail}</h6>

                                    </div>
                                </div>
                                <div className="col-4 ps-0 pe-3">
                                    <div className="pbg">
                                        <p className='profile-title'>Telefon</p>
                                        <h6 className='profile-info'>{phone}</h6>

                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4 ps-0 pe-3">
                                    <div className="pbg">
                                        <p className='profile-title'>Şirket Ünvanı</p>
                                        <h6 className='profile-info'>{companyTitle}</h6>

                                    </div>
                                </div>
                                <div className="col-4 ps-0 pe-3">
                                    <div className="pbg">
                                        <p className='profile-title'>Vergi Dairesi</p>
                                        <h6 className='profile-info'>{taxAdmin}</h6>

                                    </div>
                                </div>
                                <div className="col-4 ps-0 pe-3">
                                    <div className="pbg">
                                        <p className='profile-title'>Vergi Numarası</p>
                                        <h6 className='profile-info'>{taxNumber}</h6>

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 ps-0 pe-3">
                                    <div className="pbg">
                                        <p className='profile-title'>Şehir</p>
                                        <h6 className='profile-info'>{city}</h6>

                                    </div>
                                </div>
                                <div className="col-8 ps-0 pe-3">
                                    <div className="pbg">
                                        <p className='profile-title'>Açık Adres</p>
                                        <h6 className='profile-info'>{adress}</h6>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Profile;
