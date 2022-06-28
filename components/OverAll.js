import styles from "../styles/OverAll.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const OverAll = () => {
  return (
    <>
      <div id={styles._overall_wrapper}>
        <Container fluid="lg" className="p-0">
          <Row className="gx-3 gy-4">
            <Col xs={12} md={6} lg={4}>
              <div className={styles._overall_details}>
                Aliqua magna est commodo ullamco id. Esse dolore reprehenderit
                aliqua aliquip reprehenderit est proident excepteur quis fugiat
                exercitation dolor. Et eu enim deserunt occaecat eiusmod
                pariatur veniam amet non adipisicing cupidatat.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OverAll;
