import styles from "../../../styles/ENROLLED.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import Copyright from "../../../components/Copyright";
import { MdPlayLesson } from "react-icons/md";
import { BsPersonFill, BsPlayBtnFill } from "react-icons/bs";
import { FaChalkboardTeacher, FaLanguage } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import Dbconnection from "../../../db/conn";
import Course from "../../../models/course";
import { useEffect, useState } from "react";

import axios from "axios";
import { BASE_URL, headersOpts } from "../../../config/others";

import { toast } from "react-toastify";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { GET_CART, CART_COURSE_ID } from "../../../store/cart";

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
          data: JSON.stringify(find_course),
        },
      };
    }
    // END
    // ====================================
    else {
      return {
        props: {
          notEnrolled: true,
          notEnrolled_ID: JSON.stringify(find_course._id),
        },
      };
    }
  }
}

const EnrolledCourse = ({ data, notEnrolled, notEnrolled_ID }) => {
  const [video, setVideo] = useState("");

  const [id_is_equal, setID_IS_EQUAL] = useState(null);

  const parsed_data = data ? JSON.parse(data) : null;

  const parsed_notEnrolled_ID = notEnrolled_ID
    ? JSON.parse(notEnrolled_ID)
    : null;

  const { cartId } = useSelector((state) => state?.cart);

  const router = useRouter();
  const dispatch = useDispatch();

  // ########### IF USER IS NOT ENROLLED GO BACK TO "COURSE/[ID]" ###############
  useEffect(() => {
    if (notEnrolled && parsed_notEnrolled_ID !== null) {
      router.replace({
        pathname: "/course/[id]",
        query: { id: parsed_notEnrolled_ID },
      });
    }
  }, []);

  // ############ END ##########################

  useEffect(() => {
    setVideo(parsed_data?.vids[0]);
  }, []);

  // REDIRECT TO HOME IF COURSE IDs ARE EQUAL
  // #########################################

  useEffect(() => {
    if (parsed_data !== null && cartId !== null) {
      if (parsed_data._id === cartId) {
        toast.info("Please wait...", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        router.replace("/");
        dispatch(CART_COURSE_ID(null));

        console.log("COURSE DELETED!");
      }
    }
  }, [cartId]);
  // #########################################
  // END

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  // *********** GET UPDATED CART DATA *********************
  const GET_UPDATED_CART_DATA = async () => {
    const response = await axios.get(`${BASE_URL}/api/cart`, headersOpts);
    if (!response.data.success) {
      dispatch(GET_CART(null));
    }

    if (response && response.data && response.data.success) {
      dispatch(GET_CART(response.data.data));
    }

    // console.log(`Hello from Wishlist: ${JSON.stringify(response.data.data)}`);

    return response.data;
  };
  // ************************ END ******************************

  useEffect(() => {
    GET_UPDATED_CART_DATA();
  }, []);

  const handleWatchLessons = (vid) => {
    setVideo(vid);
  };

  // UN-ENROLL
  const UN_ENROLLED = async (id) => {
    const response = await axios.post(
      `${BASE_URL}/api/un-enroll`,
      { id },
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
      toast.info("Please wait...", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      router.replace("/");
    }

    return response.data;
  };
  // END

  return (
    <>
      <Nav />
      <div id={styles._enrolled_course_wrapper}>
        <Container fluid="lg" className="p-0">
          {/* IF COURSE IS AVAILABLE */}
          {parsed_data !== null && (
            <>
              <Row
                className="gx-3 gy-4 mx-auto"
                id={styles._enrolled_header_section}
              >
                <Col xs={12} lg={8}>
                  <div className={styles._enrolled_video_section}>
                    <iframe
                      src={video}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>

                    <div className={styles._enrolled_video_section_DETAILS}>
                      {/* UN-ENROLL TO THIS COURSE */}

                      {parsed_data.is_enrolled && (
                        <>
                          <button
                            id={styles._unenrolled_btn}
                            onClick={() => UN_ENROLLED(parsed_data._id)}
                          >
                            Unenroll from this course
                          </button>
                        </>
                      )}

                      {/* END */}

                      {!parsed_data.is_enrolled && (
                        <>
                          <button id={styles._unenrolled_btn}>
                            Back to homepage
                          </button>
                        </>
                      )}

                      {/* ======================================================= */}

                      <h2>{parsed_data.title}</h2>

                      <div className={styles._enrolled_video_section_ICONS}>
                        <span>
                          <FaChalkboardTeacher
                            className={
                              styles._enrolled_video_section_SPAN_ICONS
                            }
                          />{" "}
                          {parsed_data.inst}
                        </span>
                        {/*  */}
                        <span>
                          <AiFillStar
                            className={
                              styles._enrolled_video_section_SPAN_ICONS
                            }
                          />{" "}
                          {parsed_data.star}/5
                        </span>
                        {/*  */}
                        <span>
                          <MdPlayLesson
                            className={
                              styles._enrolled_video_section_SPAN_ICONS
                            }
                          />{" "}
                          {parsed_data.lessons} Lessons
                        </span>
                        {/*  */}
                        <span>
                          <BsPersonFill
                            className={
                              styles._enrolled_video_section_SPAN_ICONS
                            }
                          />{" "}
                          {parsed_data.enrolled_students} Enrolled students
                        </span>
                        {/*  */}

                        <span>
                          <FaLanguage
                            className={
                              styles._enrolled_video_section_SPAN_ICONS
                            }
                          />{" "}
                          {parsed_data.course_lang}
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
                {/* ========================= */}
                <Col xs={12} lg={4}>
                  <div className={styles._enrolled_course_contents}>
                    <h5>Course Lessons</h5>

                    <div className={styles._enrolled_course_contents_VIDS}>
                      {parsed_data?.vids?.map((vid, index) => (
                        <>
                          <span
                            key={index}
                            onClick={() => handleWatchLessons(vid)}
                          >
                            <BsPlayBtnFill
                              className={
                                styles._enrolled_course_contents_VIDS_ICONS
                              }
                            />{" "}
                            {`Lecture ${index + 1}`}
                          </span>
                          <br />
                        </>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </>
          )}

          {/* END */}
        </Container>
      </div>
      <Footer />
      <Copyright />
    </>
  );
};

export default EnrolledCourse;
