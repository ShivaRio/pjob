import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Carousel,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

export default function Header() {
  return (
    <>
      <div className="static-slider-head banner2">
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" md="6" className="align-self-center text-center">
              <h1 className="title" style={{ fontSize: "6vw" }}>
                PJOP Computers
              </h1>
              <h4 className="subtitle font-light">
                Upskill and Transform Your Career!
              </h4>
              <a
                href="/"
                className="btn btn-light m-r-20 btn-md m-t-30 font-14"
              >
                {" "}
                <b>Get Started</b>
              </a>
            </Col>
            <Col lg="4" md="6" className="text-center">
              <Card className="card-shadow">
                <CardBody>
                  <h4 className="font-weight-bold text-decoration">
                    <b>GET THIS COURSE</b>
                  </h4>
                  <Form>
                    <Row>
                      <Col lg="6">
                        <FormGroup className="m-t-15">
                          <Input type="text" placeholder="First Name" />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup className="m-t-15">
                          <Input type="text" placeholder="Last Name" />
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                        <FormGroup className="m-t-15">
                          <Input type="email" placeholder="Email" />
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                        <FormGroup className="m-t-15">
                          <Input type="number" placeholder="Phone Number" />
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                        <p>
                          By submitting, you agree to the{" "}
                          <span className="text-primary">
                            <Link to={"/custom-components"}>
                              Privacy Policy
                            </Link>{" "}
                          </span>
                          and to receive communications about this and other
                          courses.
                        </p>
                      </Col>
                      <Col lg="12">
                        <Button
                          type="Butt"
                          className="btn btn-success-gradiant m-t-10 btn-arrow"
                        >
                          <span>
                            {" "}
                            Enroll Now <i className="ti-arrow-right"></i>
                          </span>
                        </Button>
                      </Col>

                      <Col lg="12">
                        <hr />
                      </Col>
                      <Col lg="6">
                        <Button type="button" className="btn btn-primary w-100">
                          <i class="fa fa-phone" /> Contact
                        </Button>
                      </Col>
                      <Col lg="6">
                        <Button type="button" className="btn btn-success w-100">
                          <i class="fa fa-whatsapp" /> whatsapp
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <Carousel>
        <Carousel.Item>
          <Image
            src={require("../assets/images/landingpage/slide1.jpg")}
          ></Image>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image
            src={require("../assets/images/landingpage/slide2.jpg")}
          ></Image>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image
            src={require("../assets/images/landingpage/slide3.jpg")}
          ></Image>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </>
  );
}
