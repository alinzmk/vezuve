import '../App.css';
import { useState } from 'react';
import logo from "../Assets/logo-renkli.png"
import { Link } from 'react-router-dom';
import Sidebar2 from '../Modals/Sidebar2';
import amazon from "../Assets/amazon.png";
import allegro from "../Assets/allegro.png";
import walmart from "../Assets/walmart.png";
import wayfair from "../Assets/wayfair.png";
import etsy from "../Assets/etsy.png"
import emag from "../Assets/emag.png"
import ozon from "../Assets/ozon.png"
import trendyol from "../Assets/trendyol.png"
import Service1 from '../Modals/Plan';

function Services() {
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedItem, setSelectedItem] = useState(null);

        const openModal = (item) => {
            setIsModalOpen(true);
            setSelectedItem(item);
            document.body.classList.add('modal-open');
        }

        const closeModal = () => {
            setIsModalOpen(false);    
            document.body.classList.remove('modal-open');
        }
        

        const serviceItems = [
                { name: 'Amazon Business', type: 'Business', price: '80.000', logo: "amazon.png", image: "amazon_business.png", 
                info1:"2 farklı Amazon paketimizden veya aylık abonelik sistemimizden işletmeniz için en uygun olanını seçebilirsiniz.",
                info2:"Kredi kartı ile 12 taksite kadar ödeme yapılabilmektedir."},

                { name: 'Amazon Global', type: 'Global', price: '100.000', logo: "amazon.png", image: "amazon_global.png", 
                info1:"2 farklı Amazon paketimizden veya aylık abonelik sistemimizden işletmeniz için en uygun olanını seçebilirsiniz.",
                info2:"Kredi kartı ile 12 taksite kadar ödeme yapılabilmektedir."},

                { name: 'Amazon Abonelik', type: 'Aylık Abonelik', price: 'aylık 17.999', logo: "amazon.png", image: "amazon_abonelik.png", 
                info1:"2 farklı Amazon paketimizden veya aylık abonelik sistemimizden işletmeniz için en uygun olanını seçebilirsiniz.",
                info2:"Kredi kartı ile 12 taksite kadar ödeme yapılabilmektedir."},

                { name: 'Amazon Handmade', type: 'Handmade', price: '59.999', logo: "amazon.png", image: "amazon_handmade.png", 
                info1:"3 aylık Amazon Handmade süreniz dolduktan sonra talep edersiniz Abonelik paketimizle size amazon departman hizmeti",
                info2:"Fiyatlarımıza KDV dahil değildir.",
                info3:"Kredi kartı ile 12 taksite kadar ödeme yapılabilmektedir."},

                { name: 'Amazon Handmade', type: 'Aylık Abonelik', price: 'aylık 13.999', logo: "amazon.png", image: "amazon_handmade_abonelik.png", 
                info1:"3 aylık Amazon Handmade süreniz dolduktan sonra talep edersiniz Abonelik paketimizle size amazon departman hizmeti",
                info2:"Fiyatlarımıza KDV dahil değildir.",
                info3:"Kredi kartı ile 12 taksite kadar ödeme yapılabilmektedir."},

                { name: 'Etsy Enterprise', type: 'Enterprise', price: '27.500', logo: "etsy.png", image: "etsy_enterprise.png", 
                info1:"2 farklı Etsy paketimizden veya aylık abonelik sistemimizden işletmeniz için en uygun olanını seçebilirsiniz",
                info2:"Fiyatlarımız  %20 KDV Hariçtir.",
                info3:"Kredi kartı ile 12 taksite kadar ödeme yapılabilmektedir."},

                { name: 'Etsy Star-Seller', type: 'Star-Seller', price: '32.000', logo: "etsy.png", image: "etsy_star.png", 
                info1:"2 farklı Etsy paketimizden veya aylık abonelik sistemimizden işletmeniz için en uygun olanını seçebilirsiniz",
                info2:"Fiyatlarımız  %20 KDV Hariçtir.",
                info3:"Kredi kartı ile 12 taksite kadar ödeme yapılabilmektedir."},

                { name: 'Etsy Abonelik', type: 'Aylık Abonelik', price: '27.500', logo: "etsy.png", image: "etsy_abonelik.png", 
                info1:"Abonelik sistemimizle çalışan firmalarımız talep ettiği sürece her ay aboneliği yenilenmektedir.",
                info2:"Fiyatlarımız  %20 KDV Hariçtir.",
                info3:"Paket sistemiyle çalışan müşterilerimizin aylık abonelik almasına gerek yoktur.\n Kredi kartı ile 12 Taksite kadar ödeme yapılabilmektedir."},

                { name: 'Etsy Yeni Girişimci', type: 'KOBİ Paketi', price: '18.000', logo: "etsy.png", image: "etsy_starter.png", 
                info1:"Atölyeler, ev hanımları ve genç girişimciler için hazırlanmış özel paketimiz. \nHizmet süresi sonunda müşterilerimiz aylık abonelik hizmetimizle çalışmaya devam edebilirler.",
                info2:"Fiyatlarımız  %20 KDV Hariçtir.",
                info3:"Kredi kartı ile 12 taksite kadar ödeme yapılabilmektedir."},

                { name: 'Allegro Business', type: 'Business', price: '34.000', logo: "allegro.png", image: "allegro_business.png", 
                info1:" Allegro paketi veya aylık abonelik sistemimizden işletmeniz için en uygun olanını seçebilirsiniz.",
                info2: "Döviz ödemeleri güncel döviz kurundan TL ile yapılabilmektedir.",
                info3:"Fiyatlarımız  %20 KDV Hariçtir."},

                { name: 'Allegro Abonelik', type: 'Aylık Abonelik', price: 'aylık 17.500', logo: "allegro.png", image: "allegro_abonelik.png", 
                info1:" Trendyol paketi veya aylık abonelik sistemimizden işletmeniz için en uygun olanını seçebilirsiniz.",
                info2: "Döviz ödemeleri güncel döviz kurundan TL ile yapılabilmektedir.",
                info3:"Fiyatlarımız  %20 KDV Hariçtir."},

                { name: 'Trendyol KOBİ', type: 'KOBİ Paketi', price: 'aylık 18.000', logo: "trendyol.png", image: "trendyol_kobi.png", 
                info1:" Trendyol paketi veya aylık abonelik sistemimizden işletmeniz için en uygun olanını seçebilirsiniz.",
                info2:"Fiyatlarımız  %20 KDV Hariçtir.",
                info3:"Kredi kartı ile 12 taksite kadar ödeme yapılabilmektedir."},

                { name: 'Trendyol Abonelik', type: 'Aylık Abonelik', price: 'aylık 10.000', logo: "trendyol.png", image: "trendyol_abonelik.png", 
                info1:" Allegro paketi veya aylık abonelik sistemimizden işletmeniz için en uygun olanını seçebilirsiniz. ",
                info2:"Fiyatlarımız  %20 KDV Hariçtir.",
                info3:"Kredi kartı ile 12 taksite kadar ödeme yapılabilmektedir."},

                { name: 'Walmart Business', type: 'Business', price: '80.000', logo: "walmart.png", image: "walmart_business.png", 
                info1:" Walmart paketi veya aylık abonelik sistemimizden işletmeniz için en uygun olanını seçebilirsiniz. ",
                info2:"Fiyatlarımız  %20 KDV Hariçtir.",
                info4:"Kredi kartı ile 12 taksite kadar ödeme yapılabilmektedir."},

                { name: 'Walmart Abonelik', type: 'Aylık Abonelik', price: 'aylık 29.000', logo: "walmart.png", image: "walmart_abonelik.png", 
                info1:" Walmart paketi veya aylık abonelik sistemimizden işletmeniz için en uygun olanını seçebilirsiniz.",
                info2:"Fiyatlarımız  %20 KDV Hariçtir.",
                info3:"Kredi kartı ile 12 taksite kadar ödeme yapılabilmektedir."},

                { name: 'Wayfair Business', type: 'Business', price: '73.999', logo: "wayfair.png", image: "wayfair_business.png", 
                info1:" Wayfair paketi veya aylık abonelik sistemimizden işletmeniz için en uygun olanını seçebilirsiniz. ",
                info2:"Fiyatlarımız  %20 KDV Hariçtir.",
                info3: "",
                info4:"Kredi kartı ile 12 taksite kadar ödeme yapılabilmektedir."},

                { name: 'Wayfair Abonelik', type: 'Aylık Abonelik', price: 'aylık 25.999', logo: "wayfair.png", image: "wayfair_abonelik.png", 
                info1:" Wayfair paketi veya aylık abonelik sistemimizden işletmeniz için en uygun olanını seçebilirsiniz.",
                info2:"Fiyatlarımız  %20 KDV Hariçtir.",
                info3: "",
                info4:"Kredi kartı ile 12 taksite kadar ödeme yapılabilmektedir."},

                { name: 'Emag Giriş', type: 'Starter', price: '17.999', logo: "emag.png", image: "emag_starter.png", 
                info1:" Emag Romanya paketi veya aylık abonelik sistemimizden işletmeniz için en uygun olanını seçebilirsiniz.",
                info2:"Fiyatlarımız  %20 KDV Hariçtir.",
                info3: "Vezüve Romanya ofisi ve ara deposuyla sizlere hizmet vermektedir.",
                info4:"Kredi kartı ile 12 taksite kadar ödeme yapılabilmektedir."},

                { name: 'Ozon Global', type: 'Global', price: '29.999', logo: "ozon.png", image: "ozon_global.png", 
                info1:" Ozon paketi veya aylık abonelik sistemimizden işletmeniz için en uygun olanını seçebilirsiniz. ",
                info2:"Fiyatlarımız  %20 KDV Hariçtir.",
                info3: "Kredi kartı ile 12 taksite kadar ödeme yapılabilmektedir.",
                info4:"Vezüve Ozon'nun Türki ye'deki yetki li servi s sağlayıcısıdır."},

                { name: 'Ozon Abonelik', type: 'Aylık Abonelik', price: 'aylık 11.999', logo: "ozon.png", image: "ozon_abonelik.png", 
                info1:" Ozon paketi veya aylık abonelik sistemimizden işletmeniz için en uygun olanını seçebilirsiniz.",
                info2:"Fiyatlarımız  %20 KDV Hariçtir.",
                info3: "Kredi kartı ile 12 taksite kadar ödeme yapılabilmektedir.",
                info4:"Vezüve Ozon'nun Türki ye'deki yetki li servi s sağlayıcısıdır."},
            ];
        
        return (
            <>
            <Service1 isOpen={isModalOpen} onClose={closeModal} selectedItem={selectedItem} serviceItems={serviceItems} />
        <div className="dashboard m-0">

        <div className='slideup'>
        </div> 
            <div className="row">
                <div className="p-0">
                 <Sidebar2/>
                </div>
                <div className="container mt-4 slideleft right">
                    <div className="row">
                        <div className="col-12 mb-0">                           
                            <div className="row mb-4 me-5 d-flex justify-content-between">
                                <h2 className='purple w-auto mt-3'>Hizmetlerimiz</h2>
                                <img src={logo} className='sidebar-logo' alt="" />
                            </div>
                        </div>
                        <div className="col-12 slideleft">
                            <div className="row">
                                <div className="col-11 pbg pt-3">
                                    <nav>
                                        <div class="nav nav-tabs" id="service-tab" role="tablist">
                                            <button class="nav-link active services-active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Destekler</button>
                                            <button class="nav-link  services-active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Hizmetler</button>
                                        </div>
                                    </nav>
                                <div class="tab-content" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                        <div className="hizmet-wrap">
                                            <div className="row">
                                                <nav>
                                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                        <button class="nav-link active" id="amazon-tab" data-bs-toggle="tab" data-bs-target="#amazon" type="button" role="tab" aria-controls="amazon" aria-selected="true">Amazon</button>
                                                        <button class="nav-link" id="etsy-tab" data-bs-toggle="tab" data-bs-target="#etsy" type="button" role="tab" aria-controls="etsy" aria-selected="false">Etsy</button>
                                                        <button class="nav-link" id="allegro-tab" data-bs-toggle="tab" data-bs-target="#allegro" type="button" role="tab" aria-controls="allegro" aria-selected="false">Allegro</button>
                                                        <button class="nav-link" id="trendyol-tab" data-bs-toggle="tab" data-bs-target="#trendyol" type="button" role="tab" aria-controls="trendyol" aria-selected="true">Trendyol</button>
                                                        <button class="nav-link" id="walmart-tab" data-bs-toggle="tab" data-bs-target="#walmart" type="button" role="tab" aria-controls="walmart" aria-selected="false">Walmart</button>
                                                        <button class="nav-link" id="wayfair-tab" data-bs-toggle="tab" data-bs-target="#wayfair" type="button" role="tab" aria-controls="wayfair" aria-selected="false">Wayfair</button>
                                                        <button class="nav-link" id="emag-tab" data-bs-toggle="tab" data-bs-target="#emag" type="button" role="tab" aria-controls="emag" aria-selected="true">Emag</button>
                                                        <button class="nav-link" id="ozon-tab" data-bs-toggle="tab" data-bs-target="#ozon" type="button" role="tab" aria-controls="ozon" aria-selected="false">Ozon</button>
                                                    </div>
                                                </nav>
                                                <div class="tab-content" id="nav-tabContent">
                                                    <div class="tab-pane fade show active" id="amazon" role="tabpanel" aria-labelledby="amazon-tab">
                                                        <div className="row mt-4">
                                                            <div className="col-3 mb-4">
                                                                    <div  onClick={() => openModal(serviceItems[0])} className="hizmet amazon">
                                                                        <p className='hizmet-isim' >{serviceItems[0].name}</p>
                                                                        <p className='hizmet-tür' >Business</p>
                                                                        <p className='hizmet-ücret' >80.000₺</p>
                                                                        <img className='hizmet-img' src={amazon} alt="" />
                                                                    </div>  
                                                            
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                    <div onClick={() => openModal(serviceItems[1])} className="hizmet amazon">
                                                                        <p className='hizmet-isim' >Amazon Global</p>
                                                                        <p className='hizmet-tür' >Global</p>
                                                                        <p className='hizmet-ücret' >110.000₺</p>
                                                                        <img className='hizmet-img' src={amazon} alt="" />
                                                                    </div>
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                
                                                                    <div onClick={() => openModal(serviceItems[2])} className="hizmet amazon">
                                                                        <p className='hizmet-isim' >Amazon Abonelik</p>
                                                                        <p className='hizmet-tür' >Aylık Abonelik</p>
                                                                        <p className='hizmet-ücret' >17.999₺/aylık</p>
                                                                        <img className='hizmet-img' src={amazon} alt="" />
                                                                    </div>
                                                                
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                
                                                                    <div onClick={() => openModal(serviceItems[3])} className="hizmet amazon">
                                                                        <p className='hizmet-isim' >Amazon Handmade</p>
                                                                        <p className='hizmet-tür' >Handmade</p>
                                                                        <p className='hizmet-ücret' >59.999₺</p>
                                                                        <img className='hizmet-img' src={amazon} alt="" />
                                                                    </div>  
                                                                
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                
                                                                    <div onClick={() => openModal(serviceItems[4])} className="hizmet amazon">
                                                                        <p className='hizmet-isim' >Amazon Handmade</p>
                                                                        <p className='hizmet-tür' >Abonelik </p>
                                                                        <p className='hizmet-ücret' >13.999₺/aylık</p>
                                                                        <img className='hizmet-img' src={amazon} alt="" />
                                                                    </div>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="etsy" role="tabpanel" aria-labelledby="etsy-tab">
                                                        <div className="row mt-4">
                                                            <div className="col-3 mb-4">
                                                                
                                                                    <div onClick={() => openModal(serviceItems[5])} className="hizmet allegro">
                                                                        <p className='hizmet-isim' >Etsy Enterprise</p>
                                                                        <p className='hizmet-tür' >Enterprise</p>
                                                                        <p className='hizmet-ücret' >27.500₺</p>
                                                                        <img className='hizmet-img' src={etsy} alt="" />
                                                                    </div>  
                                                                
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                
                                                                    <div onClick={() => openModal(serviceItems[6])} className="hizmet allegro">
                                                                        <p className='hizmet-isim' >Etsy Star-seller</p>
                                                                        <p className='hizmet-tür' > Star-seller </p>
                                                                        <p className='hizmet-ücret' >32.000₺</p>
                                                                        <img className='hizmet-img' src={etsy} alt="" />
                                                                    </div>
                                                                
                                                            </div>
                                                            <div onClick={() => openModal(serviceItems[7])} className="col-3 mb-4">
                                                                
                                                                    <div className="hizmet allegro">
                                                                        <p className='hizmet-isim' >Etsy Aylık</p>
                                                                        <p className='hizmet-tür' >Aylık Abonelik </p>
                                                                        <p className='hizmet-ücret' >9.999₺/aylık</p>
                                                                        <img className='hizmet-img' src={etsy} alt="" />
                                                                    </div>  
                                                                
                                                            </div>
                                                            <div onClick={() => openModal(serviceItems[8])} className="col-3 mb-4">
                                                                
                                                                    <div className="hizmet allegro">
                                                                        <p className='hizmet-isim' >Etsy Yeni Girişimci</p>
                                                                        <p className='hizmet-tür' >Kobi Paketi</p>
                                                                        <p className='hizmet-ücret' >18.000₺</p>
                                                                        <img className='hizmet-img' src={etsy} alt="" />
                                                                    </div>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="allegro" role="tabpanel" aria-labelledby="allegro-tab">
                                                        <div className="row mt-4">
                                                            <div className="col-3 mb-4">
                                                                
                                                                    <div onClick={() => openModal(serviceItems[9])} className="hizmet allegro">
                                                                        <p className='hizmet-isim' >Allegro Business</p>
                                                                        <p className='hizmet-tür' >Business</p>
                                                                        <p className='hizmet-ücret' >34.000₺</p>
                                                                        <img className='hizmet-img' src={allegro} alt="" />
                                                                    </div>  
                                                                
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                
                                                                    <div onClick={() => openModal(serviceItems[10])} className="hizmet allegro">
                                                                        <p className='hizmet-isim' >Allegro Abonelik</p>
                                                                        <p className='hizmet-tür' >Aylık Abonelik</p>
                                                                        <p className='hizmet-ücret' >17.500₺/aylık</p>
                                                                        <img className='hizmet-img' src={allegro} alt="" />
                                                                    </div>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="trendyol" role="tabpanel" aria-labelledby="trendyol-tab">
                                                        <div className="row mt-4">
                                                            <div className="col-3 mb-4">
                                                                
                                                                    <div onClick={() => openModal(serviceItems[11])} className="hizmet amazon">
                                                                        <p className='hizmet-isim' >Trendyol KOBİ</p>
                                                                        <p className='hizmet-tür' >KOBİ</p>
                                                                        <p className='hizmet-ücret' >18.000₺</p>
                                                                        <img className='hizmet-img' src={trendyol} alt="" />
                                                                    </div>  
                                                                
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                
                                                                    <div onClick={() => openModal(serviceItems[12])} className="hizmet amazon">
                                                                        <p className='hizmet-isim' >Trendyol Abonelik</p>
                                                                        <p className='hizmet-tür' >Aylık Abonelik</p>
                                                                        <p className='hizmet-ücret' >10.000₺/aylık</p>
                                                                        <img className='hizmet-img' src={trendyol} alt="" />
                                                                    </div>
                                                                
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="walmart" role="tabpanel" aria-labelledby="walmart-tab">
                                                        <div className="row mt-4">
                                                            <div className="col-3 mb-4">
                                                                
                                                                    <div onClick={() => openModal(serviceItems[13])} className="hizmet walmart">
                                                                        <p className='hizmet-isim' >Walmart Business</p>
                                                                        <p className='hizmet-tür' >Business</p>
                                                                        <p className='hizmet-ücret' >80.000₺</p>
                                                                        <img className='hizmet-img' src={walmart} alt="" />
                                                                    </div>  
                                                                
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                
                                                                    <div onClick={() => openModal(serviceItems[14])} className="hizmet walmart">
                                                                        <p className='hizmet-isim' >Walmart Abonelik</p>
                                                                        <p className='hizmet-tür' >Aylık Abonelik</p>
                                                                        <p className='hizmet-ücret' >29.000₺/aylık</p>
                                                                        <img className='hizmet-img' src={walmart} alt="" />
                                                                    </div>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="wayfair" role="tabpanel" aria-labelledby="wayfair-tab">
                                                        <div className="row mt-4">
                                                            <div className="col-3 mb-4">
                                                                
                                                                    <div onClick={() => openModal(serviceItems[15])} className="hizmet wayfair">
                                                                        <p className='hizmet-isim' >Wayfair Business</p>
                                                                        <p className='hizmet-tür' >Business</p>
                                                                        <p className='hizmet-ücret' >73.999₺</p>
                                                                        <img className='hizmet-img' src={wayfair} alt="" />
                                                                    </div>  
                                                                
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                
                                                                    <div onClick={() => openModal(serviceItems[16])} className="hizmet wayfair">
                                                                        <p className='hizmet-isim' >Wayfair Abonelik</p>
                                                                        <p className='hizmet-tür' >Aylık Abonelik</p>
                                                                        <p className='hizmet-ücret' >25.999₺/aylık</p>
                                                                        <img className='hizmet-img' src={wayfair} alt="" />
                                                                    </div>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="emag" role="tabpanel" aria-labelledby="emag-tab">
                                                        <div className="row mt-4">
                                                            <div className="col-3 mb-4">
                                                                
                                                                    <div onClick={() => openModal(serviceItems[17])} className="hizmet ozon">
                                                                        <p className='hizmet-isim' >Emag Giriş</p>
                                                                        <p className='hizmet-tür' >Starter Pack</p>
                                                                        <p className='hizmet-ücret' >17.500₺</p>
                                                                        <img className='hizmet-img' src={emag} alt="" />
                                                                    </div>  
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="ozon" role="tabpanel" aria-labelledby="ozon-tab">
                                                        <div className="row mt-4">
                                                            <div className="col-3 mb-4">
                                                                
                                                                    <div onClick={() => openModal(serviceItems[18])} className="hizmet ozon">
                                                                        <p className='hizmet-isim' >Ozon Business</p>
                                                                        <p className='hizmet-tür' >Hizmet Türü</p>
                                                                        <p className='hizmet-ücret' >29.999₺</p>
                                                                        <img className='hizmet-img' src={ozon} alt="" />
                                                                    </div>  
                                                                
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                
                                                                    <div onClick={() => openModal(serviceItems[19])} className="hizmet ozon">
                                                                        <p className='hizmet-isim' >Ozon Abonelik</p>
                                                                        <p className='hizmet-tür' >Aylık Abonelik</p>
                                                                        <p className='hizmet-ücret' >11.999/aylık</p>
                                                                        <img className='hizmet-img' src={ozon} alt="" />
                                                                    </div>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                        <div className="hizmet-wrap">
                                            <div className="row mt-3">
                                                <div className="col-3 mb-4">
                                                    
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Ingiltere Sirket Kurulumu</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    
                                                </div>
                                                <div className="col-3 mb-4">
                                                    
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Ingiltere Muhasebe Hizmeti</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    
                                                </div>
                                                <div className="col-3 mb-4">
                                                    
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Amerika Sirket Kurulumu</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    
                                                </div>
                                                <div className="col-3 mb-4">
                                                    
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Amerika Muhasebe Hizmeti</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    
                                                </div>
                                                <div className="col-3 mb-4">
                                                    
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Almanya VAT Kaydi (Bireysel)</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    
                                                </div>
                                                <div className="col-3 mb-4">
                                                    
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Almanya VAT kaydi (kurumsal)</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    
                                                </div>
                                                <div className="col-3 mb-4">
                                                    
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Websitesi Altyapi Kurulumu</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    
                                                </div>
                                                <div className="col-3 mb-4">
                                                    
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Yurtdisi Marka Tescili</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    
                                                </div>
                                                <div className="col-3 mb-4">
                                                    
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Lojistik Entegrasyonu</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    
                                                </div>
                                                <div className="col-3 mb-4">
                                                    
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Gumruk Musaviri Hizmeti</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    
                                                </div>
                                                <div className="col-3 mb-4">
                                                    
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Sertifikasyon ve Belgelendirme Hizmeti</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    
                                                </div>
                                            </div>
                                        </div>
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

export default Services;
