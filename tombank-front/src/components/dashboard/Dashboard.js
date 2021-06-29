import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import AccountService from "../../services/AccountService";
import AccountInfo from "../accountinfo/AccountInfo";
import AccountList from "../accountlist/AccountList";
import "./Dashboard.css";

export default function Dashboard() {
  const [accountList, setAccountList] = useState([]);
  const [account, setAccount] = useState();

  function addNewAccount() {
    AccountService.addNewAccount().then((response) => {
      if (response !== undefined) {
        setUserAccounts();
      } else {
        console.log("Failed");
      }
    });
  }

  function setUserAccounts() {
    AccountService.getUserAccounts().then((response) => {
      if (response !== undefined) {
        response.data.sort((a, b) => {
          return a.accid - b.accid;
        });
        setAccountList(response.data);
      }
    });
  }

  useEffect(() => {
    setUserAccounts();
  }, []);

  return (
    <Container>
      <Button onClick={() => addNewAccount()} className="add-account-btn">
        + Account
      </Button>
      <div className="account-section">
        <AccountList accounts={accountList} onClick={setAccount} />
        <AccountInfo account={account} />
      </div>
    </Container>
  );
}
