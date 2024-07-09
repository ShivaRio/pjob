import React from 'react'
import { Image } from 'react-bootstrap'
import { Button, Col, Collapse, Container, Form, FormGroup, Input, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, Row } from 'reactstrap'
import pjop from "../assets/images/logos/logo-1.png";
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
   <>
    <Container>
        <Navbar className="navbar-expand-lg h1-nav">
          <NavbarBrand href="#">
            <img src={pjop} alt="pjop" className="custom-pjop" />
          </NavbarBrand>
          <NavLink href="/" className="pj">
                  <Link to={'/'} >
                    <b className="pj">PJOP</b>
                    </Link>
                  </NavLink>

                  <NavLink href="/" className="pj" style={{ color: "green", padding: '30px' }}>
                  <Link to={'/'} >
                    <b className="pj" style={{ color: "green" }}>BUSINESS</b>
                    </Link>
                  </NavLink>

          <NavbarToggler>
            <span className="ti-menu"></span>
          </NavbarToggler>
          <Collapse navbar id="header1">
            <Nav navbar className="ms-auto mt-2 mt-lg-0">
              <NavItem className="active">
                <NavLink href="#" style={{ color: "green" }}>
                <Link to={'/'} >
                  <b style={{ color: "green" }}>Home</b>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{ color: "green" }}>
                  <b>About</b>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{ color: "green" }}>
                <Link to={'/courses'} >
                  <b style={{ color: "green" }}>Courses</b>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" style={{ color: "green" }}>
                <Link to={'/contact'} >
                  <b style={{ color: "green" }}>Contact</b>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <a className="btn btn-success text-black mt-0" href="#">
                {/* <Link to={'/login'} > */}
                  <b style={{color:"black"}}>Call us</b>
                  {/* </Link> */}
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
      <div className='spacer'></div>

    <div className="bg-light">
        </div>
        <div className="contact1">
          <Container>
            <Row>
              <Row className="m-0">
                <Col lg="8">
                  <div className="contact-box p-r-40">
                    <h4 className="title">Quick Contact</h4>
                    <Form>
                      <Row>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input type="text" placeholder="name" />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input type="text" placeholder="email" />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input
                              type="textarea"
                              name="text"
                              placeholder="message"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <Button
                            type="submit"
                            className="btn btn-success-gradiant m-t-20 btn-arrow"
                          >
                            <span>
                              {" "}
                              SUBMIT <i className="ti-arrow-right"></i>
                            </span>
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="contact">
                    <Image
                      src={require("../assets/images/contact/contact44.png")}
                    ></Image>
                  </div>
                </Col>
              </Row>
            </Row>
          </Container>
        </div>
        <div className="footer4 b-t spacer" style={{ backgroundColor: "black" }}>
        <Container>
          <Row>
            <Col lg="3" md="6" className="m-b-30">
              <h5 className="m-b-20" style={{ color: "#20c997" }}>
                <b>Address</b>
              </h5>
              <p className="context" style={{ color: "white" }}>
                71 Amsteroum Avenue Cronish Night, NY 35098
              </p>
            </Col>
            <Col lg="3" md="6" className="m-b-30">
              <h5 className="m-b-20" style={{ color: "#20c997" }}>
                <b>Phone</b>
              </h5>
              <p className="context" style={{ color: "white" }}>
                Reception : +205 123 4567 <br />
                Office : +207 235 7890
              </p>
            </Col>
            <Col lg="3" md="6" className="m-b-30">
              <h5 className="m-b-20" style={{ color: "#20c997" }}>
                <b>Email</b>
              </h5>
              <p className="context" style={{ color: "white" }}>
                Office :{" "}
                <a href="#" className="link" style={{ color: "white" }}>
                  info@wrappixel.com
                </a>{" "}
                <br />
                Site :{" "}
                <a href="#" className="link" style={{ color: "white" }}>
                  wrapkit@wrappixel.com
                </a>
              </p>
            </Col>
            <Col lg="3" md="6">
              <h5 className="m-b-20" style={{ color: "#20c997" }}>
                <b>Social</b>
              </h5>
              <div className="round-social light">
                <a href="#" className="link">
                  <i className="fa fa-facebook" style={{color: 'blue'}}></i>
                </a>
                <a href="#" className="link">
                  <i className="fa fa-twitter" style={{color: '#1DA1F2'}}></i>
                </a>
                <a href="#" className="link">
                  <i className="fa fa-google-plus" style={{color: 'darkred'}}></i>
                </a>
                <a href="#" className="link">
                  <i className="fa fa-youtube-play" style={{color: 'red'}}></i>
                </a>
                <a href="#" className="link">
                  <i className="fa fa-instagram" style={{color: '#C13584'}}></i>
                </a>
              </div>
            </Col>
          </Row>
          <div className="f4-bottom-bar">
            <Row>
              <Col md="12">
                <div className="d-flex font-14 justify-content-between">
                  <div
                    className="m-t-10 m-b-10 copyright"
                    style={{ color: "white" }}
                  >
                    All Rights Reserved by pjoptechnologies.
                  </div>
                  <div className="links ms-auto m-t-10 m-b-10">
                    <a
                      href="#"
                      className="col-md-6 p-10 p-l-0"
                      style={{ color: "white" }}
                    >
                      Terms of Use
                    </a>
                    <a href="#" className="p-10" style={{ color: "white" }}>
                      Legal Disclaimer
                    </a>
                    <a href="#" className="p-10" style={{ color: "white" }}>
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
   </>
  )
}
