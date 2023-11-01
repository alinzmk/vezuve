import '../App.css';

import logo from "../Assets/logo-renkli.png"
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar2 from '../Modals/Sidebar2';
import Finder from '../Modals/Finder-App';
import map from "../Assets/worldmap.png"

function MarketFinder() {

    const [selectedData, setSelectedData] = useState(null);

    const handleSelectData = (data) => {
        setSelectedData(data);
    };

    const navigate = useNavigate();

    const handleClick = (tabId) => {
        localStorage.setItem("tab", JSON.stringify(tabId.name));
        navigate(`/Hizmetler`);
    };

  return (
      <>
        <div className="dashboard m-0 h-100">
            <div className="row h-100">
                <div className="p-0 h-100">
        <Sidebar2/>
                </div>
                <div className="container mt-4 slideleft right">
                    <div className="row d-flex justify-content-between">
                        <div className="col-12 ">
                            <div className="row mb-4 d-flex justify-content-between me-5">
                                <h2 className='purple w-auto mt-3'>Market Finder (BETA)</h2>
                                <img src={logo} className='sidebar-logo' alt="" />
                            </div>
                        </div>

                        <div className="finder-wrapper">
                            <div className="row slideleft ">

                                <div className="col-4 ps-0 pe-4">
                                    <div className="pbg py-5 px-3">
                                        <Finder onSelectData={handleSelectData}/>
                                    </div>
                                </div>

                                <div className="col-8 ps-0 h-100">
                                    <div className="pbg p-5">   
                                        <div className={`row finder-text ${selectedData ? 'd-none' : ''}`}>
                                            <div className="col-12 my-auto text-center">
                                                <p className=''>    
                                                    Market Finder aracımızla ürünlerin için en uygun olan hedef ülkeyi ve pazaryerini belirleyebileceksiniz. 
                                                    Markef Finder, sizin işletmenizle alakali verdiginiz bilgileri yapay zeka ve kendi veritabanları ile
                                                    harmanlayarak size hızlı ve etkili bir pazar önerisi sunar.
                                                </p>
                                                <img className='map' src={map} alt="" />
                                                <h5 className='mt-4'>    
                                                    Sizin ise tek yapmanız gereken şirketinizin bilgilerini doğru şekilde girerek şirketiniz için en
                                                    doğru pazarı bulmak.
                                                </h5>
                                            </div>
                                        </div>
                                        <div>
                                            {selectedData && <ResultComponent
                                                name={selectedData.name}
                                                logo={selectedData.logo}
                                                title={selectedData.title}
                                                items={selectedData.items}
                                                flag={selectedData.flag}
                                                flag2={selectedData.flag2}
                                                title2={selectedData.title2}
                                                items2={selectedData.items2}
                                                buttonText={selectedData.buttonText}
                                                handleClick={handleClick}
                                            />}
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

export default MarketFinder;



const ResultComponent = ({ name, logo, items, flag, flag2, items2, buttonText, setActiveTab, handleClick }) => (
    
   

    <div className='row finder-result slideUp fadeIn'>
        <div className="col-6 mt-2">
            <img className='result-logo' src={require(`../Assets/${logo}`)} alt="" />
            <h5>İstatistikler</h5>
            <ul className='finder-ul mb-1'>
                {items.map((item, index) => (
                    <li className='finder-li' key={index}>
                        <p>{item}</p>
                    </li>
                ))}
                    <li className='finder-li'>
                        <p>Daha fazla bilgi almak için <strong><a target='_blank' href={flag}>TIKLAYINIZ</a></strong>.</p>
                    </li>
            </ul>
        </div>
        <div className="col-6 mt-2">
            <div className='mb-3 flag' style={{ display: 'flex', justifyContent: '' }}>
                <div title={flag.title} className="circle1" style={{ backgroundImage: `url(${require(`../Assets/flags/${flag.name}`)})`, opacity: flag.opacity, flex: '1' }}></div>
                <div title={flag2.title} className="circle1" style={{ backgroundImage: `url(${require(`../Assets/flags/${flag2.name}`)})`, opacity: flag2.opacity, flex: '1' }}></div>
            </div>

            
            <h5>Pazaryeri Gereksinimleri</h5>
            <ul className='finder-ul'>
                {items2.map((item2, index) => (
                    <li className='finder-li' key={index}>
                        <p>{item2}</p>
                    </li>
                ))}
            </ul>
        </div>
            <div className='' style={{textAlign: "center", fontSize: "1.2rem"}} >
                 <p  className=' mb-2'>
                    {buttonText}
                </p>
                {buttonText && <button className='satin-al' onClick={() => handleClick({name})}>Satışa Başla</button>}
            </div>
    </div>
);
