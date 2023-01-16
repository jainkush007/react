import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
// core components

function SectionSummary() {
  return (
    <>
      <div className="section section-dark section-summary">
        <Container>
          <h1 className="info-title"><b>Process We Follow </b></h1>
          <p> . </p>
          <p> . </p>
          <p> . </p>
          <Row>
            <Col lg="6" md="12">
              <div className="image-container">
              <img
                  alt="..."
                  className="components-macbook"
                  src={require("assets/imgi/img1.png")}
                />
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <h5><b>1</b></h5>
                </div>
                <div className="description">
                  <h4 className="info-title"><b>Interact And Communicate</b></h4>
                  <h5>
                  The project starts right with the concept in understanding the business Requirements. Unearth the vital information regarding Vision, business ambitions build a strong Foundation. At this point we create your brand Identity, create strategy, and set project Milestones.
                  </h5>
                </div>
              </div>
            </Col>

          </Row>
          <Row>
            <Col lg="6" md="12">
              <div className="image-container">
              <img
                  alt="..."
                  className="components-macbook"
                  src={require("assets/imgi/img2.png")}
                />
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <h5><b>2</b></h5>
                </div>
                <div className="description">
                  <h4 className="info-title"><b>Plan</b></h4>
                  <h5>
                  Following the preliminary Requirement analysis and Discussions, we will outline your project, create milestones, and agree on priorities. By how we have defined a clear strategic pathway that resonates with your current vision and goals.

                  </h5>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="6" md="12">
              <div className="image-container">
              <img
                  alt="..."
                  className="components-macbook"
                  src={require("assets/imgi/img3.png")}
                />
              </div>
            </Col>

            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <h5><b>3</b></h5>
                </div>
                <div className="description">
                  <h4 className="info-title"><b>Web Design And App Development
                      </b></h4>
                  <h5>
                  Upon Successful completion of Project Plan, Business outcomes and Design the final scope of work is developed and with the proper alignment with your existing team the Project development process proceeds.
                  </h5>
                </div>
              </div>
            </Col>

          </Row>
          <Row>
            <Col lg="6" md="12">
              <div className="image-container">
              <img
                  alt="..."
                  className="components-macbook"
                  src={require("assets/imgi/img4.png")}
                />
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <h5><b>4</b></h5>
                </div>
                <div className="description">
                  <h4 className="info-title"><b>Test And Debug</b></h4>
                  <h5>
                  To ensure that optimum project delivery, rigorous performance and quality testing is performed Here review and testing takes place, which ensures the quality of your project. This is the most valuable step in the web design process, because your reputation is our reputation just before you deploy the website to a server after the development.
                  </h5>
                </div>
              </div>
            </Col>          
          </Row>
          <Row>
            <Col lg="6" md="12">
              <div className="image-container">
              <img
                  alt="..."
                  className="components-macbook"
                  src={require("assets/imgi/img5.png")}
                />
              </div>
            </Col>     
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <h5><b>5</b></h5>
                </div>
                <div className="description">
                  <h4 className="info-title"><b>Launch</b></h4>
                  <h5>
                  The time when the days hard work pays off, the launch of custom web design project. followed by final approval, and user acceptance your envisioned project is launched.
                  </h5>
                </div>
              </div>
            </Col>
       

          </Row>
          <Row>
            <Col lg="6" md="12">
              <div className="image-container">
              <img
                  alt="..."
                  className="components-macbook"
                  src={require("assets/imgi/img6.png")}
                />
              </div>
            </Col>   

            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <h5><b>6</b></h5>
                </div>
                <div className="description">
                  <h4 className="info-title"><b>Deployment
                      </b></h4>
                  <h5>
                  UAT and deployment is the crucial phase of software development lifecycle, and we take it very carefully to ensure perfect and with precision application deployment.
                  </h5>
                </div>
              </div>
            </Col>

          </Row>
          <Row>
            <Col lg="6" md="12">
              <div className="image-container">
                <img
                    alt="..."
                    className="components-macbook"
                    src={require("assets/imgi/img7.png")}
                  />
              </div>
            </Col>  
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <h5><b>7</b></h5>
                </div>
                <div className="description">
                  <h4 className="info-title"><b>Support & Maintenance
                      </b></h4>
                  <h5>
                  There is a lot in the relationship after the successful deployment of the project. We take the complete ownership of maintenance, periodic updates, adding new features and functionalities. The idea behind is the culture of providing a world class user experience with unmatched support and value to develop a everlasting relationship.
                  </h5>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionSummary;
