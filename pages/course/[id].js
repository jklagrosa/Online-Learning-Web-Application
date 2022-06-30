import styles from "../../styles/COURSE.module.scss";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Copyright from "../../components/Copyright";

const CourseID = () => {
  return (
    <>
      <Nav />
      <div id={styles._course_wrapper}>
        <Container fluid="lg" className="p-0">
          {/* ====================== */}
          <div className={styles._course_header_section}>
            <Row className="gx-3 gy-4 mx-auto">
              <Col>
                <Breadcrumb className={styles._breadcrumb_course_links}>
                  <Breadcrumb.Item
                    className={styles._course_links}
                    style={{ textDecoration: "underline" }}
                  >
                    Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item className={styles._course_links} active>
                    Course
                  </Breadcrumb.Item>
                  <Breadcrumb.Item className={styles._course_links} active>
                    Take A Course For Web Development
                  </Breadcrumb.Item>
                </Breadcrumb>

                {/* ================================= */}

                <div className={styles._course_header_details}>
                  <h1>Take A Course For Web Development</h1>
                </div>
              </Col>
            </Row>
          </div>

          {/* ====================== */}
          <Row className="g-0 mx-auto" id={styles._course_row_wrapper}>
            <Col></Col>
          </Row>
        </Container>
      </div>
      <Footer />
      <Copyright />
    </>
  );
};

export default CourseID;
