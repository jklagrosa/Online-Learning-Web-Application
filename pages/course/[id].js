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
import { BsSuitHeartFill, BsCartFill } from "react-icons/bs";

import { useRouter } from "next/router";
import Dbconnection from "../../db/conn";
import Course from "../../models/course";

import axios from "axios";
import { BASE_URL, headersOpts } from "../../config/others";

import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export async function getStaticPaths() {
  await Dbconnection();
  const get_id = await Course.find({});
  const paths = get_id.map((x) => {
    return {
      params: { id: `${x._id}` },
    };
  });

  console.log(paths);

  if (!get_id) {
    return {
      paths: [],
      fallback: false,
    };
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  await Dbconnection();
  const { params } = context;

  const find_course = await Course.findOne({ _id: `${params.id}` });
  if (!find_course) {
    return {
      props: {
        data: null,
      },
    };
  }

  if (find_course) {
    // IF USE IS ALREADY ENROLLED IN THIS COURSE
    // REDIRECT TO WATCH
    if (find_course.is_enrolled) {
      return {
        props: {
          isEnrolled: true,
          isEnrolled_ID: JSON.stringify(find_course._id),
        },
      };
    }
    // END
    // ====================================
    else {
      return {
        props: {
          data: JSON.stringify(find_course),
        },
      };
    }
  }
}

const CourseID = ({ data, isEnrolled, isEnrolled_ID }) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const parsed_course = data ? JSON.parse(data) : null;

  // IF USER IS ALREADY ENROLLED IN THIS COURSE
  // REDIRECT TO WATCH
  const parsed_isEnrolled = isEnrolled ? JSON.parse(isEnrolled) : false;
  const parsed_isEnrolled_ID = isEnrolled_ID ? JSON.parse(isEnrolled_ID) : null;

  useEffect(() => {
    if (parsed_isEnrolled) {
      console.log("YEHEY! TRUE");
      router.push({
        pathname: "/course/enrolled/[id]",
        query: { id: parsed_isEnrolled_ID },
      });
    }
  }, []);

  // END

  // ENROLL NOW HANDLE
  const handleEnrollNow = async (cid) => {
    setLoading(true);

    try {
      const response = await axios.post(
        `${BASE_URL}/api/enroll`,
        { cid },
        headersOpts
      );
      if (!response.data.success) {
        return toast.error("Please try again later.", {
          position: "top-right",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      if (response && response.data && response.data.success) {
        router.push({
          pathname: "/course/enrolled/[id]",
          query: { id: response.data.data._id },
        });
      }

      return response.data;
    } catch (error) {
      toast.error("Please try again later.", {
        position: "top-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setLoading(false);
    }
  };
  // END

  return (
    <>
      <Nav />
      <div id={styles._course_wrapper}>
        <Container fluid="lg" className="p-0">
          {/* ====================== */}

          {/* IF COURSE IS AVAILABLE */}
          {parsed_course !== null && (
            <>
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
                        {parsed_course.title}
                      </Breadcrumb.Item>
                    </Breadcrumb>

                    {/* ================================= */}

                    <div className={styles._course_header_details}>
                      <Badge className={styles._course_tag}>
                        {parsed_course.tag}
                      </Badge>{" "}
                      <h1>{parsed_course.title}</h1>
                      <div className={styles._course_contents}>
                        <span>
                          <FaChalkboardTeacher
                            className={styles._course_contents_ICONS}
                          />{" "}
                          {parsed_course.inst}
                        </span>

                        <div
                          className={styles._course_contents_ICONS_DIVIDER}
                        ></div>

                        {/*  */}
                        <span>
                          <AiFillStar
                            className={styles._course_contents_ICONS}
                          />{" "}
                          {parsed_course.star}/5
                        </span>

                        <div
                          className={styles._course_contents_ICONS_DIVIDER}
                        ></div>

                        {/*  */}
                        <span>
                          <MdPlayLesson
                            className={styles._course_contents_ICONS}
                          />{" "}
                          {parsed_course.lessons} Lessons
                        </span>

                        <div
                          className={styles._course_contents_ICONS_DIVIDER}
                        ></div>
                        {/*  */}
                        <span>
                          <BsPersonFill
                            className={styles._course_contents_ICONS}
                          />{" "}
                          {parsed_course.enrolled_students} Enrolled Students
                        </span>

                        <h3>₱{parsed_course.price}</h3>
                      </div>
                    </div>

                    {/* COURSE OVERVIEW */}
                    <hr className={styles._course_divider} />

                    <div className={styles._course_contents_overview}>
                      <h2>Course Overview</h2>
                      <p>{parsed_course.desc}</p>
                      {/* WHAT YOU`LL LEARN IN THIS COURSE */}
                      <h3>What you&apos;ll learn in this course:</h3>

                      <ul>
                        {parsed_course.learning.map((learn, index) => (
                          <li key={index}>
                            <AiOutlineCheck
                              className={styles._course_learn_checks}
                            />{" "}
                            {learn}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* COURSE CONTENTS */}

                    <div className={styles._course_videos}>
                      <h2 className={styles._course_videos_h2}>
                        Course Contents
                      </h2>
                      <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header
                            className={styles._course_videos_accordion_header}
                          >
                            Lessons
                          </Accordion.Header>
                          <Accordion.Body>
                            {parsed_course.vids.map((vid, index) => (
                              <>
                                <abbr
                                  title="Enroll now to unlock this course."
                                  style={{ all: "unset" }}
                                  key={index}
                                >
                                  <div className={styles._course_videos_BODY}>
                                    <p>
                                      <BsPlayBtnFill
                                        className={
                                          styles._course_videos_BODY_ICON
                                        }
                                      />
                                      {`Lecture ${index + 1}`}{" "}
                                      <FaLock
                                        className={
                                          styles._course_videos_BODY_ICON_LOCK
                                        }
                                      />
                                    </p>
                                  </div>
                                </abbr>
                              </>
                            ))}
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </Col>
                  {/* ================================================ */}
                  <Col xs={12} md={4}>
                    <div className={styles._course_SMALL_COL_contents}>
                      <img src={`/img/${parsed_course.course_img}`} />

                      {/* WISH N CART */}
                      <div className={styles._course_SMALL_COL_wish_n_cart}>
                        <abbr title="Your Wishlist" style={{ all: "unset" }}>
                          <BsSuitHeartFill
                            className={styles._course_SMALL_COL_wish_ICONS}
                          />
                        </abbr>
                        {/* ================= */}

                        <abbr title="Your Cart" style={{ all: "unset" }}>
                          <BsCartFill
                            className={styles._course_SMALL_COL_cart_ICONS}
                          />
                        </abbr>
                      </div>

                      {/* END */}

                      <div className={styles._course_SMALL_COL_details}>
                        <span className={styles._course_SMALL_COL_KEY}>
                          <FaSignal className={styles._course_SMALL_COL_ICON} />{" "}
                          Course Level:
                        </span>

                        <span className={styles._course_SMALL_COL_VALUE}>
                          {parsed_course.course_level}
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
                          {parsed_course.course_duration} minutes
                        </span>
                        <br />
                        {/*  */}
                        <span className={styles._course_SMALL_COL_KEY}>
                          <MdPlayLesson
                            className={styles._course_SMALL_COL_ICON}
                          />{" "}
                          Lessons:
                        </span>

                        <span className={styles._course_SMALL_COL_VALUE}>
                          {parsed_course.lessons}
                        </span>
                        <br />
                        {/*  */}
                        <span className={styles._course_SMALL_COL_KEY}>
                          <MdQuiz className={styles._course_SMALL_COL_ICON} />{" "}
                          Quizzes:
                        </span>

                        <span className={styles._course_SMALL_COL_VALUE}>
                          {parsed_course.course_quiz}
                        </span>
                        <br />
                        {/*  */}
                        <span className={styles._course_SMALL_COL_KEY}>
                          <FaPercentage
                            className={styles._course_SMALL_COL_ICON}
                          />{" "}
                          Pass Percentage:
                        </span>

                        <span className={styles._course_SMALL_COL_VALUE}>
                          {parsed_course.course_percent}
                        </span>
                        <br />
                        {/*  */}
                        <span className={styles._course_SMALL_COL_KEY}>
                          <FaCertificate
                            className={styles._course_SMALL_COL_ICON}
                          />{" "}
                          Certificate:
                        </span>

                        <span className={styles._course_SMALL_COL_VALUE}>
                          {parsed_course.course_cert}
                        </span>
                        <br />
                        {/*  */}
                        <span className={styles._course_SMALL_COL_KEY}>
                          <FaLanguage
                            className={styles._course_SMALL_COL_ICON}
                          />{" "}
                          Language:
                        </span>

                        <span className={styles._course_SMALL_COL_VALUE}>
                          {parsed_course.course_lang}
                        </span>
                        <br />
                        {/*  */}

                        {/* LOADING IS FALSE */}
                        {!loading && (
                          <button
                            onClick={() => handleEnrollNow(parsed_course._id)}
                          >
                            Enroll Now{" "}
                            <AiFillCaretRight
                              className={styles._course_SMALL_COL_BTN_ICON}
                            />
                          </button>
                        )}
                        {/* END - LOADING IS FALSE */}

                        {/* ================================================== */}

                        {/* LOADING IS FALSE */}
                        {loading && (
                          <button id={styles._loading_btn_course}>
                            Please wait...
                          </button>
                        )}
                        {/* END - LOADING IS FALSE */}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </>
          )}
          {/* END */}

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
