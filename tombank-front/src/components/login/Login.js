import React, { useState } from "react";
import { Form, FormGroup, Button, Container } from "react-bootstrap";
import User from "../../models/User";
import UserService from "../../services/UserService";
import "./Login.css";
import SessionStorageService from "../../services/SessionStorageService";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const sessionStorageService = SessionStorageService.getService();

  function handleSubmit(e) {
    e.preventDefault();
    let user = new User(0, email, password, "", "", "");
    UserService.loginUser(user).then((response) => {
      if (response !== undefined) {
        console.log(response);
        sessionStorageService.setToken(response.data);
        history.push("/dashboard");
      } else {
        console.log("Incorrect username and/or password");
      }
    });
  }

  return (
    <div>
      <p>This is the login component</p>
      <Container>
        <Form className="loginForm" onSubmit={handleSubmit}>
          <FormGroup size="lg" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </FormGroup>
          <FormGroup size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </FormGroup>
          <Button size="lg" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
