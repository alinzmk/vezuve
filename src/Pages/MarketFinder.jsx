import '../App.css';
import logo from "../Assets/logo-renkli.png"
import { Link } from 'react-router-dom';
import Sidebar from "../Modals/Sidebar";
import { ResponsiveLine } from '@nivo/line';
import LineChart from '../Modals/Linechart';
import { useState } from 'react';
import { UserData } from '../Assets/Mockdata';
import Sidebar2 from '../Modals/Sidebar2';
import { useNavigate } from 'react-router-dom';
import Swiper1 from '../Modals/swiper';

function MarketFinder() {

    const navigate = useNavigate();
    const [employeeCount, setEmployeeCount] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [hasWebsite, setHasWebsite] = useState(null);
    const [hasTurkeySales, setHasTurkeySales] = useState(null);
    const [hasInternationalSales, setHasInternationalSales] = useState(null);
    const [TurkeySalesVolume, setTurkeySalesVolume] = useState('');
    const [hasStore, setHasStore] = useState(null);


  // Define a function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform any actions you need with the form data here
        console.log({
        employeeCount,
        productCategory,
        hasWebsite,
        hasInternationalSales
        });
        setEmployeeCount('');
        setProductCategory('');
        setHasWebsite(null);
        setHasInternationalSales(null);
        navigate("/Hizmetler");
    };


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
                                <h2 className='purple w-auto mt-3'>Market Finder (BETA)</h2>
                                <img src={logo} className='sidebar-logo' alt="" />
                            </div>
                        </div>
                        <div className="finder-wrapper">
                            <div className="row slideleft ">
                                <div className="col-6 ps-0 pe-4 d-none">
                                    <div className="pbg p-5">
                                        <form onSubmit={handleSubmit}>
                                            <div className='col-12'>
                                                <label>Çalışan Sayınız: </label>
                                                <select className='ms-3' value={employeeCount} onChange={(e) => setEmployeeCount(e.target.value)}>
                                                    <option value="1-10">1-10</option>
                                                    <option value="11-50">11-50</option>
                                                    <option value="51-100">51-100</option>
                                                    <option value="101+">101+</option>
                                                </select>
                                            </div>
                                            <hr className='finder-line'/>
                                            <div className='col-12'>
                                                <label>Ürün Kategorisi: </label>
                                                <select className='ms-3' required value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
                                                    <option value="Mobilya">Mobilya</option>
                                                    <option value="Kozmetik">Kozmetik</option>
                                                    <option value="Takı">Takı</option>
                                                    <option value="Ev-Dekor">Ev-Dekor</option>
                                                    <option value="Gıda">Gıda</option>
                                                    <option value="Kıyafet">Kıyafet</option>
                                                    <option value="Oyuncak">Oyuncak</option>
                                                    <option value="Takviye-Besin">Takviye-Besin</option>
                                                    <option value="İnşaat-Otomotiv">İnşaat-Otomotiv</option>
                                                    <option value="Plastik">Plastik</option>
                                                </select>
                                            </div>
                                            <hr className='finder-line'/>
                                            <div className='col-12'>
                                                <label>Yayında olan bir web siteniz var mı?</label>
                                                <label>
                                                <input className='ms-3' type="radio" value="yes" checked={hasWebsite === 'yes'} onChange={() => setHasWebsite('yes')} />
                                                Var
                                                </label>
                                                <label>
                                                <input className='ms-3' type="radio" value="no" checked={hasWebsite === 'no'} onChange={() => setHasWebsite('no')} />
                                                Yok
                                                </label>
                                            </div>
                                            <hr className='finder-line'/>
                                            <div className='col-12'>
                                                <label>Türkiye'de E-Ticaret yapıyor musunuz?</label>
                                                <label>
                                                <input className='ms-3' type="radio" value="yes" checked={hasTurkeySales === 'yes'} onChange={() => setHasTurkeySales('yes')} />
                                                Evet
                                                </label>
                                                <label>
                                                <input className='ms-3' type="radio" value="no" checked={hasTurkeySales === 'no'} onChange={() => setHasTurkeySales('no')} />
                                                Hayır
                                                </label>
                                            </div>
                                            <hr className='finder-line'/>
                                            <div className='col-12'>
                                                <label>Yurtdışı satışınız var mı?</label>
                                                <label>
                                                <input className='ms-3' type="radio" value="yes" checked={hasInternationalSales === 'yes'} onChange={() => setHasInternationalSales('yes')} />
                                                Evet
                                                </label>
                                                <label>
                                                <input className='ms-3' type="radio" value="no" checked={hasInternationalSales === 'no'} onChange={() => setHasInternationalSales('no')} />
                                                Hayır
                                                </label>
                                            </div>
                                            <hr className='finder-line'/>
                                            <div className='col-12'>
                                                <label>Türkiye Satış Hacminiz: </label>
                                                <select className='ms-3'defaultValue="100.000-250.000" value={TurkeySalesVolume} onChange={(e) => setTurkeySalesVolume(e.target.value)}>
                                                <option value="100.000-250.000">100.000₺-250.000₺</option>
                                                <option value="250.000-500.000">250.000₺-500.000₺</option>
                                                <option value="500.000-1.000.000">500.000₺-1.000.000₺</option>
                                                <option value="1.000.000+">1.000.000₺+</option>
                                                </select>
                                            </div>
                                            <hr className='finder-line'/>
                                            <div className='col-12'>
                                                <label>Fiziksel Satış Mağazanız bulunuyor mu?</label>
                                                <label>
                                                <input className='ms-3' type="radio" value="yes" checked={hasStore === 'yes'} onChange={() => setHasStore('yes')} />
                                                Evet
                                                </label>
                                                <label>
                                                <input className='ms-3' type="radio" value="no" checked={hasStore === 'no'} onChange={() => setHasStore('no')} />
                                                Hayır
                                                </label>
                                            </div>
                                            <button className='finder-submit mt-4' type="submit">Gönder<i class="fa-solid fa-chevron-right ms-2"></i></button>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-4 ps-0 pe-4">
                                    <div className="pbg p-5">
                                        <Swiper1/>
                                    </div>
                                </div>

                                <div className="col-8 pbg p-4 pb-5 ">
                                    <div className="col-12 px-5 my-auto h-100">
                                        <p className='mt-5 mx-auto'>    
                                            Market Finder aracımızla ürünlerin için en uygun olan hedef ülkeyi ve pazaryerini belirleyebileceksiniz. 
                                            Markef Finder, sizin işletmenizle alakali verdiginiz bilgileri yapay zeka ve kendi veritabanları ile
                                            harmanlayarak size hızlı ve etkili bir pazar önerisi sunar.
                                        </p>
                                        <h6 className='mt-5'>    
                                            Sizin ise tek yapmanız gereken şirketinizin bilgilerini doğru şekilde girerek şirketiniz için en
                                            doğru pazarı bulmak.
                                        </h6>
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
