import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function AboutUsHeader() {
  return (
    <>
      <div
        className="page-header page-header-small"
        style={{
          backgroundImage:
            "url(" + require("assets/img/sections/gerrit-vermeulen.jpg") + ")",
        }}
      >
        <div className="filter filter-danger" />
        <div className="content-center">
          <Container>
            <h1>
              Hello, <br />
              Team ProtonsHub
            </h1>
            <h3>"A team that is built with a predictive emotion to fuel constant refinement and relentless growth"</h3>
          </Container>
        </div>
      </div>
    </>
  );
}

export default AboutUsHeader;
