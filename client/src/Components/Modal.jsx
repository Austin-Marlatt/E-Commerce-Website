import React, { useState } from 'react';
import { Nav, NavDropdown, Modal, Tab } from "react-bootstrap";
import ReviewForm from './Accordian/reviewForm';
function AddProductReview(props) { // Container for tabs with login and signup forms inside a modal
    const [showModal, setShowModal] = useState(false);// State to control modal visibility
    
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    return (   
    <> 
        <Tab.Container> 
            <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}> 
                <Modal.Header> 
                    <Modal.Title id ="reviewModal"> 
                        <Nav variant = "pills"> 
                            <Nav.Item> 
                            <Nav.Link eventKey="AddReview"> (not rendering)
                            </Nav.Link> 
                            </Nav.Item> 
                        </Nav> 
                    </Modal.Title> 
                </Modal.Header> 
            <Modal.Body> 
                <Tab.Content> 
                    <Tab.Pane eventKey="AddReview"> 
                        <ReviewForm HandleModalClose={()=>{setShowModal(false)}}> 
                        </ReviewForm> 
                    </Tab.Pane> 
                </Tab.Content> 
            </Modal.Body> 
            </Modal> 
        </Tab.Container> 
    </> 
    )
};
export default AddProductReview;
//can't utilize Modal