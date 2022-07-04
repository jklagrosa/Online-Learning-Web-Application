import styles from "../../../styles/ENROLLED.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import Copyright from "../../../components/Copyright";

const EnrolledCourse = () => {
  return (
    <>
      <Nav />
      <div id={styles._enrolled_course_wrapper}>
        <Container fluid="lg" className="p-0">
          <Row
            className="gx-3 gy-4 mx-auto"
            id={styles._enrolled_header_section}
          >
            <Col xs={12} md={7}>
              <div className={styles._enrolled_video_section}>
                <iframe title="iFrame Example"></iframe>
              </div>
            </Col>
            {/* ========================= */}
            <Col xs={12} md={5}></Col>
          </Row>
        </Container>
      </div>
      <Footer />
      <Copyright />
    </>
  );
};

export default EnrolledCourse;
