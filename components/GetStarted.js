import styles from "../styles/GetStarted.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const GetStarted = () => {
  return (
    <>
      <div id={styles._gs_wrapper}>
        <Container fluid="lg" className="p-0">
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default GetStarted;
