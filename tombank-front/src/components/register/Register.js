import React, { useState } from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import User from "../../models/User";
import UserService from "../../services/UserService";
import "./Register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let newUser = new User(0, email, password, firstName, lastName, phone);
    UserService.registerNewUser(newUser).then((response) => {
      if (response !== undefined) {
        console.log(response);
      } else {
        console.log("Error");
      }
    });
  }

  return (
    <div>
      <p>This is the registration component</p>
      <Container>
        <Form className="registerForm" onSubmit={handleSubmit}>
          <FormGroup size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
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
              placeholder="Enter password"
            />
          </FormGroup>
          <FormGroup size="lg" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
            />
          </FormGroup>
          <FormGroup size="lg" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
            />
          </FormGroup>
          <FormGroup size="lg" controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Phone Number"
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
