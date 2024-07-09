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

export default function PHP() {
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
                    <b>PHP for Beginners</b>
                  </h1>
                  <h2 className="Abt1">
                    <b>What you'll learn</b>
                  </h2>
                  <p className="para">
                    <br />
                    <b>
                      Learn how to create a dynamic website using the most
                      popular website programming language Build a working CMS
                      in PHP and MySQL from scratch Learn how to secure your
                      code Learn how to write reusable, more maintainable code
                      using programming standards Learn how to structure your
                      code using object-oriented programming techniques Learn
                      the theory but then put it into practice in a CMS project
                      Style your site using Bootstrap How to integrate
                      third-party code into your site How to store data in a
                      relational database and use this from PHP code Learn all
                      aspects of a basic web application in PHP: login, CRUD
                      operations, sending emails, uploading files, Ajax.
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
                  <b>What is PHP</b>
                </h1>
                <p className="para1">
                  <br />
                  <b>
                    PHP is the most popular website programming language in the
                    world. The combination of PHP<br /> and MySQL is used extensively
                    to create web applications, and developers with these key
                    skills<br /> are in high demand. This course is going to teach you
                    how to create web applications in PHP<br /> using the MySQL
                    database.
                  </b>
                </p>
                <h3 className="Abt4">
                  <b>What will you learn in this course?</b>
                </h3>
                <p className="para1">
                  <b>
                    <FaPlay className="Play" style={{ marginRight: "10px" }} />
                    You will learn  how to create a dynamic website using the most popular website programming language in the world, PHP.
                    <br />
                    <FaPlay className="Play" style={{ marginRight: "10px" }} />
                    Your instructor will teach you the PHP programming language, and take you through the steps to build a working CMS in PHP and MySQL from scratch.
                    <br />
                    <FaPlay
                      className="Play"
                      style={{ marginRight: "5px" }}
                    />{" "}
                  Along the way, you will learn how to secure your code, how to write reusable, more maintainable code using programming standards, and how to structure your code using object-oriented programming techniques.
                    <br />
                    <FaPlay
                      className="Play"
                      style={{ marginRight: "5px" }}
                    />{" "}
                  You will also learn how to style your site using Bootstrap, how to integrate third-party code into your site, how to store data in a relational database and use this from PHP code, and more.
                    <br />
                    <FaPlay
                      className="Play"
                      style={{ marginRight: "5px" }}
                    />{" "}
                  The course is very thorough, and goes through everything from installing a web server on your own computer, and editor to writing the code to create your web app.  Towards the end of the course you will even learn how to upload the code and make your code live on the internet (very useful if you already have your own Hosting account).  This is not necessary to complete the course though.
                    <br />
                    <FaPlay
                      className="Play"
                      style={{ marginRight: "5px" }}
                    />{" "}
                    Learn at your own pace - take your time if required
                    <br />
                    <FaPlay
                      className="Play"
                      style={{ marginRight: "5px" }}
                    />{" "}
                 In summary, the course will teach you the core skills you need to know to become a productive PHP programmer.
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
                  <b>PHP Course Topics You will Learn</b>
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
                      <li>How to get the most out of the course</li>
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
                      <li>Install XAMPP on Windows</li>
                      <li>Install XAMPP on MAC OS X</li>
                      <li>Install XAMPP on Ubuntu Linux</li>
                      <li>Addendum: Visual Studio Code now the recommended editor</li>
                      <li>Install Atom on Windows</li>
                      <li>Install Atom on MAC OS X</li>
                      <li>Install Atom on Ubuntu Linux</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord3 ms-5">
                    <AccordionHeader targetId="3" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      Variables
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                      <li>Variables in PHP: What They are, How to Create Them, and How to Name Them</li>
                      <li>Basic Variable Types: Strings and Numbers</li>
                      <li>Basic Variable Types: Boolean and Null</li>
                      <li>Perform Operations on Variables: Operators</li>
                      <li>Strings using single or double quotes and variable interpolation</li>
                      <li>Variables and Operators</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord4 ms-5">
                    <AccordionHeader targetId="4" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      Arrays
                    </AccordionHeader>
                    <AccordionBody accordionId="4">
                      <li>Assign Manual Array Indexes and Create Associative Arrays</li>
                      <li>Create and Access Multidimensional Arrays</li>
                      <li>Process Each Element of an Array: foreach Loops</li>
                      <li>Process the value and index of each array element using a foreach loop</li>
                      <li>Arrays</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord4 ms-5">
                    <AccordionHeader targetId="5" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      Control structures
                    </AccordionHeader>
                    <AccordionBody accordionId="5">
                      <li>Run Code Conditionally: the if Construct</li>
                      <li>Compare One Value to another: Comparison Operators</li>
                      <li>Run Code Multiple Times Based on a Condition: While Loops</li>
                      <li>Run Code a Specific Number Of Times: For Loops</li>
                      <li>Perform Different Actions Based on Different Conditions: The Switch Statement</li>
                      <li>Control structures and comparison operator</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord4 ms-5">
                    <AccordionHeader targetId="6" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      Merging PHP and HTML
                    </AccordionHeader>
                    <AccordionBody accordionId="6">
                      <li>Create Dynamic Content: Mixing HTML and PHP</li>
                      <li>Use PHP Control Structures Mixed with HTML</li>
                      <li>Make HTML More Readable: Use Whitespace and Comments</li>
                      <li>Make PHP Easier To Maintain: Use Comments and Coding Standards</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord4 ms-5">
                    <AccordionHeader targetId="7" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      An Introduction to Databases
                    </AccordionHeader>
                    <AccordionBody accordionId="7">
                      <li>Access the Database Server Using phpMyAdmin And Create a Database</li>
                      <li>Use Tables to Store Structured Data in a Database</li>
                      <li>Select Some Data from The Database: An Introduction to Sql</li>
                      <li>Using Indexes: Make Queries Faster and Order the Result Set</li>
                      <li>Connect to the Database from PHP</li>
                      <li>Query the Database from PHP And Get the Results</li>
                      <li>Combine PHP and HTML to Show a Formatted List of Articles</li>
                      <li>Databases</li>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className="Accord4 ms-5">
                    <AccordionHeader targetId="8" className="">
                      <FaPlay
                        className="Play"
                        style={{ marginRight: "10px" }}
                      />
                      Multiple Pages in PHP
                    </AccordionHeader>
                    <AccordionBody accordionId="8">
                      <li>Add a New Page to Show a Single Article</li>
                      <li>Passing Data in the URL: Send the Article ID Using the Query String</li>
                      <li>Don't Repeat Yourself: Extract Repeated Code to a Separate File</li>
                      <li>Organise and Secure Access to the Included Files</li>
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
