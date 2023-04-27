import React, { useContext } from "react";
import "./viewImages.css";
import { AppContext } from "../../context/appContext";
import { IconButton, Modal } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
const ViewImages = () => {
  const { modalOpen, closeModal, modalImage } = useContext(AppContext);
  return (
    <Modal
      open={modalOpen}
      onClose={closeModal}
      aria-labelledby="responsive-modal-title"
      aria-describedby="responsive-modal-description"
      className="responsive-modal"
    >
      <div className="responsive-modal-content">
        <IconButton onClick={closeModal} className="cancelIconModal">
          <CancelIcon />
        </IconButton>
        <img
          src={modalImage}
          alt="ModalImage..."
          // onLoad={props.handleImageLoad}
          // style={{ display: props.imageLoaded ? "block" : "none" }}
        />
        {/* {!props.imageLoaded && <div className="loader"></div>} */}
      </div>
    </Modal>
  );
};

export default ViewImages;
