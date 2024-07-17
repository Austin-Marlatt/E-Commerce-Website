import React, { useState, useEffect } from 'react';
import { Nav, NavDropdown, Form, Button, Alert } from "react-bootstrap";
function Sample () { //alternate one I first built
    <Tab.Container defaultActiveKey="user"> {/**create a container for organizing tabs within the modal */}
            <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>{/** Modal for adding reviews */}
                <Modal.Header> {/**header section of the modal */}
                {/**title of the modal and assigns an id of "reviewModal" */}
                    <Nav id="userLoggedIn"> {/** Navigation bar component for logged-in user */} 
                     <Nav.Item variant="product_id" >{/** Navigation item for product ID one is currently leaving a review for */} {/**item within the navigation bar */}
                        <Nav.Link eventKey="addReview"> {/**creates a clickable link within the navigation bar that corresponds to the "AddReview" tab */}
                            What is your name?
                        </Nav.Link>
                        <Nav.Link eventKey="feedback">{/** Navigation link for leaving a review */}
                            Please leave us your review. 
                        </Nav.Link>
                     </Nav.Item>
                    </Nav>
                </Modal.Header>
                <Modal.Body>{/** Body section of the modal */}
                    <Tab.Content> {/**wrap the content of the tabs */}
                        <Tab.Pane eventKey="previousReviews">{/**defines a tab pane (that will be rendered) with the event key "previousReview" */}
                            <Tab.Post handleModalClose={() => setShowModal(true)} /> {/**rendered inside the "AddReview" tab pane */}
                        </Tab.Pane>{/** Post component for displaying previous reviews */}
                        <Tab.Pane eventKey="postNewReview">{/** Tab pane for posting a new review */}
                            <Tab.Post handleModalClose={() => setShowModal(false)} /> {/**prop passed to the ReviewForm component. It most likely handles closing the modal when the review form is submitted */}
                        </Tab.Pane>{/** Post component for posting a new review */}
                    </Tab.Content>
                </Modal.Body>
            </Modal>
            </Tab.Container>
    };
    
function ReviewFormat() {
    const [userFormationData, setUserFormationData] = useState({review:""});
    const [validation] = useState(false);
    const [displayAlert, setDisplayAlert] = useState(false);

    const handleFeedbackChange = (event) => {
        const { name, value } = event.target;
        setUserFormationData({ ...userFormationData, [name]: value });
      };

    const handleFormatSubmission = async (event) => {
        event.preventDefault();
        const formatting = event.currentTarget;  
        if (formatting.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          };

// clear form values
        setUserFormationData({review:""});
    };
    
    return (
<> 
<Form 
    noValidate {/** tells the browser not to perform its native form validation. By using noValidate, you can handle form validation in React using custom logic */}
    validated={validated} {/** manage the validation state of the form. The value of validated would be a boolean that indicates whether the form has been validated or not */}
    onSubmit={handleFormatSubmission} > {/** specifies the function that should be called when the form is submitted */}
    <Alert {/** display alert messages to the user */}
    dismissible {/** indicates that the alert can be dismissed or closed by the user */}
    onClose={() => setDisplayAlert(false)} {/** This prop specifies the function that should be called when the alert is closed */}
    show={displayAlert} {/** This prop controls whether the alert is shown or hidden */}
    variant="danger" > {/** indicates an alert with a red color to signify an error or warning */}
        Check your entry, as something either went wrong or was inputted incorrectly!
    </Alert>

    <Form.Group className='mb-3'>
        <Form.Label htmlFor="review">
            Please input your review on this product. 
        </Form.Label> 
         <Form.Control
        type="input"
        placeholder="How should I put it?"
        name="review"
        onChange={handleFeedbackChange}
        value={userFormationData.review}
        required > 
        </Form.Control>
        <Form.Control.Feedback
        type="invalid">
            You are required to enter your Password.
        </Form.Control.Feedback>

    </Form.Group>

        <Button
        disabled={!(userFormationData.review)}
        type="submit"
        variant="success" >
                Submit Your Review
        </Button>
</Form>
</>
    );
};
export default ReviewFormat;