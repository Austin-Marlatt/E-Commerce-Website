import React, { useState } from 'react';
//import Modal from "react-modal";
import { Nav, NavDropdown, Modal, Tab } from "react-bootstrap";
//import {CREATE_REVIEW} from "../utils/mutations";

function AddProductReview(props) { // Container for tabs with login and signup forms inside a modal
    const [showModal, setShowModal] = useState(false);// State to control modal visibility
    
    return (
    <>
<Tab.Container> 
<Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
    <Modal.Header> 
        <Modal.Title id ="reviewModal"> 
        <Nav variant = "pills"> 
            <Nav.Item> 
                <Nav.Link eventKey="AddReview"> 
                Write your Review
                </Nav.Link>
             </Nav.Item>
        </Nav>
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Tab.Content> 
        <Tab.Pane eventKey="AddReview">
            {/** <ReviewForm HandleModalClose={() => setShowModal(false)} /> NOT WORKING! */}
        </Tab.Pane>
        </Tab.Content>
    </Modal.Body>
</Modal>
</Tab.Container>  
    </>
    )
};
export default AddProductReview;
