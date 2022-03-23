import React, { useState } from 'react';
import {Form, Button, Alert} from 'react-bootstrap';

function UserForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let emailValid = false;
    let passwordValid = false;
    if (email.length === 0) {
      setEmailError("Email is required!!!");
    } else if (email.length < 6) {
      setEmailError("Email should be minimum 6 characters");
    } else if (email.indexOf(" ") >= 0) {
      setEmailError("Email cannot contain spaces");
    } else {
      setEmailError("");
      emailValid = true;
    }

    if (password.length === 0) {
      setPasswordError("Password is empty!!!");
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
      passwordValid = true;
    }

    if (emailValid && passwordValid) {
      alert(`Email: ${email} \nPassword: ${password}`)
      setEmail("");
      setPassword("");
    }
  }

  return(
    <div>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
          onChange={(event) => setEmail(event.target.value)}
          value={email} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      {emailError.length > 0 &&
      <Alert variant="danger">{emailError}</Alert>}

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
          value={password} />
      </Form.Group>
      {passwordError.length > 0 &&
      <Alert variant="danger">{passwordError}</Alert>}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    Email entered: {email}
    <br/>
    Password entered: {password}
    </div>
  );
}

export default UserForm;
