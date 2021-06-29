import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./TransModal.css";

export default function TransModal(props) {
  return (
    <div>
      <Modal show={props.show}>
        <p>Transaction Modal</p>
        <Button onClick={() => props.onclick(false)}>Cancel</Button>
      </Modal>
    </div>
  );
}
