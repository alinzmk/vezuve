import '../App.css';
import { useState } from 'react';
import logo from "../Assets/logo-renkli.png"
import Sidebar2 from '../Modals/Sidebar2';
import VideoModal from '../Modals/VideoModal';


function Tutorials() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedVideoId, setSelectedVideoId] = useState("");
    
    const video = "jRg9e428tNo"
    const thumb = "https://img.youtube.com/vi/"+video+"/sddefault.jpg"
    

    const openModal = (videoId) => {
        setSelectedVideoId(videoId);
        setModalIsOpen(true);
    };
    
    const closeModal = () => {
        setSelectedVideoId(null);
        setModalIsOpen(false);
    };
    
    



  return (
    <>
        <VideoModal
            isOpen={modalIsOpen}
            closeModal={closeModal}
            videoId={selectedVideoId}
        />
        <div className="dashboard m-0">
            <div className="row d-flex ">
                <div className="p-0">
                    <Sidebar2/>
                </div>
                <div className="container mt-4 slideleft right">
                    <div className="row">
                        <div className="col-12">
                            <div className="row mb-4 d-flex justify-content-between me-5">
                                <h2 className='purple w-auto mt-3'>Dersler</h2>
                                <img src={logo} className='sidebar-logo' alt="" />
                            </div>
                            <div className="row slideleft">
                                <div className='col-11 pbg'>
                                    <div className="row my-5">
                                        <div className="col-12 col-md-6 col-xl-3 videoWrapper">
                                            <div className='text-center videoInner mx-5' onClick={() => openModal(video)}>
                                                
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 col-xl-3 videoWrapper">
                                            <div className='text-center videoInner mx-5' onClick={() => openModal(video)}>
                                                
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-3 videoWrapper">
                                            <div className='text-center videoInner mx-5' onClick={() => openModal(video)}>
                                                
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-3 videoWrapper">
                                            <div className='text-center videoInner mx-5' onClick={() => openModal(video)}>
                                                
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

export default Tutorials;


