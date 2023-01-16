/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container,
         Button } from "reactstrap";
// core comments

function PresentationHeader() {
  return (
    <>
      <div className="wrapper">
        <div
          className="page-header section-dark"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/mainbg.png") + ")",
          }}
        >
          <div className="content-center">
            <Container>
              <div className="title-brand">
                <h1 className="presentation-title">ProtonsHub</h1>
                {/* <div className="type">PRO</div> */}
                <div className="fog-low">
                  <img
                    alt="..."
                    src={require("assets/img/sections/fog-low.png")}
                  />
                </div>
                <div className="fog-low right">
                  <img
                    alt="..."
                    src={require("assets/img/sections/fog-low.png")}
                  />
                </div>
              </div>
              <h2 className="presentation-subtitle text-center">
               Redefining Custom Software Development
              </h2>
              <h6>
              “Success never means winning always”
              </h6>
              <h3>
              After continuous learning and project take-ups, we were happy to embrace initial failures. Luckily, the learning scenario ended as we are now experts in each field of software development. We’re proactive action takers to design, consult, and deliver custom software development services with 100% success.
              </h3>
              <div>
                <Button
                    className="btn-round"
                    color="danger"
                    href="https://www.protonshub.com/"
                    target="_blank"
                  >
                    Contact Us
                </Button>
              </div>
            </Container>
          </div>
          {/* <h6 className="category category-absolute">
            Designed and coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=pkpr-presentation-header"
              target="_blank"
            >
              <img
                alt="..."
                className="creative-tim-logo"
                src={require("assets/img/creative-tim-white-slim2.png")}
              />
            </a>
          </h6> */}
        </div>
      </div>
    </>
  );
}

export default PresentationHeader;
