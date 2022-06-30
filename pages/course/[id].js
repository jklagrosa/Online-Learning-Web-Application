import styles from "../../styles/COURSE.module.scss";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Badge,
  Accordion,
} from "react-bootstrap";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Copyright from "../../components/Copyright";

import { AiFillStar, AiFillCaretRight } from "react-icons/ai";
import { BsPersonFill, BsPlayBtnFill } from "react-icons/bs";
import { FaChalkboardTeacher, FaLock } from "react-icons/fa";
import { MdPlayLesson } from "react-icons/md";

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
                  <Badge className={styles._course_tag}>Web Development</Badge>{" "}
                  <h1>Take A Course For Web Development</h1>
                  <div className={styles._course_contents}>
                    <span>
                      <FaChalkboardTeacher
                        className={styles._course_contents_ICONS}
                      />{" "}
                      David Sopas
                    </span>
                    {/*  */}
                    <span>
                      <AiFillStar className={styles._course_contents_ICONS} />{" "}
                      4.2/5
                    </span>
                    {/*  */}
                    <span>
                      <MdPlayLesson className={styles._course_contents_ICONS} />{" "}
                      3 Lessons
                    </span>
                    {/*  */}
                    <span>
                      <BsPersonFill className={styles._course_contents_ICONS} />{" "}
                      25 Enrolled Students
                    </span>

                    <h3>₱300</h3>
                  </div>
                </div>

                {/* COURSE OVERVIEW */}
                <hr className={styles._course_divider} />

                <div className={styles._course_contents_overview}>
                  <h2>Course Overview</h2>
                  <p>
                    Youll learn how to build a Kubernetes cluster, and how to
                    deploy and manage applications on it. Along the way, youll
                    learn the internals of how Kubernetes works, as well as
                    best-practices such as managing applications declaratively.
                    By the end of the course youll have all the tools you need
                    to get started with Kubernetes and take your career to the
                    next level.
                  </p>
                  {/* WHAT YOU`LL LEARN IN THIS COURSE */}
                  <h3>What you&apos;ll learn in this course:</h3>

                  <ul>
                    <li>Feel confident using Adobe InDesign</li>
                    <li>All the useful shortcuts</li>
                    <li>Be able to create Flyers, Brochures, Advertisements</li>
                    <li>How to work with Images &amp; Text</li>
                    <li>Work with color &amp;Gradients &amp; Grids</li>
                  </ul>
                </div>

                {/* COURSE CONTENTS */}

                <div className={styles._course_videos}>
                  <h2 className={styles._course_videos_h2}>Course Contents</h2>
                  <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header
                        className={styles._course_videos_accordion_header}
                      >
                        Lessons
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className={styles._course_videos_BODY}>
                          <p>
                            <BsPlayBtnFill
                              className={styles._course_videos_BODY_ICON}
                            />
                            Intreoduction Copy{" "}
                            <FaLock
                              className={styles._course_videos_BODY_ICON_LOCK}
                            />
                          </p>
                        </div>
                        {/*  */}
                        <div className={styles._course_videos_BODY}>
                          <p>
                            <BsPlayBtnFill
                              className={styles._course_videos_BODY_ICON}
                            />
                            Intreoduction Copy{" "}
                            <FaLock
                              className={styles._course_videos_BODY_ICON_LOCK}
                            />
                          </p>
                        </div>
                        <div className={styles._course_videos_BODY}>
                          <p>
                            <BsPlayBtnFill
                              className={styles._course_videos_BODY_ICON}
                            />
                            Intreoduction Copy{" "}
                            <FaLock
                              className={styles._course_videos_BODY_ICON_LOCK}
                            />
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
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
