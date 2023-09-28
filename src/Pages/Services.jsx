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

        const openModal = () => {
            setIsModalOpen(true);
            document.body.classList.add('modal-open');
        }

        const closeModal = () => {
            setIsModalOpen(false);    
            document.body.classList.remove('modal-open');
        }
        
        const [selectedItem, setSelectedItem] = useState(null);
        
        const handleItemClick = (item) => {
            setSelectedItem(item);
        }
        
        
        return (
            <>
            <Service1 isOpen={isModalOpen} onClose={closeModal} />
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
                                                                    <div  onClick={openModal} className="hizmet amazon">
                                                                        <p className='hizmet-isim' >Amazon Business</p>
                                                                        <p className='hizmet-tür' >Business</p>
                                                                        <p className='hizmet-ücret' >80.000₺</p>
                                                                        <img className='hizmet-img' src={amazon} alt="" />
                                                                    </div>  
                                                            
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                <a href="">
                                                                    <div className="hizmet amazon">
                                                                        <p className='hizmet-isim' >Amazon Global</p>
                                                                        <p className='hizmet-tür' >Global</p>
                                                                        <p className='hizmet-ücret' >110.000₺</p>
                                                                        <img className='hizmet-img' src={amazon} alt="" />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                <a href="">
                                                                    <div className="hizmet amazon">
                                                                        <p className='hizmet-isim' >Amazon Abonelik</p>
                                                                        <p className='hizmet-tür' >Aylık Abonelik</p>
                                                                        <p className='hizmet-ücret' >17.999₺/aylık</p>
                                                                        <img className='hizmet-img' src={amazon} alt="" />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                <a href="">
                                                                    <div className="hizmet amazon">
                                                                        <p className='hizmet-isim' >Amazon Handmade</p>
                                                                        <p className='hizmet-tür' >Handmade</p>
                                                                        <p className='hizmet-ücret' >59.999₺</p>
                                                                        <img className='hizmet-img' src={amazon} alt="" />
                                                                    </div>  
                                                                </a>
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                <a href="">
                                                                    <div className="hizmet amazon">
                                                                        <p className='hizmet-isim' >Amazon Handmade</p>
                                                                        <p className='hizmet-tür' >Abonelik </p>
                                                                        <p className='hizmet-ücret' >13.999₺/aylık</p>
                                                                        <img className='hizmet-img' src={amazon} alt="" />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="etsy" role="tabpanel" aria-labelledby="etsy-tab">
                                                        <div className="row mt-4">
                                                            <div className="col-3 mb-4">
                                                                <a href="">
                                                                    <div className="hizmet allegro">
                                                                        <p className='hizmet-isim' >Etsy Enterprise</p>
                                                                        <p className='hizmet-tür' >Enterprise</p>
                                                                        <p className='hizmet-ücret' >27.500₺</p>
                                                                        <img className='hizmet-img' src={etsy} alt="" />
                                                                    </div>  
                                                                </a>
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                <a href="">
                                                                    <div className="hizmet allegro">
                                                                        <p className='hizmet-isim' >Etsy Star-seller</p>
                                                                        <p className='hizmet-tür' > Star-seller </p>
                                                                        <p className='hizmet-ücret' >32.000₺</p>
                                                                        <img className='hizmet-img' src={etsy} alt="" />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                <a href="">
                                                                    <div className="hizmet allegro">
                                                                        <p className='hizmet-isim' >Etsy Aylık</p>
                                                                        <p className='hizmet-tür' >Aylık Abonelik </p>
                                                                        <p className='hizmet-ücret' >9.999₺/aylık</p>
                                                                        <img className='hizmet-img' src={etsy} alt="" />
                                                                    </div>  
                                                                </a>
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                <a href="">
                                                                    <div className="hizmet allegro">
                                                                        <p className='hizmet-isim' >Etsy Yeni Girişimci</p>
                                                                        <p className='hizmet-tür' >Kobi Paketi</p>
                                                                        <p className='hizmet-ücret' >18.000₺</p>
                                                                        <img className='hizmet-img' src={etsy} alt="" />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="allegro" role="tabpanel" aria-labelledby="allegro-tab">
                                                        <div className="row mt-4">
                                                            <div className="col-3 mb-4">
                                                                <a href="">
                                                                    <div className="hizmet allegro">
                                                                        <p className='hizmet-isim' >Allegro Business</p>
                                                                        <p className='hizmet-tür' >Hizmet Türü</p>
                                                                        <p className='hizmet-ücret' >34.000₺</p>
                                                                        <img className='hizmet-img' src={allegro} alt="" />
                                                                    </div>  
                                                                </a>
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                <a href="">
                                                                    <div className="hizmet allegro">
                                                                        <p className='hizmet-isim' >Allegro Abonelik</p>
                                                                        <p className='hizmet-tür' >Aylık Abonelik</p>
                                                                        <p className='hizmet-ücret' >17.500₺/aylık</p>
                                                                        <img className='hizmet-img' src={allegro} alt="" />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="trendyol" role="tabpanel" aria-labelledby="trendyol-tab">
                                                        <div className="row mt-4">
                                                            <div className="col-3 mb-4">
                                                                <a href="">
                                                                    <div className="hizmet amazon">
                                                                        <p className='hizmet-isim' >Trendyol KOBİ</p>
                                                                        <p className='hizmet-tür' >KOBİ</p>
                                                                        <p className='hizmet-ücret' >18.000₺</p>
                                                                        <img className='hizmet-img' src={trendyol} alt="" />
                                                                    </div>  
                                                                </a>
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                <a href="">
                                                                    <div className="hizmet amazon">
                                                                        <p className='hizmet-isim' >Trendyol Abonelik</p>
                                                                        <p className='hizmet-tür' >Aylık Abonelik</p>
                                                                        <p className='hizmet-ücret' >10.000₺/aylık</p>
                                                                        <img className='hizmet-img' src={trendyol} alt="" />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="walmart" role="tabpanel" aria-labelledby="walmart-tab">
                                                        <div className="row mt-4">
                                                            <div className="col-3 mb-4">
                                                                <a href="">
                                                                    <div className="hizmet walmart">
                                                                        <p className='hizmet-isim' >Walmart Business</p>
                                                                        <p className='hizmet-tür' >Business</p>
                                                                        <p className='hizmet-ücret' >80.000₺</p>
                                                                        <img className='hizmet-img' src={walmart} alt="" />
                                                                    </div>  
                                                                </a>
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                <a href="">
                                                                    <div className="hizmet walmart">
                                                                        <p className='hizmet-isim' >Walmart Abonelik</p>
                                                                        <p className='hizmet-tür' >Aylık Abonelik</p>
                                                                        <p className='hizmet-ücret' >29.000₺/aylık</p>
                                                                        <img className='hizmet-img' src={walmart} alt="" />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="wayfair" role="tabpanel" aria-labelledby="wayfair-tab">
                                                        <div className="row mt-4">
                                                            <div className="col-3 mb-4">
                                                                <a href="">
                                                                    <div className="hizmet wayfair">
                                                                        <p className='hizmet-isim' >Wayfair Business</p>
                                                                        <p className='hizmet-tür' >Business</p>
                                                                        <p className='hizmet-ücret' >73.999₺</p>
                                                                        <img className='hizmet-img' src={wayfair} alt="" />
                                                                    </div>  
                                                                </a>
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                <a href="">
                                                                    <div className="hizmet wayfair">
                                                                        <p className='hizmet-isim' >Wayfair Abonelik</p>
                                                                        <p className='hizmet-tür' >Aylık Abonelik</p>
                                                                        <p className='hizmet-ücret' >25.999₺/aylık</p>
                                                                        <img className='hizmet-img' src={wayfair} alt="" />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="emag" role="tabpanel" aria-labelledby="emag-tab">
                                                        <div className="row mt-4">
                                                            <div className="col-3 mb-4">
                                                                <a href="">
                                                                    <div className="hizmet ozon">
                                                                        <p className='hizmet-isim' >Emag Giriş</p>
                                                                        <p className='hizmet-tür' >Starter Pack</p>
                                                                        <p className='hizmet-ücret' >17.500₺</p>
                                                                        <img className='hizmet-img' src={emag} alt="" />
                                                                    </div>  
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="ozon" role="tabpanel" aria-labelledby="ozon-tab">
                                                        <div className="row mt-4">
                                                            <div className="col-3 mb-4">
                                                                <a href="">
                                                                    <div className="hizmet ozon">
                                                                        <p className='hizmet-isim' >Ozon Business</p>
                                                                        <p className='hizmet-tür' >Hizmet Türü</p>
                                                                        <p className='hizmet-ücret' >29.999₺</p>
                                                                        <img className='hizmet-img' src={ozon} alt="" />
                                                                    </div>  
                                                                </a>
                                                            </div>
                                                            <div className="col-3 mb-4">
                                                                <a href="">
                                                                    <div className="hizmet ozon">
                                                                        <p className='hizmet-isim' >Ozon Abonelik</p>
                                                                        <p className='hizmet-tür' >Aylık Abonelik</p>
                                                                        <p className='hizmet-ücret' >11.999/aylık</p>
                                                                        <img className='hizmet-img' src={ozon} alt="" />
                                                                    </div>
                                                                </a>
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
                                                    <a href="">
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Ingiltere Sirket Kurulumu</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    </a>
                                                </div>
                                                <div className="col-3 mb-4">
                                                    <a href="">
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Ingiltere Muhasebe Hizmeti</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    </a>
                                                </div>
                                                <div className="col-3 mb-4">
                                                    <a href="">
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Amerika Sirket Kurulumu</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    </a>
                                                </div>
                                                <div className="col-3 mb-4">
                                                    <a href="">
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Amerika Muhasebe Hizmeti</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    </a>
                                                </div>
                                                <div className="col-3 mb-4">
                                                    <a href="">
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Almanya VAT Kaydi (Bireysel)</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    </a>
                                                </div>
                                                <div className="col-3 mb-4">
                                                    <a href="">
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Almanya VAT kaydi (kurumsal)</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    </a>
                                                </div>
                                                <div className="col-3 mb-4">
                                                    <a href="">
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Websitesi Altyapi Kurulumu</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    </a>
                                                </div>
                                                <div className="col-3 mb-4">
                                                    <a href="">
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Yurtdisi Marka Tescili</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    </a>
                                                </div>
                                                <div className="col-3 mb-4">
                                                    <a href="">
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Lojistik Entegrasyonu</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    </a>
                                                </div>
                                                <div className="col-3 mb-4">
                                                    <a href="">
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Gumruk Musaviri Hizmeti</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    </a>
                                                </div>
                                                <div className="col-3 mb-4">
                                                    <a href="">
                                                        <div className="hizmet vezu">
                                                            <p className='hizmet-isim' >Sertifikasyon ve Belgelendirme Hizmeti</p>
                                                            <p className='hizmet-tür' >Amazon Business</p>
                                                            <p className='hizmet-ücret' >20.000/aylık</p>
                                                            <img className='hizmet-img2' src={logo} alt="" />
                                                        </div>  
                                                    </a>
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
