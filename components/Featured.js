import styles from "../styles/Featured.module.scss";
import { Container, Row, Col, Card } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdPlayLesson } from "react-icons/md";

const Featured = () => {
  return (
    <>
      <div id={styles._featured_wrapper}>
        <Container fluid="lg" className="p-0">
          <h1>Our Featured Courses</h1>
          <Row className="gx-3 gy-4 mx-auto">
            <Col xs={12} md={6} lg={4}>
              <Card className={styles._featured_course_card}>
                <Card.Img variant="top" src="/gs/1.png" />
                <Card.Body className={styles._featured_course_card_BODY}>
                  <Card.Title className={styles._H1_TAG}>
                    Take A Course For Web Development
                  </Card.Title>
                  <Card.Text className={styles._P_TAG}>
                    <FaChalkboardTeacher
                      className={styles._featured_card_ICONS}
                    />{" "}
                    David Sopas
                  </Card.Text>
                  {/*  */}
                  <Card.Text className={styles._P_TAG}>
                    <AiFillStar className={styles._featured_card_ICONS} /> 4.2/5
                  </Card.Text>
                  {/*  */}
                  <Card.Text className={styles._P_TAG}>
                    <MdPlayLesson className={styles._featured_card_ICONS} /> 3
                    Lessons
                  </Card.Text>
                  {/*  */}

                  <Card.Text className={styles._P_TAG}>
                    <BsPersonFill className={styles._featured_card_ICONS} /> 28
                    Students
                  </Card.Text>
                  {/*  */}
                </Card.Body>
                <Card.Footer className={styles._featured_course_card_FOOTER}>
                  <button>Enroll Now</button>
                  <span>₱300</span>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Featured;
