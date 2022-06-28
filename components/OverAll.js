import styles from "../styles/OverAll.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const OverAll = () => {
  return (
    <>
      <div id={styles._overall_wrapper}>
        <Container fluid="lg" className="p-0">
          {/* <h1>Strength in Numbers</h1> */}
          <Row className="gx-3 gy-4">
            <Col xs={6} sm={6} lg={3}>
              <div
                className={styles._overall_details}
                id={styles._overall_details_ID}
              >
                <h3>40K+</h3>
                <h6>Learners &amp; counting</h6>
              </div>
            </Col>
            {/* === */}
            <Col xs={6} sm={6} lg={3}>
              <div
                className={styles._overall_details}
                id={styles._overall_details_ID}
              >
                <h3>153+</h3>
                <h6>Total courses</h6>
              </div>
            </Col>
            {/* === */}
            <Col xs={6} sm={6} lg={3}>
              <div
                className={styles._overall_details}
                id={styles._overall_details_ID}
              >
                <h3>54+</h3>
                <h6>Total instructors</h6>
              </div>
            </Col>
            {/* === */}
            <Col xs={6} sm={6} lg={3}>
              <div className={styles._overall_details}>
                <h3>93%</h3>
                <h6>Successful students</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OverAll;
