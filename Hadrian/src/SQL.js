import React, { useRef, useState } from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Button,
  Card,
  CardBody,
  Col,
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Row,
  UncontrolledAccordion,
  UncontrolledDropdown,
} from "reactstrap";
import pjop from "../src/assets/images/logos/logo-1.png";
import certification from "../src/assets/images/landingpage/certification.jpg";
import online from "../src/assets/images/landingpage/online.jpg";
import fulltime from "../src/assets/images/landingpage/fulltime.jpg";
import access from "../src/assets/images/landingpage/access.jpg";
import support from "../src/assets/images/landingpage/support.jpg";
import refund from "../src/assets/images/landingpage/refund.jpg";
import { FaPlay } from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function SQL() {
  const ref = useRef(null);
  const courseRef = useRef(null);
  const contactRef = useRef(null);
  const trainingRef = useRef(null);
  const videosRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      {/* topbar start */}

      <div className="header-bar-one">
        <Container>
          <p style={{ color: "white" }}>
            <b>No.4/A Velrampet Main Road Velrampet,Puducherry</b>
          </p>
        </Container>
        <div
          className="header-bar-two float-end clearfix"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <ul>
            <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/home">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </ul>
          <ul
            className={
              MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
            }
            style={{ marginRight: "5px" }}
            onClick={() => setMobileMenu(false)}
          >
            <Link to="/">
              <b style={{ color: "#013C2C", fontWeight: "bold" }}>Tutorial</b>
            </Link>
          </ul>
          <ul
            className={
              MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
            }
            style={{ marginRight: "55px" }}
            onClick={() => setMobileMenu(false)}
          >
            <Link to="/">
              <b style={{ color: "#013C2C", fontWeight: "bold" }}>Videos</b>
            </Link>
          </ul>
          <Button
            type="button"
            className="but btn btn-dark w-20 m-1 p-2"
            onClick={() => {
              window.location.href = "tel:+1234567890";
            }}
          >
            <i className="fa fa-phone" /> <b className="call">Call us</b>
          </Button>
        </div>
      </div>

      <div className="header1 po-relative">
        <Container>
          <Navbar className="navbar-expand-lg h1-nav">
            <NavbarBrand href="/">
              <Image
                src={require("../src/assets/images/logos/pjop.png")}
                className="custom-pjop"
              ></Image>
            </NavbarBrand>

            {/* <NavLink href="/" className="pj">
                  <Link to={'/'} >
                    <b className="pj">PJOP</b>
                    </Link>
                  </NavLink>

                  <NavLink href="/" className="pj" style={{ color: "green", padding: '30px' }}>
                  <Link to={'/'} >
                    <b className="pj" style={{ color: "green" }}>BUSINESS</b>
                    </Link>
                  </NavLink> */}

            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav navbar className="ms-auto mt-2 mt-lg-0">
                <NavItem className="active">
                  <NavLink href="/" style={{ color: "green" }}>
                    <Link to={"/"}>
                      <b style={{ color: "green" }}>Home</b>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={() => {
                      ref.current?.scrollIntoView();
                    }}
                    href="#"
                    style={{ color: "green" }}
                  >
                    <b style={{ color: "green" }}>About</b>
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink
                    onClick={() => {
                      courseRef.current?.scrollIntoView();
                    }}
                    href="#"
                    style={{ color: "green" }}
                  >              
                    <b style={{ color: "green" }}>Courses</b>
                  </NavLink>
                </NavItem> */}
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav style={{ color: "green" }}>
                    <b>Courses</b> <i className="fa fa-angle-down m-l-5"></i>
                  </DropdownToggle>
                  <DropdownMenu className="b-none animated fadeInUp">
                  <Link to={"/dca"}>
                    <DropdownItem>                    
                      <b>DCA</b>                     
                    </DropdownItem>
                    </Link>
                    <Link to={"/desktop"}>
                    <DropdownItem>
                      <b>Desktop Publishing</b>
                    </DropdownItem>
                    </Link>
                    <Link to={"/software_development"}>
                    <DropdownItem>
                      <b>Software Development</b>
                    </DropdownItem>
                    </Link>

                    {/* <DropdownItem divider /> */}
                    <Link to={"/web_designing"}>
                    <DropdownItem>
                      <b>Web Designing</b>
                    </DropdownItem>
                    </Link>
                    <Link to={"/Advanced_python"}>
                    <DropdownItem>
                      <b>Advanced Python</b>
                    </DropdownItem>
                    </Link>
                    {/* <DropdownItem divider /> */}
                    <Link to={"/Hardware_networking"}>
                    <DropdownItem>
                      <b>Hardware Networking</b>
                    </DropdownItem>
                    </Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink
                    href="/"
                    style={{ color: "green" }}
                    onClick={() => {
                      trainingRef.current?.scrollIntoView();
                    }}
                  >
                    <Link to={""}>
                      <b style={{ color: "green" }}>Training</b>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/"
                    style={{ color: "green" }}
                    onClick={() => {
                      videosRef.current?.scrollIntoView();
                    }}
                  >
                    <Link to={""}>
                      <b style={{ color: "green" }}>Gallery</b>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/"
                    style={{ color: "green" }}
                    onClick={() => {
                      videosRef.current?.scrollIntoView();
                    }}
                  >
                    <Link to={""}>
                      <b style={{ color: "green" }}>Typewriting</b>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/"
                    style={{ color: "green" }}
                    onClick={() => {
                      videosRef.current?.scrollIntoView();
                    }}
                  >
                    <Link to={""}>
                      <b style={{ color: "green" }}>Tuition</b>
                    </Link>
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink
                    href="/"
                    style={{ color: "green" }}
                    onClick={() => {
                      videosRef.current?.scrollIntoView();
                    }}
                  >
                    <Link to={""}>
                      <b style={{ color: "green" }}>Videos</b>
                    </Link>
                  </NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink
                    onClick={() => {
                      contactRef.current?.scrollIntoView();
                    }}
                    href="#"
                    style={{ color: "green" }}
                  >
                    {/* <Link to={"/contact"}> */}
                    <b style={{ color: "green" }}>Contact</b>
                    {/* </Link> */}
                  </NavLink>
                </NavItem>
                <NavItem>
                  {/* <a className="btn btn-success text-black mt-0" href="#"> */}
                  {/* <Link to={"/login"}> */}
                  {/* <b style={{color:'black'}}>Call us</b> */}
                  {/* <Button
                    type="button"
                    className="btn btn-success w-100"
                    onClick={() => {
                      window.location.href = "tel:+1234567890";
                    }}
                  >
                    <i class="fa fa-phone" /> <b>Call us</b>
                  </Button> */}
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
       
        <div className="header-bar-one navlinks" style={{marginTop: "-15px"}} >
          <Container>
            <p style={{ color: "white" }} className="navlinks">
            <Link to={"/html"} onClick={scrollToTop} style={{color: "white"}}>
              <b>HTML</b></Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={"/css"} onClick={scrollToTop} style={{color: "white"}}>
              <b>CSS</b></Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={"/javascript"} onClick={scrollToTop} style={{color: "white"}}>
              <b>Javascript</b></Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={"/php"} onClick={scrollToTop} style={{color: "white"}}>
              <b>PHP</b></Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={"/sql"} onClick={scrollToTop} style={{color: "white"}}>
              <b>SQL</b></Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={"/reactjs"} onClick={scrollToTop} style={{color: "white"}}>
              <b>ReactJs</b></Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={"/bootstrap"} onClick={scrollToTop} style={{color: "white"}}>
              <b>Bootstrap</b></Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={"/mongodb"} onClick={scrollToTop} style={{color: "white"}}>
              <b>MongoDB</b></Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={"/nodejs"} onClick={scrollToTop} style={{color: "white"}}>
              <b>NodeJs</b></Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={"/typescript"} onClick={scrollToTop} style={{color: "white"}}>
              <b>Typescript</b></Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={"/angular"} onClick={scrollToTop} style={{color: "white"}}>
              <b>Angular</b></Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={"/sass"} onClick={scrollToTop} style={{color: "white"}}>
              <b>Sass</b></Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
          </Container>
        </div>

        <div className="bg-image">
          <div className="title-holder">
            <Container>
              <Row>
                <Col>
                  <h1 className="Abt">
                    <b>SQL for Beginners</b>
                  </h1>
                  <h2 className="Abt1">
                    <b>What you'll learn</b>
                  </h2>
                  <p className="para">
                    <br />
                    <b>
                      Have a detailed knowledge and understanding of using
                      MySQL, one of the most widely used databases in the world.
                      Obtained a knowledge of SQL, and MySQL, allows students to
                      apply for jobs in the IT sector. In-depth knowledge of
                      database design will give students an edge over other
                      applicants.
                    </b>
                  </p>
                  <h3 className="Abt1 display-flex">
                    <b>Buy this course @</b>
                  </h3>
                  <div className="d-flex">
                    <h3 className="Abt2">
                      <b>₹800</b>
                    </h3>

                    <h3 className="Abt3 ps-2">
                      <b>₹499</b>
                    </h3>
                    <p className="badge badge-warning ms-2 mt-1 ps-1">
                      <b>You Save ₹</b>
                      <span class="saved-amount">
                        <b>301</b>
                      </span>
                      !
                    </p>
                  </div>
                </Col>
                <Col lg="4" md="6" className="text-center">
                  <div className="cards">
                    <Card className="card-shadow shadow position-fixed me-5">
                      <CardBody>
                        <h4 className="font-weight-bold text-decoration">
                          <b>GET THIS COURSE @₹499</b>
                        </h4>
                        <Form>
                          <Row>
                            <Col lg="12">
                              <FormGroup className="m-t-15">
                                <Input type="text" placeholder="Name" />
                              </FormGroup>
                            </Col>
                            <Col lg="12">
                              <FormGroup className="m-t-15">
                                <Input type="email" placeholder="Email ID" />
                              </FormGroup>
                            </Col>
                            <Col lg="12">
                              <FormGroup className="m-t-15">
                                <Input
                                  type="number"
                                  placeholder="Phone Number"
                                />
                              </FormGroup>
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
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <br />
        <br />

        <div className="title-holder">
          <Container>
            <Row>
              <Col>
                <h1 className="Abt4">
                  <b>What is SQL</b>
                </h1>
                <p className="para1">
                  <br />
                  <b>
                    Have a detailed knowledge and understanding of using MySQL,
                    one of the most widely<br /> used databases in the world. Obtained
                    a knowledge of SQL, and MySQL, allows students<br /> to apply for
                    jobs in the IT sector. In-depth knowledge of database design
                    will give students<br /> an edge over other applicants.
                  </b>
                </p>
                <h3 className="Abt4">
                  <b>What will you learn in this course?</b>
                </h3>
                <p className="para1">
                  <b>
                    <FaPlay className="Play" style={{ marginRight: "10px" }} />
                    SQL Basics: The language that's reshaping the tech landscape.
                    <br />
                    <FaPlay className="Play" style={{ marginRight: "10px" }} />
                    MySQL In-Depth: One of the world's most renowned databases.
                    <br />
                    <FaPlay
                      className="Play"
                      style={{ marginRight: "5px" }}
                    />{" "}
                    Database Design & Data Analysis: Equip yourself with these sought-after skills.
                    <br />
                    <FaPlay
                      className="Play"
                      style={{ marginRight: "5px" }}
                    />{" "}
                  Hands-on Tutorials: From creating to modifying databases, we've got you covered.
                    <br />
                    <FaPlay
                      className="Play"
                      style={{ marginRight: "5px" }}
                    />{" "}
