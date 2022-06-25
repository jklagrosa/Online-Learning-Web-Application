import styles from "../styles/GetStarted.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const GetStarted = () => {
  return (
    <>
      <div id={styles._gs_wrapper}>
        <Container fluid="lg" className="p-0">
          <h1>Explore and Complete a Guided Project</h1>

          <Row className="gx-3 gy-4">
            <Col xs={12} sm={6} md={4}>
              <div className={styles._gs_boxes}>
                <img src="/gs/1.png" />
                <h3>Introduction to Web Development</h3>
                <h4>Longina Phil</h4>
              </div>
            </Col>
            {/* ======= */}
            <Col xs={12} sm={6} md={4}>
              <div className={styles._gs_boxes}>
                <img src="/gs/2.png" />
                <h3>Introduction to Graphic Design</h3>
                <h4>Aleid Dagda</h4>
              </div>
            </Col>
            {/* ======= */}
            <Col xs={12} sm={6} md={4}>
              <div className={styles._gs_boxes}>
                <img src="/gs/3.jpg" />
                <h3>Introduction to Programming</h3>
                <h4>David Sopas</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default GetStarted;
