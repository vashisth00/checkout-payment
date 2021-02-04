/* eslint-disable jsx-a11y/alt-text */

import React,{useState} from 'react';
import { Button, Modal} from 'react-bootstrap';
import MasterForm from '../Pay';


function InsuranceBtn() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" className="blue-color" onClick={handleShow}>
          <img src="https://i.ibb.co/pz67kPY/logo-sprinque.png" height="50px"></img>
          Get Credit Insurance
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
          <MasterForm></MasterForm> 
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button> */}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 export default InsuranceBtn;