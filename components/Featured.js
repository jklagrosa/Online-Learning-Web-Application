import styles from "../styles/Featured.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Featured = () => {
  return (
    <>
      <div id={styles._featured_wrapper}>
        <Container fluid="lg" className="p-0">
          <h1>Our Featured Courses</h1>
          <Row className="gx-3 gy-4 mx-auto">
            <Col xs={12} md={6} lg={4}>
              <div className={styles._featured_course_card}>
                Qui do consequat deserunt sunt irure nostrud ullamco labore.
                Exercitation ad commodo anim nostrud eu dolor ea officia
                consequat eu cillum qui veniam esse.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Featured;
