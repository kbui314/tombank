import React, { useState } from "react";
import "./AccountInfo.css";
import { Button } from "react-bootstrap";
import TransModal from "../transmodal/TransModal";

export default function AccountInfo(props) {
  const [showTransModal, setShowTransModal] = useState(false);
  // const helloWorld;
  return (
    <div>
      <p>
        {props.account !== undefined
          ? props.account.accNumber
          : "No Information"}
      </p>
      <p>{props.account !== undefined ? props.account.balance : ""}</p>

      {props.account !== undefined ? (
        <Button onClick={() => setShowTransModal(true)}>
          Make a Transaction
        </Button>
      ) : (
        ""
      )}
      <TransModal
        show={showTransModal}
        account={props.account}
        onclick={setShowTransModal}
      />
    </div>
  );
}
