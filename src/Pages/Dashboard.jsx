import '../App.css';
import logo from "../Assets/logo-renkli.png"
import { Link } from 'react-router-dom';
import Sidebar from "../Modals/Sidebar";
import { ResponsiveLine } from '@nivo/line';
import LineChart from '../Modals/Linechart';
import { useState } from 'react';
import { UserData } from '../Assets/Mockdata';
import Sidebar2 from '../Modals/Sidebar2';



function Dashboard() {

    const userIdToFind = parseInt(localStorage.getItem("id")); // Replace with the ID you're looking for

    const selectedUser = UserData.find(data => data.id === userIdToFind);

    if (selectedUser) {
    var sale = selectedUser.totalSales;
    var purchase = selectedUser.totalPurchase;
    var order = selectedUser.totalOrder;
    var growth = selectedUser.totalGrowth;
    var plan = selectedUser.currentPlan;
    var expert = selectedUser.expert;
    var expertmail = selectedUser.expertmail;

    }
    else {
    
    console.log(`User with ID ${userIdToFind} not found`);
    
    }


    const [graphData, setGraphData] = useState({
        labels: selectedUser.reportGraph.map((data) => data.month),
        datasets: [
          {
            data: selectedUser.reportGraph.map((data) => data.value),
            backgroundColor: "rgba(28, 29, 34, 1)",
            borderColor: "rgba(28, 29, 34, 1)",
            borderWidth: 1,
          },
        ],
      });

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
                                            <h2>{sale}₺<span className='aylık'>/aylık</span></h2>
                                            <p className='plus' >+%3</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-12  trans mainhov' id='total-purchases'>
                                    <div className='col-12 slideup'>
                                            <h6>Toplam Alış</h6>
                                            <h2>{purchase}₺<span className='aylık'>/aylık</span></h2>
                                            <p className='minus'>-%3</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-12 trans mainhov' id='total-orders'>
                                    <div className='col-12 slideup'>
                                            <h6>Toplam Sipariş</h6>
                                            <h2>{order}₺<span className='aylık'>/aylık</span></h2>
                                            <p className='plus' >+%7</p>
                                        </div>
                                    </div>
                                    <div className='col-12 trans mainhov' id='total-growth'>
                                        <div className='col-12 slideup position-relative'>
                                                <h6>Toplam Büyüme</h6>
                                                <h1>{growth}₺<span className='aylık'>/aylık</span></h1>
                                                <p className='plus2' >+%7</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-3 d-flex justify-content-between" id='customer-info'>                           
                                <div className="col-12 ps-5 my-auto">
                                    <h5 className='main-info' >Aktif hizmetiniz <i class="fa-solid fa-box-open"></i> : <span className='main-info2' >{plan}</span></h5>
                                    <hr className='info-hr' />
                                    <h5 className='main-info' >E-Ticaret Uzmanınız <i class="fa-regular fa-user"></i> : <span className='main-info2' >{expert}</span></h5>  
                                    <hr  className='info-hr'/>                                  
                                    <h5 className='main-info' >Uzman İletişim Bilgileri <i class="fa-regular fa-user"></i> : <span className='main-info2' >{expertmail}</span></h5>  
                                    <hr className='info-hr' />
                                    <h5 className='main-info' >Kalan Abonelik Süreniz <i class="fa-regular fa-clock"></i> : <span className='main-info2' > 25 gün</span></h5>
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
                                            <LineChart chartData={graphData}/>
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
