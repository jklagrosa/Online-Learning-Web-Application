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

import { AiFillStar, AiFillCaretRight, AiOutlineCheck } from "react-icons/ai";
import { BsPersonFill, BsPlayBtnFill } from "react-icons/bs";
import {
  FaChalkboardTeacher,
  FaLock,
  FaSignal,
  FaPercentage,
  FaCertificate,
  FaLanguage,
} from "react-icons/fa";
import { MdPlayLesson, MdAccessTimeFilled, MdQuiz } from "react-icons/md";

const CourseID = () => {
  return (
    <>
      <Nav />
      <div id={styles._course_wrapper}>
        <Container fluid="lg" className="p-0">
          {/* ====================== */}
          <div className={styles._course_header_section}>
            <Row className="gx-3 gy-5 mx-auto">
              <Col xs={12} md={8}>
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

                    <div
                      className={styles._course_contents_ICONS_DIVIDER}
                    ></div>

                    {/*  */}
                    <span>
                      <AiFillStar className={styles._course_contents_ICONS} />{" "}
                      4.2/5
                    </span>

                    <div
                      className={styles._course_contents_ICONS_DIVIDER}
                    ></div>

                    {/*  */}
                    <span>
                      <MdPlayLesson className={styles._course_contents_ICONS} />{" "}
                      3 Lessons
                    </span>

                    <div
                      className={styles._course_contents_ICONS_DIVIDER}
                    ></div>
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
                    <li>
                      <AiOutlineCheck className={styles._course_learn_checks} />{" "}
                      Feel confident using Adobe InDesign
                    </li>
                    <li>
                      <AiOutlineCheck className={styles._course_learn_checks} />{" "}
                      All the useful shortcuts
                    </li>
                    <li>
                      <AiOutlineCheck className={styles._course_learn_checks} />{" "}
                      Be able to create Flyers, Brochures, Advertisements
                    </li>
                    <li>
                      <AiOutlineCheck className={styles._course_learn_checks} />{" "}
                      How to work with Images &amp; Text
                    </li>
                    <li>
                      <AiOutlineCheck className={styles._course_learn_checks} />{" "}
                      Work with color &amp;Gradients &amp; Grids
                    </li>
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
              {/* ================================================ */}
              <Col xs={12} md={4}>
                <div className={styles._course_SMALL_COL_contents}>
                  <img src="/gs/1.png" />
                  <div className={styles._course_SMALL_COL_details}>
                    <span className={styles._course_SMALL_COL_KEY}>
                      <FaSignal className={styles._course_SMALL_COL_ICON} />{" "}
                      Course Level:
                    </span>

                    <span className={styles._course_SMALL_COL_VALUE}>
                      Beginner
                    </span>
                    <br />
                    {/*  */}
                    <span className={styles._course_SMALL_COL_KEY}>
                      <MdAccessTimeFilled
                        className={styles._course_SMALL_COL_ICON}
                      />{" "}
                      Course Duration:
                    </span>

                    <span className={styles._course_SMALL_COL_VALUE}>
                      3 days
                    </span>
                    <br />
                    {/*  */}
                    <span className={styles._course_SMALL_COL_KEY}>
                      <MdPlayLesson className={styles._course_SMALL_COL_ICON} />{" "}
                      Lessons:
                    </span>

                    <span className={styles._course_SMALL_COL_VALUE}>5</span>
                    <br />
                    {/*  */}
                    <span className={styles._course_SMALL_COL_KEY}>
                      <MdQuiz className={styles._course_SMALL_COL_ICON} />{" "}
                      Quizzes:
                    </span>

                    <span className={styles._course_SMALL_COL_VALUE}>2</span>
                    <br />
                    {/*  */}
                    <span className={styles._course_SMALL_COL_KEY}>
                      <FaPercentage className={styles._course_SMALL_COL_ICON} />{" "}
                      Pass Percentage:
                    </span>

                    <span className={styles._course_SMALL_COL_VALUE}>83</span>
                    <br />
                    {/*  */}
                    <span className={styles._course_SMALL_COL_KEY}>
                      <FaCertificate
                        className={styles._course_SMALL_COL_ICON}
                      />{" "}
                      Certificate:
                    </span>

                    <span className={styles._course_SMALL_COL_VALUE}>Yes</span>
                    <br />
                    {/*  */}
                    <span className={styles._course_SMALL_COL_KEY}>
                      <FaLanguage className={styles._course_SMALL_COL_ICON} />{" "}
                      Language:
                    </span>

                    <span className={styles._course_SMALL_COL_VALUE}>
                      English
                    </span>
                    <br />
                    {/*  */}

                    <button>
                      Enroll Now{" "}
                      <AiFillCaretRight
                        className={styles._course_SMALL_COL_BTN_ICON}
                      />
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          {/* ====================== */}
          {/* <Row className="g-0 mx-auto" id={styles._course_row_wrapper}>
            <Col></Col>
          </Row> */}
        </Container>
      </div>
      <Footer />
      <Copyright />
    </>
  );
};

export default CourseID;
