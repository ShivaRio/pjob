import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

export default function Login() {
  return (
    <>
      <div className="bg-image">
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col lg={5}>
              <Container className="bg-white"></Container>
              <Card className="bg-success-subtle">
                <Card.Body>
                  <Container className="mb-3 mt-4">
                    <h2 className="fw-bold mb-2 text-uppercase text-center text-success">
                      Login
                    </h2>
                    <p className="mb-5 text-center">
                      <b>Enter your details to sign-in</b>
                    </p>
                    <Form className="mb-3">
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicUsername"
                      >
                        <Form.Label className="text-center">
                          <b>Username</b>
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter username"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label><b>Password</b></Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Container className="mb-3">
                        <p className="small">
                          <a className="text-secondary" href="#!">
                            <b>Forgot password?</b>
                          </a>
                        </p>
                      </Container>
                      <Container className="d-grid">
                        <Button
                          variant="success"
                          type="submit"
                          className="login"
                     
                        >
                          Login
                        </Button>
                      </Container>
                    </Form>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
