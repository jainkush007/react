import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, Button } from "reactstrap";

// core components

function SectionOverview() {
  return (
    <>
      <div className="section section-overview">
        <Container fluid>
          <Row>
            <Col className="offset-md-2 text-center" md="8">
              <div className="space-top" />
              <h2 className="title"><b>Software Development Services</b></h2>
              <h6>Choose From Our Galaxy Of Services To Rise And Shine</h6>
            </Col>
            <Container>
              <div className="space-top" />
              <Row>
                <Col sm="3">
                  <Card data-background="color" data-color="green">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <img
                          alt="..."
                          className="creative-tim-logo"
                          src={require("assets/imgoverview/web.png")}
                        />
                      </div>
                      <CardTitle tag="h4"><b>Web Development</b></CardTitle>
                      <h5 className="card-description">
                        We are Experts in web development and applications. We create path breaking unmatched digital presence for you, using state of the art web development.
                      </h5>
                      <Button
                      className="btn-round"
                      color="dddcnger"
                      href="#"
                      target="_blank"
                      >
                      Read More
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card data-background="color" data-color="blue">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <img
                          alt="..."
                          className="creative-tim-logo"
                          src={require("assets/imgoverview/mobiledev.png")}
                        />
                      </div>
                      <CardTitle tag="h4"><b>Mobile App Developement</b></CardTitle>
                      <h5 className="card-description">
                       Capitalizing on the mobile technology we are highly capable of delivering world-class intuitive and user friendly Mobile Apps in Android, iOS and Cross platform technology.

                      </h5>
                      <Button
                      className="btn-round"
                      color="white"
                      href="#"
                      target="_blank"
                      >
                      Read More
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card data-background="color" data-color="purple">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <img
                          alt="..."
                          className="creative-tim-logo"
                          src={require("assets/imgoverview/uiux.png")}
                        />
                      </div>
                      <CardTitle tag="h4"><b>UI/UX Design</b></CardTitle>
                      <h5 className="card-description">
                        Protonshub's UI/UX design and development services are focused on creating high performing user interfaces that makes every digital interaction a delightful.
                      </h5>
                      <Button
                      className="btn-round"
                      color="dangedr"
                      href="#"
                      target="_blank"
                      >
                      Read More
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card data-background="color" data-color="green">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <img
                          alt="..."
                          className="creative-tim-logo"
                          src={require("assets/imgoverview/qa.png")}
                        />
                      </div>
                      <CardTitle tag="h4"><b>QA</b></CardTitle>
                      <h5 className="card-description">
                        Our Software Automation Testing Services help clients get digital transformation journey with quality assurance, quality engineering, and QA software testing consultancy services.
                      </h5>
                      <Button
                      className="btn-round"
                      color="white"
                      href="#"
                      target="_blank"
                      >
                      Read More
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                </Col>
                <Col sm="3">
                  <Card data-background="color" data-color="purple">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <img
                          alt="..."
                          className="creative-tim-logo"
                          src={require("assets/imgoverview/devops.png")}
                        />
                      </div>
                      <CardTitle tag="h4"><b>Dev Ops</b></CardTitle>
                      <h5 className="card-description">
                       With our innovative Devops process we are on a mission to eliminate the need of Manual Intervention and deliver the fastest and safest digital transformation.
                      </h5>
                      <Button
                      className="btn-round"
                      color="dadenger"
                      href="#"
                      target="_blank"
                      >
                      Read More
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card data-background="color" data-color="blue">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <img
                          alt="..."
                          className="creative-tim-logo"
                          src={require("assets/imgoverview/devloper.png")}
                        />
                      </div>
                      <CardTitle tag="h4"><b>Hire Dedicated Developers</b></CardTitle>
                      <h5 className="card-description">
                        We are a pool of one of the best technical brains in varied technologies and Practices. Hire a dedicated team of developers for your upcoming projects and get the ramp.
                      </h5>
                      <Button
                      className="btn-round"
                      color="White"
                      href="#"
                      target="_blank"
                      >
                      Read More
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionOverview;
