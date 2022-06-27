import styles from "../styles/Footer.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div id={styles._footer_wrapper}>
        <Container fluid="lg" className="p-0">
          <Row className="gx-3 gy-4">
            <Col>
                
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
