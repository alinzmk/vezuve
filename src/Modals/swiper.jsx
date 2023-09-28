import "../App.css"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { EffectCreative } from 'swiper/modules';
import { useCallback } from "react";

export default function App() {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);


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
    };

  return (
    <>
      <Swiper
        ref={sliderRef}
        grabCursor={false}
        loop={false}
        speed={1000}
        slidesPerView={1}
        pagination={{
          type: 'progressbar',
        }}
        
        navigation={false}
        modules={[Pagination, Navigation, EffectCreative]}
        style={{
            "--swiper-pagination-color": "#FA58B6"
          }}
        className="mySwiper"
      >
        <form onSubmit={handleSubmit}>
        <SwiperSlide>
            <div className='col-12 slide mt-5'>
              <label>Çalışan Sayınız: </label>
                  <select className='ms-3' value={employeeCount} onChange={(e) => setEmployeeCount(e.target.value)}>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-100">51-100</option>
                      <option value="101+">101+</option>
                  </select>
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
                <div className="prev-arrow" onClick={handlePrev}><i class="fa-solid fa-angles-left"></i>GERİ</div>
                <div className="next-arrow" onClick={handleNext}>İLERİ<i class="fa-solid fa-angles-right"></i></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="col-12 pbg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque maiores doloribus repellat perferendis sunt nisi, quam impedit excepturi pariatur error itaque aliquid molestias ducimus vel odit delectus. Eos, autem reprehenderit?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque maiores doloribus repellat perferendis sunt nisi, quam impedit excepturi pariatur error itaque aliquid molestias ducimus vel odit delectus. Eos, autem reprehenderit?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque maiores doloribus repellat perferendis sunt nisi, quam impedit excepturi pariatur error itaque aliquid molestias ducimus vel odit delectus. Eos, autem reprehenderit?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque maiores doloribus repellat perferendis sunt nisi, quam impedit excepturi pariatur error itaque aliquid molestias ducimus vel odit delectus. Eos, autem reprehenderit?
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
                                            <div className='col-12'>
                                                
                                            </div>
                                            <hr className='finder-line'/>
                                            <div className='col-12'>
                                                
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
      </Swiper>
    </>
  );
}
