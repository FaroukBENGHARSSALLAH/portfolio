
import React from "react";

import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Form,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col
} from "reactstrap";

import { Link } from "react-router-dom";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Header from "components/Headers/Header.js";
import Footer from "components/Footers/Footer.js";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <Header />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..." style={{ width: "60%" }} 
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/photo.jpg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                `Farouk` `BEN GHARSSALLAH` <br />
              </h4>
              <h6 className="description">Intermediere Java/J2EE Software Enginner @ Levio Conseils Inc.</h6><br />
			  <h6 className="description">OCP8 Certified Java Developer</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <p>
                Passionate about R&D projects engineering
              </p>
              <br />
			   <p>
                  Quod
                </a> Founder & CTO. Quod is a plateform which provides data about worldwide stock data.
              </p>
              <br />
			    <p>
                  Kontu
                </a> Founder & CTO. Kontu is a basic financial account management tool.
              </p>
              <br />
			    <p>
                  Fiscus
                </a> Founder & CTO. Fiscus is a multi category ETFs comparaison tool.
              </p>
              <br />
			  <p>
                  Vidulum
                </a> Founder & CTO. Vidulum is an options managment simulation tool.
              </p>
              <br />
			  <p>
                  Olrhain
                </a> Founder & CTO. Olrhain provides ETFs realtime checking API grouped by country.
              </p>
			  <br />
            </Col>
          </Row>
		    <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">My Expertise</h2>
                <h5 className="description">
                  I have 6 years as a Java/J2EE developer enginner certified as OCP8. I master Spring, Angular, React, Databases, JPA
				  Hibernate, Docker, Kubernetes.
                </h5>
                <br />
			  </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="fa fa-leaf" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Backend</h4>
                    <p className="description">
                      JavaEE7, SpringBoot, SpringMVC, SpringWebFlux, Reactive streams,  
					  JSP, Servlet, XHTML2, JSF2, EJB, RMI, Sockets, SoapWS, RestWS, RestAPI, JWT, OAuth 2.0, JUnit, Jenkins, SpringSecurity, Facebook API, 
					  shell, OpenSsl, Vncserver, Webdav.
                    </p>
                    <Button className="btn-link" color="info" target="_blank" href="https://github.com/FaroukBENGHARSSALLAH/spring-webflux-angular-reactjs"  >
                      live example
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="fa fa-window-restore" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Frontend</h4>
                    <p>
                      Typescript, AngularJS, Angular, React, JQuery, Javacript, CSS3, HTML5, PrimeFaces5.
                    </p>
                    <Button className="btn-link" color="info" target="_blank" href="https://github.com/FaroukBENGHARSSALLAH/react-spring"  >
                      live example
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="fa fa-database" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">DataBase</h4>
                    <p>
                       Hibernate, JPA, Oracle, Postgress, Mysql, Mongodb, PL/SQL,  Hibernate, JPA.
                    </p>
                    <Button className="btn-link" color="info" target="_blank" href="https://github.com/FaroukBENGHARSSALLAH/java-persistence" >
                      live example
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="fa fa-ship" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Containsers</h4>
                    <p>
                      JBoss, Tomcat, Docker, Kubernetes, Apache.
                    </p>
                    <Button className="btn-link" color="info" target="_blank" href="https://github.com/FaroukBENGHARSSALLAH/docker-kubernetes" >
                      live example
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
          <br />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;
