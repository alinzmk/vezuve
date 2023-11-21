import React from 'react';
import Modal from 'react-modal';

const Requirements = ({ isOpen, closeModal}) => {
    
const videoid = "https://www.youtube.com/embed/"

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Video Modal"
      style={
        {content: {
          width: "1020px",
          height: "650px",
          margin: "auto",
          backgroundColor: "transparent",
          border: "none",
        },
        overlay:{
          backgroundColor: "rgba(0,0,0,0.6)"
        }
      }
      }
      >
        <div className='videoModal' style={{zIndex: "99"}}>
          <div className='row'>
          </div>
        </div>
    </Modal>
  );
};

export default Requirements;