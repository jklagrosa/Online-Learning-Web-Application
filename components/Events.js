import styles from "../styles/Events.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Achievement = () => {
  return (
    <>
      <div id={styles._events_wrapper}>
        <Container fluid="lg" className="p-0">
          <h1>Our Upcoming Events</h1>
          <Row className="gx-3 gy-4">
            <Col xs={12} md={6}>
              <div className={styles._events_right_col}></div>
            </Col>
            <Col xs={12} md={6}>
              <Row className="gx-3 gy-4">
                <Col xs={12}>
                  <div className={styles._events_left_col}></div>
                </Col>
                <Col xs={12}>
                  <div className={styles._events_left_col}></div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Achievement;
