import styles from "../styles/Featured.module.scss";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { AiFillStar, AiFillCaretRight } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdPlayLesson } from "react-icons/md";
import { BsSuitHeartFill, BsCartFill, BsBookmarksFill } from "react-icons/bs";
import { IoMdPricetag } from "react-icons/io";

import { useRouter } from "next/router";

// GET THE DATA FROM STORE
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import axios from "axios";
import { BASE_URL, headersOpts } from "../config/others";

import { toast } from "react-toastify";

// WISHLIST
import { GET_WISHLIST } from "../store/wishlist";
// END
// ###########################

const Featured = () => {
  // USER STATE STATUS
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  // END
  const [loading, setLoading] = useState(false);

  const { courses } = useSelector((state) => state?.course);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSeeMore = (id) => {
    setLoading(true);

    router.push({
      pathname: "/please-wait",
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

  // ###########################################################

  // *********** GET UPDATED WISHLIST DATA *********************
  const GET_UPDATED_WISHLIST_DATA = async () => {
    const response = await axios.get(`${BASE_URL}/api/wishlist`, headersOpts);
    if (!response.data.success) {
      dispatch(GET_WISHLIST(null));
    }

    if (response && response.data && response.data.success) {
      dispatch(GET_WISHLIST(response.data.data));
    }

    // console.log(`Hello from Wishlist: ${JSON.stringify(response.data.data)}`);

    return response.data;
  };

  // ************************ END ******************************

  // *********** ADD TO WISHLIST ***************
  const ADD_TO_WISH_LIST = async (id) => {
    const response = await axios.post(
      `${BASE_URL}/api/wishlist`,
      { id },
      headersOpts
    );

    if (response.data.isExist) {
      return toast.info("Already in Wishlist.", {
        position: "top-center",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (!response.data.success) {
      return toast.error("Please try again later.", {
        position: "top-center",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (response && response.data && response.data.success) {
      await GET_UPDATED_WISHLIST_DATA();

      toast.success("Added to your Wishlist.", {
        position: "top-center",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    return response.data;
  };
  // ************* END **************************

  // ##############################################################################

  return (
    <>
      <div id={styles._featured_wrapper}>
        <Container fluid="lg" className="p-0">
          {/* IF COURSES ARE AVAILABLE */}
          {courses?.length > 0 && (
            <>
              <h1>Our Featured Courses</h1>
              <Row className="gx-3 gy-4 mx-auto">
                {courses?.slice(0, 3)?.map((course) => (
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
                          <br />
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
                          <br />
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
                          <br />
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
                          <br />
                          {/*  */}
                          <abbr
                            title="Price"
                            style={{
                              all: "unset",
                            }}
                          >
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
                            {/* CHANGED TO: isLoggedIn !== null */}
                            {isLoggedIn === null && (
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
                                    onClick={() => ADD_TO_WISH_LIST(course._id)}
                                  />
                                </abbr>
                                {/* ======================================================= */}

                                {course.is_enrolled && (
                                  <>
                                    <abbr
                                      title="This course is already added to your cart."
                                      style={{ all: "unset" }}
                                    >
                                      <BsCartFill
                                        className={
                                          styles._featured_course_CART_ICON
                                        }
                                        onClick={() =>
                                          handleWatchCourse(course._id)
                                        }
                                      />
                                    </abbr>
                                  </>
                                )}

                                {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}

                                {!course.is_enrolled && (
                                  <>
                                    <abbr
                                      title="Add this course to your cart by enrolling in it."
                                      style={{ all: "unset" }}
                                    >
                                      <BsBookmarksFill
                                        className={
                                          styles._featured_course_CART_ICON
                                        }
                                        onClick={() =>
                                          handleSeeMore(course._id)
                                        }
                                      />
                                    </abbr>
                                  </>
                                )}

                                {/* ========================================================== */}
                                {/* ============END=============== */}
                                {/* ========================================================== */}
                              </>
                            )}

                            {/* ############################################################################## */}
                            {/* CHANGED TO: isLoggedIn === null */}
                            {isLoggedIn !== null && (
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
