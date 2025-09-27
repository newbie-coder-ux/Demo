import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomDetailEditModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch Modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>View Details of {id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This is a simple modal using React Bootstrap.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
           Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
