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

  console.log(find_course);

  return {
    props: {
      data: JSON.stringify(find_course),
    },
  };
}

const EnrolledCourse = ({ data }) => {
  const [video, setVideo] = useState("");

  const parsed_data = data ? JSON.parse(data) : null;

  useEffect(() => {
    setVideo(parsed_data.vids[0]);
  }, []);

  const handleWatchLessons = (vid) => {
    setVideo(vid);
  };

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
