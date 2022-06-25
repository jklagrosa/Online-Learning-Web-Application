import styles from "../styles/GetStarted.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const GetStarted = () => {
  return (
    <>
      <div id={styles._gs_wrapper}>
        <Container fluid="lg" className="p-0">
          <Row className="gx-3 gy-5">
            <Col xs={6} md={3}>
                <div className={styles._gs_boxes}>
          
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default GetStarted;
