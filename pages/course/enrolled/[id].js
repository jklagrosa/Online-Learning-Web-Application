import styles from "../../../styles/ENROLLED.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import Copyright from "../../../components/Copyright";
import { MdPlayLesson } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

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
            <Col xs={12} md={8}>
              <div className={styles._enrolled_video_section}>
                <iframe
                  src="https://www.youtube.com/embed/bJd4SJV0d5w"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>

                <div className={styles._enrolled_video_section_DETAILS}>
                  <h2>Intro to Web Development</h2>

                  <div className={styles._enrolled_video_section_ICONS}>
                    <span>
                      <FaChalkboardTeacher
                        className={styles._enrolled_video_section_SPAN_ICONS}
                      />{" "}
                      David Sopas
                    </span>
                    {/*  */}
                    <span>
                      <AiFillStar
                        className={styles._enrolled_video_section_SPAN_ICONS}
                      />{" "}
                      4.2/5
                    </span>
                    {/*  */}
                    <span>
                      <MdPlayLesson
                        className={styles._enrolled_video_section_SPAN_ICONS}
                      />{" "}
                      3 Lessons
                    </span>
                    {/*  */}
                    <span>
                      <BsPersonFill
                        className={styles._enrolled_video_section_SPAN_ICONS}
                      />{" "}
                      25 Enrolled students
                    </span>
                    {/*  */}
                  </div>
                </div>
              </div>
            </Col>
            {/* ========================= */}
            <Col xs={12} md={4}>
              <div className={styles._enrolled_course_contents}>
                <h5>Lessons</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
      <Copyright />
    </>
  );
};

export default EnrolledCourse;
