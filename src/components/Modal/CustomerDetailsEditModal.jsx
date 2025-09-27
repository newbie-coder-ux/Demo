import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ConfirmationModel from '../Modal/ConfirmationModel'

// Main Form Component
function MyForm({ onSubmit }) {
  const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm({
    mode: 'onChange',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form Fields */}
      <input
        {...register('id', { required: 'ID is required' })}
        placeholder="Customer ID"
      />
      {errors.id && <p>{errors.id.message}</p>}

      <input
        {...register('name', { required: 'Name is required' })}
        placeholder="Full Name"
      />
      {errors.name && <p>{errors.name.message}</p>}

      <input
        {...register('email', { required: 'Email is required' })}
        placeholder="Email"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        {...register('phone', { required: 'Phone number is required' })}
        placeholder="Phone Number"
      />
      {errors.phone && <p>{errors.phone.message}</p>}

      <input
        {...register('company', { required: 'Company is required' })}
        placeholder="Customer Company"
      />
      {errors.company && <p>{errors.company.message}</p>}

      <input
        {...register('website', { required: 'Website is required' })}
        placeholder="Website"
      />
      {errors.website && <p>{errors.website.message}</p>}

      <input
        {...register('city', { required: 'City is required' })}
        placeholder="City"
      />
      {errors.city && <p>{errors.city.message}</p>}
    </form>
  );
}

// Parent Component for Form and Confirmation Modal
const CustomerDetailsEditModal = ({ show, handleClose, onSave, grid }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Function to show the confirmation modal
  const handleSaveClick = () => {
    if (isDirty && isValid) {
      setShowConfirmation(true); // Show the confirmation modal
    }
  };

  // Function to handle the confirmation (save action)
  const handleConfirmation = () => {
    onSave(grid); // Call the onSave function passed from the parent
    setShowConfirmation(false); // Close the confirmation modal
    handleClose(); // Close the main modal
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Customer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MyForm onSubmit={handleSaveClick} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleSaveClick}
            disabled={!isDirty || !isValid}
          >
            Save
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Confirmation Modal */}
      <ConfirmationModel
        show={showConfirmation}
        handleClose={() => setShowConfirmation(false)}
        onConfirm={handleConfirmation}
      />
    </>
  );
};

export default CustomerDetailsEditModal;
