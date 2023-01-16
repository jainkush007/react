import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import AboutUsHeader from "components/Headers/AboutUsHeader.js";
import FooterAboutUs from "components/Footers/FooterAboutUs.js";

function AboutUs() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("about-us");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
    };
  });
  return (
    <>
      <ColorNavbar />
      <AboutUsHeader />
      <div className="main">
        <div className="section">
          <Container>
            <b>
            <h3>Protonshub is globally recognized as an Innovative IT company with a huge talent pool that are committed to create a remarkable difference in the Strategy, consulting and infrastructure solutions to Startups, SMEs and Enterprises with our class apart skill sets and ideas.
            </h3>
            </b>

            <h3 className="title-uppercase">Our Culture</h3>
            <p>
              We like the freedom to express and innovate but we like the collaboration with communication
            </p>
            <p>
              We are not afraid to initiate and innovate, in fact we face truth with Humility
            </p>
            <p>
              We create an environment of upliftment and Support at workplace
            </p>
            <p>
              We keep Attitude and Effort before Perfection
            </p>

            <h3 className="title-uppercase">
            <i icon="fa-solid fa-fort" />
              Things That Reflect Our Culture
            </h3>
            <ul>
              <li>Transparent Performance Management System</li>
              <li>Access to continues Education and Training.</li>
              <li>Monthly team lunches on the house</li>
              <li>Safety comes first (Work from home).</li>
            </ul>
            <h2 className="text-center creators">Meet Our Visionary Leadership</h2>
            <p>
              
              We have incepted with an aspiration to be a company that has transpired hurdles in to milestones, challenges in to opportunities and create a everlasting relationship with a vision of mutual growth and development. We work on the ideology that our success is directly proportional to success of our customers we can achieve more when we make other achieve more.

            </p>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                        />
                        <CardTitle tag="h4">Tushar Pal</CardTitle>
                      </a>
                    </div>
                  </CardBody>
                  <h3>Tushar Pal</h3>
                  <h5>President, Protonshub</h5>
                  <CardFooter className="text-center">

                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      // href="https://www.linkedin.com/in/tushar-p-325b5869/"
                      onClick={()=> window.open("https://www.linkedin.com/in/tushar-p-325b5869/", "_blank")}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="twitter"
                      onClick={()=> window.open("https://twitter.com/tpal94", "_blank")}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/joe-gardner-2.jpg")}
                        />
                        <CardTitle tag="h4">Rakshit Khandelwal</CardTitle>
                      </a>
                    </div>
                  </CardBody>
                  <h3>Rakshit Khandelwal</h3>
                  <h5>CEO, Protonshub</h5>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      // href="#pablo"
                      onClick={()=> window.open("https://www.linkedin.com/in/rakshit-khandelwal-1505/", "_blank")}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="twitter"
                      // href="#pablo"
                      onClick={()=> window.open("https://twitter.com/RAKSHIT1505", "_blank")}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                        />
                        <CardTitle tag="h4">Sachin Mishra</CardTitle>
                      </a>
                    </div>
                  </CardBody>
                  <h3>Sachin Mishra</h3>
                  <h5>COO, Protonshub</h5>
                  <CardFooter className="text-center">
                  <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      // href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <h3 className="more-info">Need more information?</h3>
            <Row className="coloured-cards">
              <Col md="4" sm="6">
                <div className="card-big-shadow">
                  <Card
                    className="card-just-text"
                    data-background="color"
                    data-color="blue"
                    data-radius="none"
                  >
                    <CardBody>
                      <h6 className="card-category">Best cards</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Blue Card
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        What all of these have in common is that they're pulling
                        information out of the app or the service and making it
                        relevant to the moment.
                      </p>
                    </CardBody>
                  </Card>
                  {/* end card */}
                </div>
              </Col>
              <Col md="4" sm="6">
                <div className="card-big-shadow">
                  <Card
                    className="card-just-text"
                    data-background="color"
                    data-color="green"
                    data-radius="none"
                  >
                    <CardBody>
                      <h6 className="card-category">Best cards</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Green Card
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        What all of these have in common is that they're pulling
                        information out of the app or the service and making it
                        relevant to the moment.
                      </p>
                    </CardBody>
                  </Card>
                  {/* end card */}
                </div>
              </Col>
              <Col md="4" sm="6">
                <div className="card-big-shadow">
                  <Card
                    className="card-just-text"
                    data-background="color"
                    data-color="yellow"
                    data-radius="none"
                  >
                    <CardBody>
                      <h6 className="card-category">Best cards</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Yellow Card
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        What all of these have in common is that they're pulling
                        information out of the app or the service and making it
                        relevant to the moment.
                      </p>
                    </CardBody>
                  </Card>
                  {/* end card */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <FooterAboutUs />
    </>
  );
}

export default AboutUs;
