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

export default function CSS() {
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
            <Link to="/videos">
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
                    <Link to={"/training"}>
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
                    <Link to={"/gallery"}>
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
                    <b>The Complete Guide to CSS</b>
                  </h1>
                  <h2 className="Abt1">
                    <b>What you'll learn</b>
                  </h2>
                  <p className="para">
                    <br />
                    <b>
                      Learn why CSS is amazing, not something to be afraid of!
                      Use basic as well as advanced CSS features Flexbox, grid,
                      animations, transitions, fonts, media queries and much
                      more - it's all included! Understand the concepts and
                      theory behind CSS and certain CSS features Build beautiful
                      websites which don't just contain great content but also
                      look good.
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
                  <b>CSS Overview</b>
                </h1>
                <p className="para1">
                  <br />
                  <b>
                    CSS ( Cascading Style Sheets) is a "programming language"
                    you use to turn your HTML pages
                    <br /> into real beautiful websites. This course covers it
                    all - we start at the very basics and gradually
                    <br /> dive in deeper and deeper. And we do this by showing
                    both practical examples as well as the
                    <br /> theory behind it. Getting started with CSS might look
                    easy but there actually is a lot of depth
                    <br /> to CSS - hence this course provides different
                    "Tracks" or "Entry points" to exactly meet your
                    <br /> demands and reflect you current knowledge level. Of
                    course this course offers the theory and<br /> practical examples
                    - we'll build an entire real course project throughout the
                    course - but there<br /> also are multiple assignments, quizzes
                    and challenges for you to practice individual concepts<br />
                    taught throughout the course.
                  </b>
                </p>
                <h3 className="Abt4">
                  <b>About CSS Course :</b>
                </h3>
                <p className="para1">
                  <br />
                  <b>
                  Here's what's inside the course in detail - this is all also applied to the mentioned course project :
                    <br />
                    <FaPlay className="Play" style={{ marginRight: "10px" }} />
                    The basics about selectors, combinators and how you set up styling rules in general
                    <br />
                    <FaPlay className="Play" style={{ marginRight: "10px" }} />
                    Properties, values and decalarations
                    <br />
                    <FaPlay
                      className="Play"
                      style={{ marginRight: "5px" }}
                    />{" "}
How specifity and inheritance work and why it's called "Cascading" Style Sheets
<br />
                    <FaPlay
                      className="Play"
                      style={{ marginRight: "5px" }}
                    />{" "}
                    Important theoretical concepts like the "Box Model"
                    <br />
                    <FaPlay
                      className="Play"
                      style={{ marginRight: "5px" }}
                    />{" "}
                    How the default position of elements can be changed
                    <br />
                    <FaPlay
                      className="Play"
                      style={{ marginRight: "5px" }}
                    />{" "}
Styling backgrounds (e.g. gradients) and images
<br />
                    <FaPlay
                      className="Play"
                      style={{ marginRight: "5px" }}
                    />{" "}
                    Which units and dimensions you typically use in CSS (px, rem, % and more)
                    <br />
                    <FaPlay className="Play" style={{ marginRight: "10px" }} />
                    How JavaScript and CSS interact
                    <br />
                    <FaPlay className="Play" style={{ marginRight: "10px" }} />
                    Responsive design and what "Mobile First" means
                    <br />
                    <FaPlay
                      className="Play"
                      style={{ marginRight: "5px" }}
                    />{" "}
Styling forms and form inputs
<br />
                    <FaPlay
                      className="Play"
                      style={{ marginRight: "5px" }}
                    />{" "}
Working with text, fonts and text styles
<br />
                    <FaPlay
                      className="Play"
                      style={{ marginRight: "5px" }}
                    />{" "}
Flexbox! How it works and how to use it
<br />
                    <FaPlay
                      className="Play"
                      style={{ marginRight: "5px" }}
                    />{" "}
                    Using the CSS Grid and how it differs from Flexbox
                    <br />
                    <FaPlay
                      className="Play"
                      style={{ marginRight: "5px" }}
                    />{" "}
Transforming and animating HTML elements with the help of CSS
<br />
                    <FaPlay
                      className="Play"
                      style={{ marginRight: "5px" }}
                    />{" "}
Writing future-proof CSS with features like CSS variables or best-practice class names
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
                  <b>CSS Course Topics You will Learn</b>
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
                      Getting Started
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                      <li>Introduction</li>
                      <li>What is CSS</li>
                      <li>CSS History,Present & Future</li>
                      <li>Course Outline</li>
                      <li>Course Prerequisites</li>
                      <li>How to get the most out of this Course</li>
                      <li>Recommended Tools</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord2 ms-5">
                    <AccordionHeader targetId="2" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      Diving into the Basics of CSS
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                      <li>Module Introduction</li>
                      <li>Understanding the Course Project Setup</li>
                      <li>Adding CSS to our Project with Inline Styles</li>
                      <li>Understanding the style Tag & Creating a .css File</li>
                      <li>Applying Additional Styles & Importing Google Fonts</li>
                      <li>Selectors</li>
                      <li>Understanding the "Cascading" Style & Specificity​</li>
                      <li>Understanding Inheritance</li>
                      <li>Adding Combinators</li>
                      <li>Summarizing Properties & Selectors</li>
                      <li>Selectors & Combinators</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord3 ms-5">
                    <AccordionHeader targetId="3" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      Diving Deeper into CSS
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                      <li>Module Introduction</li>
                      <li>Introducing the CSS Box Model</li>
                      <li>Understanding the Box Model</li>
                      <li>Understanding Margin Collapsing and Removing Default Margins</li>
                      <li>Deep Dive on "Margin Collapsing"</li>
                      <li>Theory Time - Working with Shorthand Properties</li>
                      <li>Applying Shorthands in Practice</li>
                      <li>Diving Into the Height & Width Properties</li>
                      <li>Understanding Box Sizing</li>
                      <li>Adding the Header to our Project</li>
                      <li>Understanding the Display Property</li>
                      <li>display: none vs visibility: hidden</li>
                      <li>HTML Refresher: Block-level vs Inline Elements</li>
                      <li>Applying the Display Property & Styling our Navigation Bar</li>
                      <li>Understanding an Unexpected "inline-block" Behaviour</li>
                      <li>Styling Anchor Tags</li>
                      <li>Adding Pseudo Classes</li>
                      <li>Working with "font-weight" & "border"</li>
                      <li>Adding a Background Image to our Project</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord4 ms-5">
                    <AccordionHeader targetId="4" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      More on Selectors & CSS Features
                    </AccordionHeader>
                    <AccordionBody accordionId="4">
                      <li>Module Introduction</li>
                      <li>Using Multiple CSS Classes & Combined Selectors</li>
                      <li>Classes or IDs?</li>
                      <li>(Not) using !important</li>
                      <li>Selecting the Opposite with :not()</li>
                      <li>CSS & Browser Support</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord4 ms-5">
                    <AccordionHeader targetId="5" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      Practicing the Basics
                    </AccordionHeader>
                    <AccordionBody accordionId="5">
                      <li>Adding Style to our Plans</li>
                      <li>Styling the Badge with "border-radius"</li>
                      <li>Styling our List</li>
                      <li>Improving our Action Button</li>
                      <li>Understanding Outlines</li>
                      <li>Styling the Headline of the Core Features Section</li>
                      <li>Preparing the Content of the Key Feature Area</li>
                      <li>Adding the Footer</li>
                      <li>Adding the Packages Page</li>
                      <li>Styling the Links</li>
                      <li>Styling our Package Boxes</li>
                      <li>Fixing the Hover Effect</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord4 ms-5">
                    <AccordionHeader targetId="6" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      Positioning Elements with CSS
                    </AccordionHeader>
                    <AccordionBody accordionId="6">
                      <li>Understanding Positioning</li>
                      <li>Creating a Fixed Navigation Bar</li>
                      <li>Using "position" to Add a Background Image</li>
                      <li>Styling & Positioning our Badge with "absolute" and "relative"</li>
                      <li>Introducing "sticky" Positioning</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord4 ms-5">
                    <AccordionHeader targetId="7" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      Understanding Background Images & Images
                    </AccordionHeader>
                    <AccordionBody accordionId="7">
                      <li>Understanding "background-size"</li>
                      <li>Working with "background-position"</li>
                      <li>Styling Images</li>
                      <li>Understanding Linear Gradients</li>
                      <li>Stacking Multiple Backgrounds</li>
                      <li>Adding & Styling SVGs - The Basics</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord4 ms-5">
                    <AccordionHeader targetId="8" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      Sizes and Units
                    </AccordionHeader>
                    <AccordionBody accordionId="8">
                      <li>An Overview of Available Sizes & Units</li>
                      <li>Fixing the Height 100% Issue</li>
                      <li>Using "min-width/height" & "max-width/height"</li>
                      <li>Working with "rem" & "em"</li>
                      <li>Understanding the Viewport Units "vw" &"vh"</li>
                      <li>Windows, Viewport Units & Scrollbars</li>
                      <li>Using "auto" to Center Elements</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord4 ms-5">
                    <AccordionHeader targetId="9" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      Working with Javascript & CSS
                    </AccordionHeader>
                    <AccordionBody accordionId="9">
                      <li>Selecting & Manipulating Styles with JavaScript</li>
                      <li>Adding Styles with JavaScript</li>
                      <li>Opening and Closing the Hamburger Menu</li>
                      <li>Manipulating Element Classes</li>
                      <li>Understanding Property Notations</li>
                      <li>SQL</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord4 ms-5">
                    <AccordionHeader targetId="10" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      Making our Website Responsive
                    </AccordionHeader>
                    <AccordionBody accordionId="10">
                      <li>Comparing the Viewport Metatag (HTML) and Media Queries (CSS)</li>
                      <li>Designing Websites "Mobile First"</li>
                      <li>Adding our First Media Queries</li>
                      <li>Finding the Right Breaking Points</li>
                      <li>Creating a Responsive Design with Media Queries</li>
                      <li>Improving the Customers Page</li>
                      <li>Improving the Packages Page</li>
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
