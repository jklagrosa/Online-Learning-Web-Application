import styles from "../styles/Featured.module.scss";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { AiFillStar, AiFillCaretRight } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdPlayLesson } from "react-icons/md";
import { BsSuitHeartFill, BsCartFill } from "react-icons/bs";
import { IoMdPricetag } from "react-icons/io";

import { useRouter } from "next/router";

// GET THE DATA FROM STORE
import { useSelector } from "react-redux";
import { useState } from "react";

const Featured = () => {
  // USER STATE STATUS
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  // END
  const [loading, setLoading] = useState(false);

  const { courses } = useSelector((state) => state?.course);
  const router = useRouter();

  const handleSeeMore = (id) => {
    setLoading(true);

    router.push({
      pathname: "/course/[id]",
      query: { id },
    });
  };

  // IF USER IS ENROLLED TO THE COURSE
  const handleWatchCourse = (id) => {
    setLoading(true);

    router.push({
      pathname: "/course/enrolled/[id]",
      query: { id },
    });
  };
  // END

  return (
    <>
      <div id={styles._featured_wrapper}>
        <Container fluid="lg" className="p-0">
          {/* IF COURSES ARE AVAILABLE */}
          {courses?.length > 0 && (
            <>
              <h1>Our Featured Courses</h1>
              <Row className="gx-3 gy-4 mx-auto">
                {courses?.map((course) => (
                  <>
                    <Col xs={12} md={6} lg={4} key={course._id}>
                      <Card className={styles._featured_course_card}>
                        <Card.Img
                          variant="top"
                          src={`/img/${course.course_img}`}
                        />
                        <Card.Body
                          className={styles._featured_course_card_BODY}
                          onClick={() => {
                            if (course.is_enrolled) {
                              handleWatchCourse(course._id);
                            } else {
                              handleSeeMore(course._id);
                            }
                          }}
                        >
                          <abbr title="Course title" style={{ all: "unset" }}>
                            <Card.Title className={styles._H1_TAG}>
                              {course.title}
                            </Card.Title>
                          </abbr>

                          <abbr title="Instructor" style={{ all: "unset" }}>
                            <Card.Text className={styles._P_TAG}>
                              <FaChalkboardTeacher
                                className={styles._featured_card_ICONS}
                              />{" "}
                              {course.inst}
                            </Card.Text>
                          </abbr>
                          {/*  */}
                          <abbr
                            title={`${course.star} out of 5 stars`}
                            style={{ all: "unset" }}
                          >
                            <Card.Text className={styles._P_TAG}>
                              <AiFillStar
                                className={styles._featured_card_ICONS}
                              />{" "}
                              {course.star}/5
                            </Card.Text>
                          </abbr>
                          {/*  */}
                          <abbr
                            title={`${course.lessons} Lessons`}
                            style={{ all: "unset" }}
                          >
                            <Card.Text className={styles._P_TAG}>
                              <MdPlayLesson
                                className={styles._featured_card_ICONS}
                              />{" "}
                              {course.lessons} Lessons
                            </Card.Text>
                          </abbr>
                          {/*  */}
                          <abbr
                            title={`${course.enrolled_students} Enrolled students`}
                            style={{ all: "unset" }}
                          >
                            <Card.Text className={styles._P_TAG}>
                              <BsPersonFill
                                className={styles._featured_card_ICONS}
                              />{" "}
                              {course.enrolled_students} Students
                            </Card.Text>
                          </abbr>
                          {/*  */}
                          <abbr title="Price" style={{ all: "unset" }}>
                            <Card.Text className={styles._P_TAG}>
                              <IoMdPricetag
                                className={styles._featured_card_ICONS}
                              />{" "}
                              ₱{course.price}
                            </Card.Text>
                          </abbr>
                          {/*  */}
                        </Card.Body>
                        <Card.Footer
                          className={styles._featured_course_card_FOOTER}
                        >
                          {/* if (course.is_enrolled) {
                              handleWatchCourse(course._id);
                            } 

                            else {
                              handleSeeMore(course._id);
                            } */}
                          {/* IF USER IS ENROLLED */}
                          {course.is_enrolled && !loading && (
                            <button
                              onClick={() => handleWatchCourse(course._id)}
                            >
                              Watch Now{" "}
                              <AiFillCaretRight
                                className={
                                  styles._featured_course_card_FOOTER_ICON
                                }
                              />
                            </button>
                          )}
                          {/* END */}
                          {/* ================================ */}
                          {!course.is_enrolled && !loading && (
                            <button onClick={() => handleSeeMore(course._id)}>
                              Enroll Now{" "}
                              <AiFillCaretRight
                                className={
                                  styles._featured_course_card_FOOTER_ICON
                                }
                              />
                            </button>
                          )}

                          {/* BTN LOADING */}
                          {loading && (
                            <button id={styles._btn_is_clicked}>
                              Please wait...
                            </button>
                          )}

                          {/* END */}

                          {/* <abbr title="Course price" style={{ all: "unset" }}>
             <span>₱300</span>
           </abbr> */}

                          {/* WISH & CART */}
                          <div>
                            {isLoggedIn !== null && (
                              <>
                                {/* ========================================================== */}
                                {/* ============IF USER IS LOGGED IN====== */}
                                {/* ========================================================== */}
                                <abbr
                                  title="Your Wishlist"
                                  style={{ all: "unset" }}
                                >
                                  <BsSuitHeartFill
                                    className={
                                      styles._featured_course_WISH_ICON
                                    }
                                  />
                                </abbr>
                                {/* ======================================================= */}
                                <abbr
                                  title="Your Cart"
                                  style={{ all: "unset" }}
                                >
                                  <BsCartFill
                                    className={
                                      styles._featured_course_CART_ICON
                                    }
                                  />
                                </abbr>
                                {/* ========================================================== */}
                                {/* ============END=============== */}
                                {/* ========================================================== */}
                              </>
                            )}

                            {/* ############################################################################## */}

                            {isLoggedIn === null && (
                              <>
                                {/* ========================================================== */}
                                {/* ============IF USER IS NOT LOGGED IN====== */}
                                {/* ========================================================== */}
                                <abbr
                                  title="Your Wishlist"
                                  style={{ all: "unset" }}
                                >
                                  <BsSuitHeartFill
                                    className={
                                      styles._featured_course_WISH_ICON
                                    }
                                    onClick={() => router.replace("/login")}
                                  />
                                </abbr>
                                {/* ======================================================= */}
                                <abbr
                                  title="Your Cart"
                                  style={{ all: "unset" }}
                                >
                                  <BsCartFill
                                    className={
                                      styles._featured_course_CART_ICON
                                    }
                                    onClick={() => router.replace("/login")}
                                  />
                                </abbr>
                                {/* ========================================================== */}
                                {/* ============END=============== */}
                                {/* ========================================================== */}
                              </>
                            )}
                          </div>

                          {/* END */}
                        </Card.Footer>
                        {/* ==================== */}
                        <div className={styles._featured_course_TAG}>
                          <Badge className={styles._featured_course_TAG_BADGE}>
                            {course.tag}
                          </Badge>{" "}
                        </div>
                      </Card>
                    </Col>
                  </>
                ))}

                {/* =========================== */}

                {/* =========================== */}
              </Row>
            </>
          )}
          {/* END */}
        </Container>
      </div>
    </>
  );
};

export default Featured;
