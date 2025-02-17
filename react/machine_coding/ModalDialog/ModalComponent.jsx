import { useState } from "react";
import("./ModalComponent.css");

const ModalComponent = () => {
  const [show, setShow] = useState(false);
  const onClose = () => {
    setShow(false);
  };
  const onOpen = () => {
    setShow(true);
  };
  return (
    <div>
      <button onClick={() => onOpen(true)}>Open</button>
      <Modal show={show} onClose={onClose} title={"Goa is on"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
        laboriosam?
      </Modal>
    </div>
  );
};

const Modal = ({ show, onClose, title, children }) => {
  return (
    show && (
      <div className="modal-backdrop" onClick={onClose}>
        <div className={`modal-wrapper ${show ? "active" : ""}`}>
          <div className="modal-header">
            <h1 className="modal-title">{title}</h1>
            <span onClick={onClose}>X</span>
          </div>
          <hr />
          <div className="modal-body">{children}</div>
        </div>
      </div>
    )
  );
};

export default ModalComponent;
