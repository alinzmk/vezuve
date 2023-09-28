import '../App.css';
import logo from "../Assets/logo-renkli.png"
import { useState, useRef, useEffect } from 'react';
import { updateUserData, UserData } from '../Assets/Mockdata';
import Sidebar2 from '../Modals/Sidebar2';

function Documents() {

    const userIdToFind = parseInt(localStorage.getItem("id")); // Replace with the ID you're looking for
    const selectedUser = UserData.find(data => data.id === userIdToFind);

    if (selectedUser) {
        var bankInfo = selectedUser.bankInfo;
        var identityDocument = selectedUser.identityDocument;
        var activityDocument = selectedUser.activityDocument;
        var englandCertificate = selectedUser.englandCertificate;
        var taxPlate = selectedUser.taxPlate;
    }
    else {
    console.log(`User with ID ${userIdToFind} not found`);    
    }

    const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (file) {
      document.getElementById("hiddenSubmitButton").click();
    }
  }, [file]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e, dataThatGonnaChange) => {
    e.preventDefault();

    // Handle file upload logic here
    if (file) {
        console.log(dataThatGonnaChange)
        updateUserData(userIdToFind, {[dataThatGonnaChange]: file});
        alert("successful");
      // Send the file to your server or process it as needed
    }
  };


    
  return (
    <>
         <div className="dashboard m-0">
            <div className="row">
                <div className=" p-0">
                   <Sidebar2/>
                </div>
                <div className="container mt-4 slideleft right">
                    <div className="row">
                        <div className="col-12 mb-0">                           
                            <div className="row mb-4 me-5 d-flex justify-content-between">
                                <h2 className='purple w-auto mt-3'>Belgeler</h2>
                                <img src={logo} className='sidebar-logo' alt="" />
                            </div>
                        </div>
                        <div className="col-10 p-0 ">
                            <div className="col-12 w-auto pb-3">
                                <div className="pbg">

                                <div className="row p-3">
                                    <div className="col-1 ms-5 my-auto">
                                        <h2 className='my-auto mx-0 slideup'><i class="fa-regular fa-file"></i></h2>
                                    </div>
                                    <div className="col-7 my-auto text-left">
                                        <h5 className='m-0 slideup d-flex align-items-center'>Banka Hesap Özeti 
                                        
                                        <div class="dropdown2 ms-3">
                                            <button class="d-flex info-btn" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="fa-solid fa-circle-info"></i>
                                            </button>
                                            <div class="dropdown-menu info" aria-labelledby="dropdownMenuButton2">
                                            Türkiye bankaları için Banka hesap özetinizi Mobil bankacılık üzerinden veya Banka şubenizden alabilirsiniz. Wise, Paypal gibi hesaplar 
                                            için mobil bankacılık veya internet bankacılığı kullanılabilir.</div>
                                        </div>
                                        
                                        </h5>
                                    </div>
                                    <div className="col-3 my-auto p-0 justify-content-center d-flex">
                                        {bankInfo ? (
                                            <button className='buton3 m-0' style={{cursor:"default"}}>Yüklendi <i class="fa-solid fa-check-double"></i></button>
                                        ) : (
                                            <form onSubmit={(e) => handleSubmit(e, "bankInfo")}>
                                                <label for="file-upload" class="buton4 slideup">Yükle <i class="fa-solid fa-cloud-arrow-up"></i></label>
                                                <input  id="file-upload" className='d-none' type="file" onChange={handleFileChange} ref={fileInputRef} />
                                                <button type="submit" style={{ display: 'none' }} id="hiddenSubmitButton"></button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 p-0 slideup">
                            <div className="col-12 w-auto pb-3">
                                <div className="pbg">

                                <div className="row p-3">
                                    <div className="col-1 ms-5 my-auto">
                                        <h2 className='my-auto mx-0 slideup'><i class="fa-regular fa-file"></i></h2>
                                    </div>
                                    <div className="col-7 my-auto text-left">
                                        <h5 className='m-0 slideup d-flex align-items-center'>Kimlik Belgesi
                                        <div class="dropdown2 ms-3">
                                            <button class="d-flex info-btn" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="fa-solid fa-circle-info"></i>
                                            </button>
                                            <div class="dropdown-menu info" aria-labelledby="dropdownMenuButton2">
                                                TC Kimlik kartınızın hem arka hem ön yüzünü tek bir sayfada renkli şekilde PDF dosyası halinde yükleyiniz.</div>
                                        </div>
                                        </h5>
                                    </div>
                                    <div className="col-3 my-auto p-0 justify-content-center d-flex">
                                         {identityDocument ? (
                                             <button className='buton3 m-0' style={{cursor:"default"}}>Yüklendi <i class="fa-solid fa-check-double"></i></button>
                                             ) : (
                                                 <form onSubmit={(e) => handleSubmit(e, "identityDocument")}>
                                                <label for="file-upload" class="buton4 slideup">Yükle <i class="fa-solid fa-cloud-arrow-up"></i></label>
                                                <input  id="file-upload" className='d-none' type="file" onChange={handleFileChange} ref={fileInputRef} />
                                                <button type="submit" style={{ display: 'none' }} id="hiddenSubmitButton"></button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-10 p-0 slideup">
                            <div className="col-12 w-auto pb-3">
                                <div className="pbg">

                                <div className="row p-3">
                                    <div className="col-1 ms-5 my-auto">
                                        <h2 className='my-auto mx-0 slideup'><i class="fa-regular fa-file"></i></h2>
                                    </div>
                                    <div className="col-7 my-auto text-left">
                                        <h5 className='m-0 slideup d-flex align-items-center'>Faaliyet Belgesi
                                        <div class="dropdown2 ms-3">
                                            <button class="d-flex info-btn" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="fa-solid fa-circle-info"></i>
                                            </button>
                                            <div class="dropdown-menu info" aria-labelledby="dropdownMenuButton2">
                                                Türkiye Ticaret Odasına kayıtlı şirketinizin Faaliyet belgesini PDF formatında yükleyiniz. (faliyet belgesini kayıtlı olduğunuz ticaret odasından hem internet üzerinden hem fiziki olarak temin edebilirsiniz.)</div>
                                        </div>
                                        </h5>
                                    </div>
                                    <div className="col-3 my-auto p-0 justify-content-center d-flex">
                                        {activityDocument ? (
                                            <button className='buton3 m-0 slideup' style={{cursor:"default"}}>Yüklendi <i class="fa-solid fa-check-double"></i></button>
                                            ) : (
                                                <form onSubmit={(e) => handleSubmit(e, "activityDocument")}>
                                                <label for="file-upload" class="buton4 slideup">Yükle <i class="fa-solid fa-cloud-arrow-up"></i></label>
                                                <input  id="file-upload" className='d-none' type="file" onChange={handleFileChange} ref={fileInputRef} />
                                                <button type="submit" style={{ display: 'none' }} id="hiddenSubmitButton"></button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-10 p-0 slideup">
                            <div className="col-12 w-auto pb-3">
                                <div className="pbg">

                                <div className="row p-3">
                                    <div className="col-1 ms-5 my-auto">
                                        <h2 className='my-auto mx-0 slideup'><i class="fa-regular fa-file"></i></h2>
                                    </div>
                                    <div className="col-7 my-auto text-left">
                                        <h5 className='m-0 slideup d-flex align-items-center'>Yurtdışı Şirket Kurulum Sertifikası
                                        <div class="dropdown2 ms-3">
                                            <button class="d-flex info-btn" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="fa-solid fa-circle-info"></i>
                                            </button>
                                            <div class="dropdown-menu info" aria-labelledby="dropdownMenuButton2">
                                                Yurtdışında kurduğunuz şirketinizin adı, kayıt numarası, ortaklık yapısı gibi bilgilerini içeren (kurulumu yapan firma tarafından size iletilen) dosyayı PDF olarak yükleyiniz.</div>
                                        </div>
                                        </h5>
                                    </div>
                                    <div className="col-3 my-auto p-0 justify-content-center d-flex">
                                        {englandCertificate ? (
                                            <button className='buton3 m-0 slideup' style={{cursor:"default"}}>Yüklendi <i class="fa-solid fa-check-double"></i></button>
                                            ) : (
                                                <form onSubmit={(e) => handleSubmit(e, "englandCertificate")}>
                                                <label for="file-upload" class="buton4 slideup">Yükle <i class="fa-solid fa-cloud-arrow-up"></i></label>
                                                <input  id="file-upload" className='d-none' type="file" onChange={handleFileChange} ref={fileInputRef} />
                                                <button type="submit" style={{ display: 'none' }} id="hiddenSubmitButton"></button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-10 p-0 slideup">
                            <div className="col-12 w-auto pb-3">
                                <div className="pbg">

                                <div className="row p-3">
                                    <div className="col-1 ms-5 my-auto">
                                        <h2 className='my-auto mx-0'><i class="fa-regular fa-file"></i></h2>
                                    </div>
                                    <div className="col-7 my-auto text-left">
                                        <h5 className='m-0 d-flex align-items-center'>Vergi Levhası
                                        <div class="dropdown2 ms-3">
                                            <button class="d-flex info-btn" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="fa-solid fa-circle-info"></i>
                                            </button>
                                            <div class="dropdown-menu info" aria-labelledby="dropdownMenuButton2">
                                                Şirketirketinize ait vergi levhanızı PDF olarak yükleyiniz.</div>
                                        </div>
                                        </h5>
                                    </div>
                                    <div className="col-3 my-auto p-0 justify-content-center d-flex">
                                        {taxPlate ? (
                                            <button className='buton3 m-0' style={{cursor:"default"}}>Yüklendi <i class="fa-solid fa-check-double"></i></button>
                                            ) : (
                                                <form onSubmit={(e) => handleSubmit(e, "taxPlate")}>
                                                <label for="file-upload" class="buton4">Yükle <i class="fa-solid fa-cloud-arrow-up"></i></label>
                                                <input  id="file-upload" className='d-none' type="file" onChange={handleFileChange} ref={fileInputRef} />
                                                <button type="submit" style={{ display: 'none' }} id="hiddenSubmitButton"></button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-10 p-0 slideup">
                            <div className="col-12 w-auto pb-3">
                                <div className="pbg">

                                <div className="row p-3">
                                    <div className="col-1 ms-5 my-auto">
                                        <h2 className='my-auto mx-0'><i class="fa-regular fa-file"></i></h2>
                                    </div>
                                    <div className="col-7 my-auto text-left">
                                        <h5 className='m-0 d-flex align-items-center'>Fatura (Elektrik, Gaz, İnternet)
                                        <div class="dropdown2 ms-3">
                                            <button class="d-flex info-btn" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="fa-solid fa-circle-info"></i>
                                            </button>
                                            <div class="dropdown-menu info" aria-labelledby="dropdownMenuButton2">
                                                Şirketin en büyük hissedarına ait, doğrudan kendi adına kayıtlı Elektirik, doğalgaz, cep telefonu, internet faturasını 
                                                PDF Formatında yükleyin.</div>
                                        </div>
                                        </h5>
                                    </div>
                                    <div className="col-3 my-auto p-0 justify-content-center d-flex">
                                        {taxPlate ? (
                                            <button className='buton3 m-0' style={{cursor:"default"}}>Yüklendi <i class="fa-solid fa-check-double"></i></button>
                                            ) : (
                                                <form onSubmit={(e) => handleSubmit(e, "taxPlate")}>
                                                <label for="file-upload" class="buton4">Yükle <i class="fa-solid fa-cloud-arrow-up"></i></label>
                                                <input  id="file-upload" className='d-none' type="file" onChange={handleFileChange} ref={fileInputRef} />
                                                <button type="submit" style={{ display: 'none' }} id="hiddenSubmitButton"></button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-10 p-0 slideup d-none">
                            <div className="col-12 w-auto pb-3">
                                <div className="pbg">

                                <div className="row p-3">
                                    <div className="col-1 ms-5 my-auto">
                                        <h2 className='my-auto mx-0'><i class="fa-regular fa-file"></i></h2>
                                    </div>
                                    <div className="col-7 my-auto text-left">
                                        <h5 className='m-0 d-flex align-items-center'>WAT Kaydı Sertifikası
                                        <div class="dropdown2 ms-3">
                                            <button class="d-flex info-btn" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="fa-solid fa-circle-info"></i>
                                            </button>
                                            <div class="dropdown-menu info" aria-labelledby="dropdownMenuButton2">
                                                WAT Kaydı Info</div>
                                        </div>
                                        </h5>
                                    </div>
                                    <div className="col-3 my-auto p-0 justify-content-center d-flex">
                                        {taxPlate ? (
                                            <button className='buton3 m-0' style={{cursor:"default"}}>Yüklendi <i class="fa-solid fa-check-double"></i></button>
                                            ) : (
                                                <form onSubmit={(e) => handleSubmit(e, "taxPlate")}>
                                                <label for="file-upload" class="buton4">Yükle <i class="fa-solid fa-cloud-arrow-up"></i></label>
                                                <input  id="file-upload" className='d-none' type="file" onChange={handleFileChange} ref={fileInputRef} />
                                                <button type="submit" style={{ display: 'none' }} id="hiddenSubmitButton"></button>
                                            </form>
                                        )}
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

export default Documents;
