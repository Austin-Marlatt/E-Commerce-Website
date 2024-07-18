// see SignupForm.js for comments

import { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';






const ReviewForm = () => {
  const [userFormData, setUserFormData] = useState({  review: '' });
  const [validated] = useState(false);
  
  const [showAlert, setShowAlert] = useState(false);

 

 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

   
    // clear form values
    setUserFormData({
      
      review: '',
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials!
        </Alert>
      

        <Form.Group className='mb-3'>
          <Form.Label htmlFor="review">type your review</Form.Label>
          <Form.Control
            type="input"
            placeholder="It was great"
            name="review"
            onChange={handleInputChange}
            value={userFormData.review}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.review)}
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ReviewForm;



<Tab.Container>
<Modal.Header>
  <Modal.Title id ="reviewModal">
    <Nav variant = "pills">
      <Nav.Item>
        <Nav.Link eventKey="AddReview">
          Submit Rwview
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Modal.Title>
</Modal.Header>
<Modal.Body>
  <Tab.Content>
    <Tab.Pane eventKey= "AddReview">
      <ReviewForm HandleModalClose={()=>{setShowModal(false)}}>
      </ReviewForm>
    </Tab.Pane>
  </Tab.Content>
</Modal.Body>
</Tab.Container>