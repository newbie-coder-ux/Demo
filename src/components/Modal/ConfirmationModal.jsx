import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmationModel = ({onConfirm}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const onConfirm = () => {
    setShow(true);
  }

  return (
    <>
      <ConfirmationModel show={show} onHide={handleClose}>
        <ConfirmationModel.Header closeButton>
          <ConfirmationModel.Title>Confirm changes</ConfirmationModel.Title>
        </ConfirmationModel.Header>
        <ConfirmationModel.Body>
Are you sure to make this changes?
        </ConfirmationModel.Body>
        <ConfirmationModel.Footer>
          <Button variant="secondary" onClick={onConfirm}>
            Ok
          </Button>
        </ConfirmationModel.Footer>
      </ConfirmationModel>
    </>
  );
};

export default ConfirmationModel;
