import styles from "../styles/Hero.module.scss";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";

const Hero = () => {
  const options = [
    { value: "Burns Bay Road" },
    { value: "Downing Street" },
    { value: "Wall Street" },
  ];
  return (
    <>
      <div id={styles._hero_wrapper}>
        <Container fluid="lg" className="p-0">
          <div id={styles._hero_details_wrapper}>
            <h1>Education is the biggest luxury</h1>
            <p>
              Educating all understudies to accomplish today and tomorrow in a
              worldwide network and economy
            </p>
            <div className={styles._auto_complete_wrapper}>
              <InputGroup className={styles._auto_complete_input_wrapper}>
                <FormControl
                  placeholder="Search Courses"
                  aria-label="Search Courses"
                  className={styles._auto_complete_input}
                />
                <Button variant="primary">Button</Button>
              </InputGroup>
            </div>
            <div className={styles._auto_complete_suggestions}>
              <p className={styles._auto_complete_suggestions_title}>
                Course Tags:
              </p>
              <Row className="g-3">
                <Col xs={6} md={3}>
                  <span className={styles._auto_complete_suggestions_tags}>
                    Programming
                  </span>
                </Col>
                <Col xs={6} md={3}>
                  <span className={styles._auto_complete_suggestions_tags}>
                    Programming
                  </span>
                </Col>
                <Col xs={6} md={3}>
                  <span className={styles._auto_complete_suggestions_tags}>
                    Programming
                  </span>
                </Col>
                <Col xs={6} md={3}>
                  <span className={styles._auto_complete_suggestions_tags}>
                    Programming
                  </span>
                </Col>
                <Col xs={6} md={3}>
                  <span className={styles._auto_complete_suggestions_tags}>
                    Programming
                  </span>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
