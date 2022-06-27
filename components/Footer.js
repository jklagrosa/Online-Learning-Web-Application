import styles from "../styles/Footer.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div id={styles._footer_wrapper}>
        <Container fluid="lg" className="p-0">
          <Row className="gx-3 gy-4">
            <Col xs={12} md={6} lg={4}>
              <div className={styles._footer_details}>
                <h3>
                  <span>EDU</span>KASYON
                </h3>
                <p>
                  If you want to try this web application, you can login as a
                  demo user. Click the login button to be redirected to the
                  login page and then click the{" "}
                  <code>
                    <q>Login as demo user</q>
                  </code>{" "}
                  button.
                </p>
              </div>
            </Col>
            {/* === */}
            <Col xs={12} md={6} lg={4}>
              <div className={styles._footer_details_CONTACT}>
                <h6>Contact the dev.</h6>
                <a
                  href="https://www.linkedin.com/in/jklagrosa/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <br></br>
                <a
                  href="https://github.com/jklagrosa"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <br></br>
                <a
                  href="mailto:jklagrosa.dev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Gmail
                </a>
                <br></br>
              </div>
            </Col>
            {/* === */}
            <Col xs={12} md={6} lg={4}>
              <div className={styles._footer_details}>
                <h6>Tech Used</h6>
                <a>HTML5</a>
                <br></br>
                <a>CSS3</a>
                <br></br>
                <a>Sass</a>
                <br></br>
                <a>Bootstrap</a>
                <br></br>
                <a>JavaScript</a>
                <br></br>
                <a>React JS</a>
                <br></br>
                <a>Next JS</a>
                <br></br>
                <a>Redux Toolkit</a>
                <br></br>
                <a>MongoDB</a>
                <br></br>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
