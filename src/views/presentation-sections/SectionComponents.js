import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionComponents() {
  return (
    <>
      <div className="section section-components section-dark">
        <Row>
          <Col lg="6" md="12">
            <div className="image-container">
              <img
                alt="..."
                className="components-macbook"
                src={require("assets/img/presentation-page/laptop-basic.png")}
              />
              <img
                alt="..."
                className="table-img"
                src={require("assets/img/presentation-page/table.jpg")}
              />
              <img
                alt="..."
                className="share-btn-img"
                src={require("assets/img/presentation-page/share-btn.png")}
              />
              <img
                alt="..."
                className="coloured-card-btn-img"
                src={require("assets/img/presentation-page/coloured-card-with-btn.png")}
              />
              <img
                alt="..."
                className="coloured-card-img"
                src={require("assets/img/presentation-page/coloured-card.png")}
              />
              <img
                alt="..."
                className="social-img"
                src={require("assets/img/presentation-page/social-row.png")}
              />
              <img
                alt="..."
                className="pin-btn-img"
                src={require("assets/img/presentation-page/pin-btn.png")}
              />
            </div>
          </Col>
          <Col className="ml-auto mr-auto" lg="4" md="10">
            <Container className="basic-container">
              <h2 className="title">Finish Line For All Your Technology Needs</h2>
              <h6 className="category">“Be a Game Changer as the Globe is already full of Players.”

              </h6>
              <h5 className="description">
              classy website, a trendy design, a mobile application to step up your business or setting up a profusing market place with a world class E-Commerce platform, Protonshub is your finish point, Cross it to believe it.
              </h5>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SectionComponents;
