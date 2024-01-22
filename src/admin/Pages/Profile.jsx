import '../App.css';
import { useState, useEffect } from 'react';
import logo from "../Assets/logo-renkli.png"
import { useNavigate } from 'react-router-dom';
import Plan from '../Modals/Plan';
import Sidebar2 from '../Modals/Sidebar2';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import axios from 'axios';

function Profile() {

    const navigate = useNavigate();
    const [openModal, setModalOpen] = useState(false);
    const [userData, setUserData] = useState(null);
    const [editable, setEditable] = useState("");

    //------------------------------------------------------------------------------

    
    //------------------------------------------------------------------------------
    
    const [column, setColumn] = useState(''); // State to store column value
    const [newValue, setNewValue] = useState(''); // State to store newValue value
    const [responseStatus, setResponseStatus] = useState(null); // State to store response status
  
    console.log(newValue);

    // Function to send user data to the backend
    const postUserdata = async () => {
      try {
        const accessToken = localStorage.getItem("token"); // Replace with the actual access token
        const response = await axios.post('https://localhost:6161/set_user_data', {
          column: column,
          newValue: newValue,
        }, {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Include the JWT token in the header
          },
        });
  
        // Assuming the response contains status
        const status = response.data.status;
        
        if(status===200){
            alert("CALL NOTIFY HERE");
        }
        // Set the response status in the component state
        setResponseStatus(status);
      } catch (error) {
        // Handle error here
        console.error('Error setting user data:', error);
        // Handle error state or notify the user about the error
      }
    };

    const updateUserData = (state) =>{
        setColumn(state);
        postUserdata();
        setEditable(null);
    }
    
    //---------------------------------------------------

    // Function to fetch user data
    const fetchUserData = async (accessToken) => {
    try {
        const response = await axios.get('https://localhost:6161/get_user_data', {
        headers: {
            Authorization: `Bearer ${accessToken}`, // Include the JWT token in the header
        },
        });

        // Assuming the response contains userData
        const userDataResponse = response.data.userData;
        setUserData(userDataResponse);

        // Use the userData object or perform further actions
        console.log('User Data:', userData);

        return userData;
    } 
    catch (error) {
        // Handle error here
        console.error('Error fetching user data:', error);
        throw error;
    }
    };

    // Usage: Assuming you have the access token stored after successful login
    const accessToken = localStorage.getItem("token"); // Replace this with the actual access token

    fetchUserData(accessToken)
    .then((userData) => {
        // Use the user data or perform further actions
        console.log('Fetched user data:', userData);
    })
    .catch((error) => {
        // Handle any errors that occurred during data fetching
        console.error('Error fetching user data:', error);
    });


    
  return (
    <>



        {/* <div>
      <input
        type="text"
        placeholder="Column"
        value={column}
        onChange={(e) => setColumn(e.target.value)}
      />
      <input
        type="text"
        placeholder="New Value"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
      />
      <button onClick={setUserdata}>Set User Data</button>
      {responseStatus && <p>Status: {responseStatus}</p>}
    </div> */}




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
                                <h2 className='purple w-auto mt-3'>Profil: Müşteri İsim Soyisim</h2>
                                <img src={logo} className='sidebar-logo ' alt="" />
                            </div>
                        </div>
                        <div className="col-9 mb-4">
                           <div className="row ps-0 my-3 slideup ">
                                <div className="col-9 my-auto">
                                    <div className="col-12 ms-4 purple ">
                                        <h6 className=''>"İsim Soyisim" adlı müşterinizin aktif planı: {userData ?(
                                            <>{userData.Plan}</>
                                        ) : (
                                            <>Aktif Planınız yok</>
                                        )}  
                                        <button class="buton2 ms-2 mt-2 trans" onClick={()=>navigate('/Hizmetler')} ><i class="fa-solid fa-repeat"></i> Değiştir</button></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form>
                        <div className="col-12 slideleft">
                        <WhatsAppWidget 
                                        companyName="Vezüve Destek Hattı"
                                        phoneNumber="+905377638075"
                                        message="Merhabalar, yardım almak istiyorum."
                                        textReplyTime=""
                                        inputPlaceHolder="Mesajınızı giriniz."

                                    />
                            <div className="row mb-3">
                                <div className="col-4 ps-0 pe-3">
                                    <div className="pbg">
                                        <p className='profile-title'>Hesap Adı</p>
                                        {userData ? (
                                            <h6 className='profile-info'>{userData.accountName}</h6>
                                            ) : (
                                            <h6 className='profile-info'>No data</h6>
                                        )}

                                    </div>
                                </div>
                                <div className="col-4 ps-0 pe-3">
                                    <div className="pbg">
                                        <p className='profile-title'>E-mail</p>
                                        {userData ? (
                                            <h6 className='profile-info'>{userData.mail}</h6>
                                            ) : (
                                            <h6 className='profile-info'>No data </h6>
                                        )}

                                    </div>
                                </div>
                                
                                <div className="col-4 ps-0 pe-3">
                                    <div className="pbg">
                                        <p className='profile-title'>Telefon</p>
                                        {editable==="phone" ? (
                                                // Content to display when editable is true (empty in this case)
                                                <input type='text' className='profile-input' placeholder="Telefonunuz" ></input>
                                            ) : (
                                                userData ? (
                                                    // Display user address if userData exists
                                                    <h6 className='profile-info'>{userData.phoneNumber}</h6>
                                                ) : (
                                                    // Display an empty h6 element if userData doesn't exist
                                                    <h6 className='profile-info'>No data </h6>
                                                )
                                        )}
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4 ps-0 pe-3">
                                    <div className="pbg">
                                        <p className='profile-title'>Şirket Ünvanı</p>
                                        {editable==="companyTitle" ? (
                                                // Content to display when editable is true (empty in this case)
                                                <div className="d-flex align-items-center">
                                                    <input type='text' className='profile-input' placeholder="Şirket Ünvanınız" onChange={(e) => setNewValue(e.target.value)}></input>
                                                    <button class="profile-button ms-auto trans me-3 my-2" onClick={()=>updateUserData(editable)} ><i class="fa-solid fa-floppy-disk"></i></button>
                                                </div>
                                            ) : (
                                                userData ? (
                                                    // Display user address if userData exists
                                                    <h6 className='profile-info'>{userData.companyTitle}</h6>
                                                ) : (
                                                    // Display an empty h6 element if userData doesn't exist
                                                    <div className="d-flex align-items-center">
                                                        <h6 className='profile-info'>No data</h6>
                                                        <button className="profile-button ms-auto trans me-3 my-2" onClick={() => setEditable("companyTitle")}>
                                                            <i className="fa-solid fa-pen-to-square"></i>
                                                        </button>
                                                    </div>
                                                )
                                        )}

                                    </div>
                                </div>
                                <div className="col-4 ps-0 pe-3">
                                    <div className="pbg">
                                        <p className='profile-title'>Vergi Dairesi</p>
                                        {editable==="taxAdmin" ? (
                                                // Content to display when editable is true (empty in this case)
                                                <div className="d-flex align-items-center">
                                                    <input type='text' className='profile-input' placeholder="Vergi Daireniz" onChange={(e) => setNewValue(e.target.value)}></input>
                                                    <button class="profile-button ms-auto trans me-3 my-2" onClick={()=>updateUserData(editable)} ><i class="fa-solid fa-floppy-disk"></i></button>
                                                </div>
                                            ) : (
                                                userData ? (
                                                    // Display user address if userData exists
                                                    <h6 className='profile-info'>{userData.taxAdmin}</h6>
                                                ) : (
                                                    // Display an empty h6 element if userData doesn't exist
                                                    <div className="d-flex align-items-center">
                                                        <h6 className='profile-info'>No data</h6>
                                                        <button className="profile-button ms-auto trans me-3 my-2" onClick={() => setEditable("taxAdmin")}>
                                                            <i className="fa-solid fa-pen-to-square"></i>
                                                        </button>
                                                    </div>
                                                )
                                        )}
                                    </div>
                                </div>
                                <div className="col-4 ps-0 pe-3">
                                    <div className="pbg">
                                        <p className='profile-title'>Vergi Numarası</p>
                                        {userData ? (
                                            <h6 className='profile-info'>{userData.taxNumber}</h6>
                                            ) : (
                                            <h6 className='profile-info'>No data</h6>
                                        )}

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 ps-0 pe-3">
                                    <div className="pbg">
                                        <p className='profile-title'>Şehir</p>
                                        {editable==="city" ? (
                                                // Content to display when editable is true (empty in this case)
                                                <div className="d-flex align-items-center">
                                                    <input type='text' className='profile-input' placeholder="Şehriniz" onChange={(e) => setNewValue(e.target.value)}></input>
                                                    <button class="profile-button ms-auto trans me-3 my-2" onClick={()=>updateUserData(editable)} ><i class="fa-solid fa-floppy-disk"></i></button>
                                                </div>
                                            ) : (
                                                userData ? (
                                                    // Display user address if userData exists
                                                    <h6 className='profile-info'>{userData.city}</h6>
                                                ) : (
                                                    // Display an empty h6 element if userData doesn't exist
                                                    <div className="d-flex align-items-center">
                                                        <h6 className='profile-info'>No data</h6>
                                                        <button className="profile-button ms-auto trans me-3 my-2" onClick={() => setEditable("city")}>
                                                            <i className="fa-solid fa-pen-to-square"></i>
                                                        </button>
                                                    </div>
                                                )
                                        )}

                                    </div>
                                </div>
                                <div className="col-8 ps-0 pe-3">
                                    <div className="pbg">
                                        <p className='profile-title'>Açık Adres</p>
                                        {editable==="adress" ? (
                                                // Content to display when editable is true (empty in this case)
                                                <div className="d-flex align-items-center">
                                                    <input type='text' className='profile-input' placeholder="Adresiniz" onChange={(e) => setNewValue(e.target.value)} ></input>
                                                    <button class="profile-button ms-auto trans me-3 my-2" onClick={()=>updateUserData(editable)} ><i class="fa-solid fa-floppy-disk"></i></button>
                                                </div>
                                            ) : (
                                                userData ? (
                                                    // Display user address if userData exists
                                                    <>
                                                        <h6 className='profile-info'>{userData.address}</h6>
                                                        <button class="buton2 ms-2 mt-2 trans" onClick={()=>updateUserData(true)} ><i class="fa-solid fa-pen-to-square"></i> </button>
                                                    </>
                                                ) : (
                                                    // Display an empty h6 element if userData doesn't exist
                                                    <div className="d-flex align-items-center">
                                                        <h6 className='profile-info'>No data</h6>
                                                        <button className="profile-button ms-auto trans me-3 my-2" onClick={() => setEditable("adress")}>
                                                            <i className="fa-solid fa-pen-to-square"></i>
                                                        </button>
                                                    </div>
                                                )
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Profile;