Cross-Platform Installation Guides: Be it Windows, Mac, or Linux, we've got your back.
                    <br />
                  </b>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <br />
        <div className="title-holder">
          <Container>
            <Row>
              <Col>
                <h1 className="Abt5">
                  <b>Key Features</b>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="">
                  <img src={certification} className="certification mb-4" />{" "}
                  <b style={{ color: "black" }}>
                    Globally Recognised Certification
                  </b>
                </div>
                <div className="container1">
                  <p className="cp"></p>
                </div>
              </Col>
              <Col md={8}>
                <div className="">
                  <img src={online} className="certification mb-4" />{" "}
                  <b style={{ color: "black" }}>
                    100% Online and Self-paced learning
                  </b>
                </div>
                <div className="container2">
                  <p className="cp"></p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="">
                  <img src={fulltime} className="certification mb-4" />{" "}
                  <b style={{ color: "black" }}>
                    Full lifetime access to all content
                  </b>
                </div>
                <div className="container3">
                  <p className="cp"></p>
                </div>
              </Col>
              <Col md={8}>
                <div className="">
                  <img src={access} className="certification mb-4" />{" "}
                  <b style={{ color: "black" }}>
                    Access to 4 Gamified Practise Platforms
                  </b>
                </div>
                <div className="container4">
                  <p className="cp"></p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="">
                  <img src={support} className="certification mb-4" />{" "}
                  <b style={{ color: "black" }}>Dedicated Forum Support</b>
                </div>
                <div className="container3">
                  <p className="cp"></p>
                </div>
              </Col>
              <Col md={8}>
                <div className="">
                  <img src={refund} className="certification mb-4" />{" "}
                  <b style={{ color: "black" }}>7 Days refund policy</b>
                </div>
                <div className="container4">
                  <p className="cp"></p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <br />
        <br />
        <br />

        <div className="title-holder">
          <Container>
            <Row>
              <Col>
                <h1 className="Abt6">
                  <b>SQL Course Topics You will Learn</b>
                </h1>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={8}>
                <UncontrolledAccordion defaultOpen="0">
                  <AccordionItem className="Accord1 ms-5">
                    <AccordionHeader targetId="1" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      Introduction
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                      <li>Welcome to the course</li>
                      <li>Syllabus Explanation</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord2 ms-5">
                    <AccordionHeader targetId="2" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      Software Installation and Setup
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                      <li>Databases,SQL and MySQL</li>
                      <li>Relational Database Management System</li>
                      <li>MySQL Installation for Windows</li>
                      <li>
                      MySQL Installation for Mac
                      </li>
                      <li>MySQL Installation for Linux</li>
                      <li>MySQL Workbench Overview</li>
                      <li>Create Database</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord3 ms-5">
                    <AccordionHeader targetId="3" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      Data Definition Language
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                      <li>
                      Section Introduction
                      </li>
                      <li>Data Types</li>
                      <li>Primary and Foreign Keys</li>
                      <li>Creating the Coffee Store Database</li>
                      <li>
                      Modifying Tables: Adding and Removing Columns
                      </li>
                      <li>Deleting Tables</li>
                      <li>Truncating Tables</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord4 ms-5">
                    <AccordionHeader targetId="4" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      More on Alter Table
                    </AccordionHeader>
                    <AccordionBody accordionId="4">
                      <li>
                      Creating Our Test Database
                      </li>
                      <li>Add and Remove Primary Key</li>
                      <li>Add and Remove Foreign Key</li>
                      <li>
                      Change Column Name
                      </li>
                      <li>Change Column Data Type</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord4 ms-5">
                    <AccordionHeader targetId="5" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      Data Manipulation Language
                    </AccordionHeader>
                    <AccordionBody accordionId="5">
                      <li>Introduction</li>
                      <li>
                      Inserting Data Into Tables
                      </li>
                      <li>
                      Updating Data in Tables
                      </li>
                      <li>Deleting Data from Tables</li>
                      <li>
                      Completing the Coffee Store Database
                      </li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord4 ms-5">
                    <AccordionHeader targetId="6" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      Selecting from a Table
                    </AccordionHeader>
                    <AccordionBody accordionId="6">
                      <li>Select Statement</li>
                      <li>Using Inequality Symbols</li>
                      <li>
                      Null Values
                      </li>
                      <li>
                      Between
                      </li>
                      <li>Order By</li>
                      <li>Distinct</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord4 ms-5">
                    <AccordionHeader targetId="7" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      Selecting From Multiple Tables
                    </AccordionHeader>
                    <AccordionBody accordionId="7">
                      <li>
                      Section Introduction
                      </li>
                      <li>What Are Joins?</li>
                      <li>
                      Inner Join
                      </li>
                      <li>
                      Left Join
                      </li>
                      <li>Right Join</li>
                      <li>Joining more than Two Tables</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord4 ms-5">
                    <AccordionHeader targetId="8" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      Database Design
                    </AccordionHeader>
                    <AccordionBody accordionId="8">
                      <li>Normalization - What is it?</li>
                      <li>
                      1st Normal Form (1NF)
                      </li>
                      <li>
                      2nd Normal Form (2NF)
                      </li>
                      <li>3rd Normal Form (3NF)</li>
                      <li>Relationships</li>
                      <li>Relationships - One to One</li>
                      <li>Relationships - One to Many</li>
                      <li>Relationships - Many to Many</li>
                      <li>Constraints</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord4 ms-5">
                    <AccordionHeader targetId="9" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      Aggregate Functions
                    </AccordionHeader>
                    <AccordionBody accordionId="9">
                      <li>What are Aggregate Functions</li>
                      <li>
                      Count
                      </li>
                      <li>
                      Sum
                      </li>
                      <li>Min and Max</li>
                      <li>Average</li>
                      <li>Grouping Data</li>
                      <li>Having Clause</li>
                    </AccordionBody>
                  </AccordionItem>
                </UncontrolledAccordion>
              </Col>
            </Row>
          </Container>
        </div>
        <br />
        <br />

        {/* Footer */}
        <div
          className="footer4 b-t spacer"
          style={{ backgroundColor: "black" }}
        >
          <Container>
            <Row>
              <Col lg="3" md="6" className="m-b-30">
                <h5 className="m-b-20" style={{ color: "#20c997" }}>
                  <b>Address</b>
                </h5>
                <p className="context" style={{ color: "white" }}>
                  No:1 Velrampet Main Road, Velrampet, Puducherry-605 004.
                </p>
              </Col>
              <Col lg="3" md="6" className="m-b-30">
                <h5 className="m-b-20" style={{ color: "#20c997" }}>
                  <b>Phone</b>
                </h5>
                <p className="context" style={{ color: "white" }}>
                  Mobile: +91 9942364752
                </p>
              </Col>
              <Col lg="3" md="6" className="m-b-30">
                <h5 className="m-b-20" style={{ color: "#20c997" }}>
                  <b>Email</b>
                </h5>
                <p className="context" style={{ color: "white" }}>
                  Office :{" "}
                  <a href="#" className="link" style={{ color: "white" }}>
                    info@pjoptechnologies.com
                  </a>{" "}
                  <br />
                </p>
              </Col>
              <Col lg="3" md="6">
                <h5 className="m-b-20" style={{ color: "#20c997" }}>
                  <b>Social</b>
                </h5>
                <div className="round-social light">
                  <a href="https://www.facebook.com" className="link">
                    <i className="fa fa-facebook" style={{ color: "blue" }}></i>
                  </a>
                  <a href="https://twitter.com/?lang=en" className="link">
                    <i
                      className="fa fa-twitter"
                      style={{ color: "#1DA1F2" }}
                    ></i>
                  </a>
                  <a href="https://www.linkedin.com/" className="link">
                    <i
                      className="fa brands fa-linkedin"
                      style={{ color: "#007aff" }}
                    ></i>
                  </a>
                  <a href="https://www.youtube.com" className="link">
                    <i
                      className="fa fa-youtube-play"
                      style={{ color: "red" }}
                    ></i>
                  </a>
                  <a href="https://www.instagram.com/" className="link">
                    <i
                      className="fa fa-instagram"
                      style={{ color: "#C13584" }}
                    ></i>
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
                      Copyrights © 2024 pjop technologies. All Rights Reserved.
                    </div>
                    <div className="links ms-auto m-t-10 m-b-10">
                      <a
                        href="#"
                        className="col-md-6 p-10 p-l-0"
                        style={{ color: "white" }}
                      >
                        Developed by Legends Tech Solution
                      </a>
                      {/* <a href="#" className="p-10" style={{ color: "white" }}>
                      Legal Disclaimer
                    </a>
                    <a href="#" className="p-10" style={{ color: "white" }}>
                      Privacy Policy
                    </a> */}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
