import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components

function SectionExamples() {
  return (
    <>
      <div className="section section-examples section-dark" id="examples">
        <Container>
          <Row>
            <div className="title text-center">
              <h1 className="title"><b>Technologies We Use</b></h1>
              <h3 className="description">
                Database
              </h3>
            </div>
          </Row>
          <Row>
            <Col md="3">
              <div className="details-text">MongoDB</div>
              <Card className="card-image card-hover-effect">
                <Link to="#" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/technology/mongodb.png")}
                  />
                </Link>
              </Card>
            </Col>
            <Col>
              
              <div className="details-text">MySQL</div>
              <Card className="card-image">
                <Link to="#" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/technology/mysql.png")}
                  />
                </Link>
              </Card>
            </Col>  
            <Col>
              <div className="details-text">Reids SQL</div>
              <Card className="card-image">
                <Link to="#" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/technology/reids.png")}
                  />
                </Link>
              </Card>
            </Col>
            <Col>  
              <div className="details-text">Postgres SQL</div>
              <Card className="card-image">
                <Link to="#" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/technology/postgres.png")}
                  />
                </Link>
              </Card>
            </Col>
            <Col>
              <div className="details-text">FireBase</div>
              <Card className="card-image">
                <Link to="#" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/technology/firebase.png")}
                  />
                </Link>
              </Card>
            </Col>


          </Row>
        </Container>
      </div>

      <div className="section section-examples section-dark" id="examples">
        <Container>
          <Row>
            <div className="title text-center">
              <h3 className="description">
                Mobile
              </h3>
            </div>
          </Row>
          <Row>
            <Col md="3">
              <div className="details-text">React Native</div>
              <Card className="card-image card-hover-effect">
                <Link to="#" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/technology/reactnative.png")}
                  />
                </Link>
              </Card>
            </Col>
            <Col md ="3">
              
              <div className="details-text">Flutter</div>
              <Card className="card-image">
                <Link to="#" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/technology/flutter.png")}
                  />
                </Link>
              </Card>
            </Col>  
            <Col>
              <div className="details-text">ios</div>
              <Card className="card-image">
                <Link to="#" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/technology/ios.png")}
                  />
                </Link>
              </Card>
            </Col>
            <Col>
              <div className="details-text">Android</div>
              <Card className="card-image">
                <Link to="#" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/technology/android.png")}
                  />
                </Link>
              </Card>
            </Col>
            <Col>  
              <div className="details-text">Ionic</div>
              <Card className="card-image">
                <Link to="#" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/technology/ionic.png")}
                  />
                </Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>


      <div className="section section-examples section-dark" id="examples">
        <Container>
          <Row>
            <div className="title text-center">
              <h3 className="description">
                Frontend
              </h3>
            </div>
          </Row>
          <Row>
            <Col md="3">
              <div className="details-text">Angular Js</div>
              <Card className="card-image card-hover-effect">
                <Link to="#" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/technology/angularjs.png")}
                  />
                </Link>
              </Card>
            </Col>
            <Col md ="3">
              <div className="details-text">HTML 5</div>
              <Card className="card-image">
                <Link to="#" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/technology/html5.png")}
                  />
                </Link>
              </Card>
            </Col>
            <Col>  
              <div className="details-text">Type Js</div>
              <Card className="card-image">
                <Link to="#" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/technology/typejs.png")}
                  />
                </Link>
              </Card>
            </Col>
            <Col>
              
              <div className="details-text">React Js</div>
              <Card className="card-image">
                <Link to="#" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/technology/reactjs.png")}
                  />
                </Link>
              </Card>
            </Col>  
            <Col>
              <div className="details-text">Vue Js</div>
              <Card className="card-image">
                <Link to="#" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/technology/vuejs.png")}
                  />
                </Link>
              </Card>
            </Col>


          </Row>
        </Container>
      </div>


      <div className="section section-examples section-dark" id="examples">
        <Container>
          <Row>
            <div className="title text-center">
              <h3 className="description">
                Backend
              </h3>
            </div>
          </Row>
          <Row>
            <Col >
              <div className="details-text">Node Js</div>
              <Card className="card-image card-hover-effect">
                <Link to="#" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/technology/nodejs.png")}
                  />
                </Link>
              </Card>
            </Col>
            <Col>  
              <div className="details-text">Java </div>
              <Card className="card-image">
                <Link to="#" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/technology/java.png")}
                  />
                </Link>
              </Card>
            </Col>
            <Col md="3">
              <div className="details-text">.Net</div>
              <Card className="card-image">
                <Link to="#" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/technology/.net.png")}
                  />
                </Link>
              </Card>
            </Col>

            <Col> 
              <div className="details-text">Ruby & Rails</div>
              <Card className="card-image">
                <Link to="#" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/technology/ror.png")}
                  />
                </Link>
              </Card>
            </Col>  
            <Col>
              <div className="details-text">Python</div>
              <Card className="card-image">
                <Link to="#" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/technology/python.png")}
                  />
                </Link>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>



    </>
  );
}

export default SectionExamples;
