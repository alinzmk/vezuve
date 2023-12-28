import '../App.css';
import { useEffect } from 'react';
import logo from "../Assets/logo-renkli.png"
import { Link } from 'react-router-dom';
import Sidebar from "../Modals/Sidebar";
import { ResponsiveLine } from '@nivo/line';
import LineChart from '../Modals/Linechart';
import { useState } from 'react';
import { UserData } from '../Assets/Mockdata';
import Sidebar2 from '../Modals/Sidebar2';
import axios from 'axios';


function Dashboard() {

    const [userPortfolio, setUserPortfolio] = useState(null); // State to store user portfolio data
     const [userPlan, setUserPlan] = useState(null); // State to store user plan data
    
/*   // Function to fetch user plan data
    const fetchUserPlan = async (accessToken) => {
    try {
        const response = await axios.get('http://your-backend-url/get_user_plan', {
            headers: {
                Authorization: `Bearer ${accessToken}`, // Include the JWT token in the header
        },
    });
    
    // Assuming the response contains userPlan
    const userPlanResponse = response.data.userPlan;
    
    // Set the userPlan in the component state
    setUserPlan(userPlanResponse);
} catch (error) {
      // Handle error here
      console.error('Error fetching user plan:', error);
      // Handle error state or notify the user about the error
    }
  };
  
  // Function to fetch user portfolio data
  const fetchUserPortfolio = async (accessToken) => {
      try {
            const response = await axios.get('https://localhost:6161/get_user_portfolio', {
                headers: {
                    Authorization: `Bearer ${accessToken}`, // Include the JWT token in the header
                },
            });

            // Assuming the response contains userPortfolio
            const userPortfolioResponse = response.data.userPortfolio;

            // Set the userPortfolio in the component state
            setUserPortfolio(userPortfolioResponse);
        } 
        catch (error) {
            // Handle error here
            console.error('Error fetching user portfolio:', error);
            // Handle error state or notify the user about the error
        }
    };
    
    useEffect(() => {
        const accessToken = localStorage.getItem("token"); // Replace with the actual access token
        fetchUserPortfolio(accessToken);
        fetchUserPlan(accessToken);
    }, []); // Run only once on component mount */
    
    
  /*   const [graphData, setGraphData] = useState(null);
    
    const reportGraph = [];

    
    setGraphData({
        labels: (reportGraph.map((data) => data.month)),
        datasets: [
          {
            data: reportGraph.map((data) => data.value),
            backgroundColor: "rgba(28, 29, 34, 1)",
            borderColor: "rgba(28, 29, 34, 1)",
            borderWidth: 1,
          },
        ],
      }); */

  return (
      <>
        <div className="dashboard m-0 h-100">
            <div className="row h-100">
                <div className="p-0 h-100">
        <Sidebar2/>
                </div>
                <div className="container mt-4 slideleft right">
                    <div className="row d-flex justify-content-between me-5">
                        <div className="col-12 ">
                            <div className="row mb-4 d-flex justify-content-between">
                                <h2 className='purple w-auto mt-3'>Ana Panel</h2>
                                <img src={logo} className='sidebar-logo' alt=""/>
                            </div>
                        </div>
                        <div className="row slideleft">
                            <div className="col-6">
                                <div className="row d-flex justify-content-between pe-3">
                                    <div className='col-lg-4 col-12 trans mainhov' id='total-sales'>
                                        <div className='col-12 slideup position-relative'>
                                            <h6>Toplam Satış</h6>
                                            {userPortfolio ? (
                                                <>
                                                    <h2>{userPortfolio.totalSales}₺<span className='aylık'>/aylık</span></h2>
                                                    <p className='plus' >+%3</p>
                                                </>
                                            ) : (
                                                <>
                                                    <h2>0000₺<span className='aylık'>/aylık</span></h2>
                                                    <p className='plus' >+%0</p>
                                                </>
                                        )}
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-12  trans mainhov' id='total-purchases'>
                                        <div className='col-12 slideup'>
                                            <h6>Toplam Satın Alım</h6>
                                            {userPortfolio ? (
                                                <>
                                                    <h2>{userPortfolio.totalPurchase}₺<span className='aylık'>/aylık</span></h2>
                                                    <p className='plus'>+%3</p>
                                                </>
                                            ) : (
                                                <>
                                                    <h2>0000₺<span className='aylık'>/aylık</span></h2>
                                                    <p className='plus'>+%0</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-12 trans mainhov' id='total-orders'>
                                        <div className='col-12 slideup'>
                                            <h6>Toplam Sipariş</h6>
                                            {userPortfolio ? (
                                                    <>
                                                        <h2>{userPortfolio.totalOrder}₺<span className='aylık'>/aylık</span></h2>
                                                        <p className='plus'>+%3</p>
                                                        
                                                    </>
                                                ) : (
                                                    <>
                                                        <h2>0000₺<span className='aylık'>/aylık</span></h2>
                                                        <p className='minus'>-%0</p>
                                                    </>
                                            )}
                                        </div>
                                    </div>
                                    <div className='col-12 trans mainhov' id='total-growth'>
                                        <div className='col-12 slideup position-relative'>
                                            <h6>Toplam Büyüme</h6>
                                            {userPortfolio ? (
                                                <>
                                                    <h2>{userPortfolio.totalGrowth}₺<span className='aylık'>/aylık</span></h2>
                                                    <p className='plus2' >+%3</p>
                                                </>
                                            ) : (
                                                <>
                                                    <h2>0000₺<span className='aylık'>/aylık</span></h2>
                                                    <p className='plus2' >+%0</p>
                                                </>
                                        )}
                                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-3 d-flex justify-content-between" id='customer-info'>                           
                                <div className="col-12 ps-5 my-auto">
                                    <h5 className='main-info' >Aktif hizmetiniz <i class="fa-solid fa-box-open"></i> : <span className='main-info2' >
                                        {userPlan ? (
                                                <>
                                                    <span className='main-info2'>{userPlan.plan}₺<span className='aylık'>/</span></span>
                                                </>
                                            ) : (
                                                <>
                                                    No Data
                                                </>
                                        )}
                                        {}</span></h5>
                                    <hr className='info-hr' />
                                    <h5 className='main-info' >E-Ticaret Uzmanınız <i class="fa-regular fa-user"></i> : <span className='main-info2' >
                                        {userPlan ? (
                                                <>
                                                    <span className='main-info2'>{userPlan.expert}₺<span className='aylık'>/aylık</span></span>
                                                    <p className='plus' >+%3</p>
                                                </>
                                            ) : (
                                                <>
                                                    No Data
                                                </>
                                        )}
                                        </span></h5>  
                                    <hr  className='info-hr'/>                                  
                                    <h5 className='main-info' >Uzman İletişim Bilgileri <i class="fa-regular fa-user"></i> : <span className='main-info2' >
                                        {userPlan ? (
                                                <>
                                                    <span className='main-info2'>{userPlan.expertmail}₺<span className='aylık'>/aylık</span></span>
                                                    <p className='plus' >+%3</p>
                                                </>
                                            ) : (
                                                <>
                                                    No Data
                                                </>
                                        )}
                                        </span></h5>  
                                    <hr className='info-hr' />
                                    <h5 className='main-info' >Kalan Abonelik Süreniz <i class="fa-regular fa-clock"></i> : <span className='main-info2' >
                                        {userPlan ? (
                                                <>
                                                    <span className='main-info2'>{userPlan.startDate}{userPlan.finishDate}</span> 
                                                    <p className='plus' >+%3</p>
                                                </>
                                            ) : (
                                                <>
                                                    No Data
                                                </>
                                        )}
                                        </span></h5>
                                </div>
                            </div>
                        </div>
                        <div className="row slideleft">
                            <div  className="col-6">
                                <div className="row me-1" id="graph">
                                    <div className="col-12 text-center">
                                            <h3 className='p-3'>Satış Raporu</h3>
                                    </div>
                                    <div className="col-12 m-0 chart-wrapper">
                                       
                                                <LineChart/>
                                  

                                    </div>
                                </div>
                            </div>
                            <div id="status" className="col-6">
                                <div className="col-12 text-center mt-4">
                                    <h3>Son Durumlar</h3>
                                </div>
                                <div className="col-12 mt-4">
                                    <div className="row mb-4 d-flex justify-content-between">
                                        <div className="col-1 my-auto ms-4">
                                            <h2><i class="fa-regular fa-folder-open"></i></h2>
                                        </div>
                                            <div className="col-3 my-auto text-center">
                                                Şirket Kurulumu
                                            </div>
                                            <div className="col-2 my-auto text-center">
                                                Belge Onayı
                                            </div>
                                            <div className="col-2 my-auto text-center">
                                                21.12.2023
                                            </div>
                                        <div className="col-3 my-auto text-center">
                                            Tamamlandı <i class="fa-solid fa-check-double"></i>
                                        </div>
                                    </div>
                                    <div className="row mb-4 d-flex justify-content-between">
                                        <div className="col-1 my-auto ms-4">
                                            <h2><i class="fa-regular fa-folder-open"></i></h2>
                                        </div>
                                            <div className="col-3 my-auto text-center">
                                                Şirket Kurulumu
                                            </div>
                                            <div className="col-2 my-auto text-center">
                                                Belge Onayı
                                            </div>
                                            <div className="col-2 my-auto text-center">
                                                21.12.2023
                                            </div>
                                        <div className="col-3 my-auto text-center">
                                        Hazırlanıyor <i class="fa-solid fa-file-signature"></i>
                                        </div>
                                    </div>
                                    <div className="row mb-4 d-flex justify-content-between">
                                        <div className="col-1 my-auto ms-4">
                                            <h2><i class="fa-regular fa-folder-open"></i></h2>
                                        </div>
                                            <div className="col-3 my-auto text-center">
                                                Şirket Kurulumu
                                            </div>
                                            <div className="col-2 my-auto text-center">
                                                Belge Onayı
                                            </div>
                                            <div className="col-2 my-auto text-center">
                                                21.12.2023
                                            </div>
                                        <div className="col-3 my-auto text-center">
                                            Bekleniyor <i class="fa-regular fa-clock"></i>
                                        </div>
                                    </div>
                                    <div className="row mb-4 d-flex justify-content-between">
                                        <div className="col-1 my-auto ms-4">
                                            <h2><i class="fa-regular fa-folder-open"></i></h2>
                                        </div>
                                            <div className="col-3 my-auto text-center">
                                                Şirket Kurulumu
                                            </div>
                                            <div className="col-2 my-auto text-center">
                                                Belge Onayı
                                            </div>
                                            <div className="col-2 my-auto text-center">
                                                21.12.2023
                                            </div>
                                        <div className="col-3 my-auto text-center">
                                            Bekleniyor <i class="fa-regular fa-clock"></i>
                                        </div>
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

export default Dashboard;
