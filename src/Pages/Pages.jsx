import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CustomerDetailsEditModal from '../../src/components/Modal/CustomerDetailsEditModal';

const ButtonWithModal = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Modal
      </Button>

      {/* Render the modal and pass props */}
      <CustomerDetailsEditModal show={show} handleClose={handleClose} />
    </>
  );
};

export default ButtonWithModal;
