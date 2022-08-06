import React from 'react';
import { Modal } from "react-bootstrap";
import Image from "react-bootstrap/image";
import styled from 'styled-components';
import "./popup.css";

const P = styled.p`
  margin-top: 10px;
`

const Popup = (props) => {
  const {title, desc, img} = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={img} fluid/>
        <P>{desc}</P>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button> 
      </Modal.Footer>*/}
    </Modal>
  );
}

export default Popup;