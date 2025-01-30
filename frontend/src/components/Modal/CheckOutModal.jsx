import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const CheckOutModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <Button onClick={handleShow}>Check Out</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Body>Order Placed Sucessfully</Modal.Body>
        </Modal.Header>
      </Modal>
    </>
  );
};

export default CheckOutModal;
