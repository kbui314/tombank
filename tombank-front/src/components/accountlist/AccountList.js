import React from "react";
import "./AccountList.css";
import { Card } from "react-bootstrap";

export default function AccountList(props) {
  return (
    <div className="accountList">
      {props.accounts.map((account) => {
        return (
          <Card
            key={account.accid}
            style={{ width: "18rem" }}
            className="mb-2 account"
            bg="light"
            onClick={() => props.onClick(account)}
          >
            <Card.Body>
              <Card.Header>{account.accNumber}</Card.Header>
              <Card.Text>{account.balance}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
