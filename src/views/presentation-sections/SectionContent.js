import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// core components

function SectionContent() {
  return (
    <>

      
      <div id="fadeInAnim">
        <div className="section section-content section-gray">
        <div className="space-top" />
        <h2 className="title"><b>Our Work</b></h2>
          
          <Container>
         
            <Row>
              <Col md="7">
                <div className="image-container">
                  <img
                    alt="..."
                    className="img"
                    src={require("assets/helken/henkelmain.png")}
                  />
                  <img
                    alt="..."
                    className="area-img add-animation"
                    src={require("assets/helken/ad.png")}
                  />
                  <img
                    alt="..."
                    className="info-img add-animation"
                    src={require("assets/helken/ad1.png")}
                  />
                </div>
              </Col>
              <Col md="4">
                <div className="section-description">
                  <h3 className="title"><b>Henkel Case Study An Introduction To Versatile Application</b>
                  </h3>
                  <h6 className="category">Henkel</h6>
                  <h5 className="description">
                  Henkel is a German-based multinational company founded back in 1876 by Fritz Henkel and is one of the strong industries committed to sustainability and competitiveness in its business areas. The company specializes in three business lines namely the Adhesive Technologies, Beauty Care and Laundry and Home Care. Henkel’s been in business for more than 140 years and employs around 53,000 people worldwide. The underlying reason of Henkel’s strong foundation is their ability to always stay ahead of the trends. They don’t fear making constant changes, anticipate trends, and being on track with the digital revolution taking place in the world.
                  </h5>
                  <Button
                      // className="btn-round"
                      href="https://www.protonshub.com/case-studies/henkel-case-study.html"
                      target="_blank"
                      >
                      Project Tour
                      </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div id="fadeInAnim">
        <div className="section section-content section-gray">
          <Container>
         
            <Row>
              <Col md="7">
                <div className="image-container">
                  <img
                    alt="..."
                    className="img"
                    src={require("assets/helken/instago/main1.png")}
                  />
                  <img
                    alt="..."
                    className="area-img add-animation"
                    src={require("assets/helken/instago/instamain.png")}
                  />
                  <img
                    alt="..."
                    className="info-img add-animation"
                    src={require("assets/helken/instago/ad.png")}
                  />
                </div>
              </Col>
              <Col md="4">
                <div className="section-description">
                  <h3 className="title"><b>InstaGo High-End
                      Mobile Application Development Services</b>
                  </h3>
                  <h6 className="category">InstaGo</h6>
                  <h5 className="description">
                  InstaGo Rejuvenates Its CRM System With Protonshub’s High-End Mobile Application Development Services<br></br>
                  A superb product of Instant Retails Limited to redefine the future of Vending Machines in India. The company incorporated with the idea of implementing Smart Work that reduces Hard Work and that’s Innovation to keep everyone focused. Focus on maintaining portable refreshment hub via entirely automated machines.
                  </h5>
                  <Button
                      // className="btn-round"
                      href="https://www.protonshub.com/case-studies/instago-crm-system.html"
                      target="_blank"
                      >
                      Project Tour
                      </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SectionContent;
