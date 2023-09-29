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
        alert("BAŞARILI");
        e.preventDefault();

        // Perform any actions you need with the form data here
        console.log({
        employeeCount,
        productCategory,
        hasWebsite,
        hasInternationalSales,
        hasTurkeySales,
        hasStore
        });
        setEmployeeCount('');
        setProductCategory('');
        setHasWebsite(null);
        setHasInternationalSales(null);
        setHasTurkeySales(null);
        hasStore(null)
    };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <Swiper
        allowTouchMove={false}
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
        <SwiperSlide>
            <div className='col-12 slide mt-5 text-center px-3'>
              <div className="col-12">
                  <h5>
                    Türkiye’de veya yurtdışında online satışa açık, Üretimini yaptığınız veya tedarik ettiğiniz ürünlerin bulunduğu, firmanızı anlatan bir web sitesine sahip misiniz ?
                  </h5>
                  <label className="custom-radio d-flex justify-content-center mt-4">
                    <input
                      type="radio"
                      value="yes"
                      checked={hasWebsite === 'yes'}
                      onChange={() => setHasWebsite('yes')}
                    />
                    <span className="radio-label">Var.</span>
                  </label>
                  <label className="custom-radio d-flex justify-content-center">
                    <input
                      type="radio"
                      value="no"
                      checked={hasWebsite === 'no'}
                      onChange={() => setHasWebsite('no')}
                    />
                    <span className="radio-label">Yok.</span>
                  </label>


              </div>
                <div className="next-arrow" onClick={handleNext}>İLERİ<i class="fa-solid fa-angles-right"></i></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='col-12 slide mt-5 text-center px-3'>
              <div className="col-12">
                  <h5>
                    Türkiye pazaryerlerinde veya sosyal medya üzerinden (Trendyol, Hepsiburada, Amazon, Pttavm, instagram, Facebook) aktif olaran e-ticaret yapıyor musunuz? 
                  </h5>
                  <label className="custom-radio d-flex justify-content-center mt-5">
                    <input
                      type="radio"
                      value="yes"
                      checked={hasTurkeySales === 'yes'}
                      onChange={() => setHasTurkeySales('yes')}
                    />
                    <span className="radio-label">Evet, Yapıyorum.</span>
                  </label>
                  <label className="custom-radio d-flex justify-content-center">
                    <input
                      type="radio"
                      value="no"
                      checked={hasTurkeySales === 'no'}
                      onChange={() => setHasTurkeySales('no')}
                    />
                    <span className="radio-label">Hayır, Yapmıyorum.</span>
                  </label>
              </div>
                <div className="prev-arrow" onClick={handlePrev}><i class="fa-solid fa-angles-left"></i>GERİ</div>
                <div className="next-arrow" onClick={handleNext}>İLERİ<i class="fa-solid fa-angles-right"></i></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='col-12 slide mt-5 text-center px-3'>
              <div className="col-12">
                  <h5>
                    Yurtdışında online pazarlar da (Amazon, Etsy, E-bay) perakende satış veya toplu ihracat yapıyor musunuz ?                  
                  </h5>
                  <label className="custom-radio d-flex justify-content-center mt-5">
                    <input
                      type="radio"
                      value="yes"
                      checked={hasInternationalSales === 'yes'}
                      onChange={() => setHasInternationalSales('yes')}
                    />
                    <span className="radio-label">Evet, Yapıyorum.</span>
                  </label>
                  <label className="custom-radio d-flex justify-content-center">
                    <input
                      type="radio"
                      value="no"
                      checked={hasInternationalSales === 'no'}
                      onChange={() => setHasInternationalSales('no')}
                    />
                    <span className="radio-label">Hayır, Yapmıyorum.</span>
                  </label>


              </div>
                <div className="prev-arrow" onClick={handlePrev}><i class="fa-solid fa-angles-left"></i>GERİ</div>
                <div className="next-arrow" onClick={handleNext}>İLERİ<i class="fa-solid fa-angles-right"></i></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='col-12 slide mt-5 text-center px-3'>
              <div className="col-12">
                  <h5>
                      Türkiye pazarında online veya geleneksel ticaret ile firmanızın toplam satış geliri ortalaması hangi aralıktadır?
                  </h5>
                    <select className='custom-select text-center mt-3'defaultValue="100.000-250.000" value={TurkeySalesVolume} onChange={(e) => setTurkeySalesVolume(e.target.value)}>
                        <option className="" value="100.000-250.000">100.000₺-250.000₺</option>
                        <option className="" value="250.000-500.000">250.000₺-500.000₺</option>
                        <option className="" value="500.000-1.000.000">500.000₺-1.000.000₺</option>
                        <option className="" value="1.000.000+">1.000.000₺+</option>
                    </select>


              </div>
                <div className="prev-arrow" onClick={handlePrev}><i class="fa-solid fa-angles-left"></i>GERİ</div>
                <div className="next-arrow" onClick={handleNext}>İLERİ<i class="fa-solid fa-angles-right"></i></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='col-12 slide mt-5 text-center px-3'>
              <div className="col-12">
                  <h5>
                    Türkiye de veya yurtdışında ürünlerinizi sergilediğiniz aktif satış taptığınız fiziki bir mağazanız bulunuyor mu ?                  
                  </h5>
                  <label className="custom-radio d-flex justify-content-center mt-5">
                    <input
                      type="radio"
                      value="yes"
                      checked={hasStore === 'yes'}
                      onChange={() => setHasStore('yes')}
                    />
                    <span className="radio-label">Evet, Var.</span>
                  </label>
                  <label className="custom-radio d-flex justify-content-center">
                    <input
                      type="radio"
                      value="no"
                      checked={hasStore === 'no'}
                      onChange={() => setHasStore('no')}
                    />
                    <span className="radio-label">Hayır, Yok.</span>
                  </label>


              </div>
                <div className="prev-arrow" onClick={handlePrev}><i class="fa-solid fa-angles-left"></i>GERİ</div>
                <div className="next-arrow" onClick={handleNext}>İLERİ<i class="fa-solid fa-angles-right"></i></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='col-12 slide mt-5 text-center px-3'>
              <div className="col-12">
                  <h5>
                    Satışını yaptığınız ürün grubunun ana kategorisisi nedir ?
                  </h5>
                    <select className='custom-select text-center mt-3'defaultValue="100.000-250.000" value={TurkeySalesVolume} onChange={(e) => setTurkeySalesVolume(e.target.value)}>
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
                <div className="prev-arrow" onClick={handlePrev}><i class="fa-solid fa-angles-left"></i>GERİ</div>
                <div className="next-arrow" onClick={handleNext}>İLERİ<i class="fa-solid fa-angles-right"></i></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='col-12 slide mt-5 text-center px-3'>
              <div className="col-12">
                  <h5>
                    Türkiyede ki işletmenizde tüm birimler dahil kaç tam zamanlı çalışana sahipsiniz? 
                  </h5>
                    <select className='custom-select text-center mt-3'defaultValue="100.000-250.000" value={TurkeySalesVolume} onChange={(e) => setTurkeySalesVolume(e.target.value)}>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-100">51-100</option>
                        <option value="101+">101+</option>
                    </select>


              </div>
                <div className="prev-arrow" onClick={handlePrev}><i class="fa-solid fa-angles-left"></i>GERİ</div>
                <button className='finder-submit mt-4' type="submit">GÖNDER<i class="fa-solid fa-chevron-right ms-2"></i></button>
            </div>
        </SwiperSlide>
      </Swiper>
      </form>
    </>
  );
}