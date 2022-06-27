import styles from "../styles/Events.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineCalendar, AiOutlineFieldTime } from "react-icons/ai";

const Achievement = () => {
  return (
    <>
      <div id={styles._events_wrapper}>
        <Container fluid="lg" className="p-0">
          <h1>Our Upcoming Events</h1>
          <Row className="g-3">
            <Col xs={12} md={6}>
              <div className={styles._events_right_col}>
                <div className={styles._events_right_col_details}>
                  <span className={styles._events_right_col_details_SPAN}>
                    <AiOutlineCalendar
                      className={styles._events_right_col_details_ICONS}
                    />{" "}
                    01 April 2023
                  </span>
                  {/* === */}
                  <span className={styles._events_right_col_details_SPAN}>
                    <AiOutlineFieldTime
                      className={styles._events_right_col_details_ICONS}
                    />{" "}
                    7:00 am - 3:00 pm
                  </span>

                  <h3>How To Improve Your Programming Skills</h3>

                  <button>View Event</button>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Row className="g-3">
                <Col xs={12}>
                  <div className={styles._events_left_col_1}>
                    <div className={styles._events_left_col_details}>
                      <span className={styles._events_right_col_details_SPAN}>
                        <AiOutlineCalendar
                          className={styles._events_right_col_details_ICONS}
                        />{" "}
                        01 April 2023
                      </span>
                      {/* === */}
                      <span className={styles._events_right_col_details_SPAN}>
                        <AiOutlineFieldTime
                          className={styles._events_right_col_details_ICONS}
                        />{" "}
                        7:00 am - 3:00 pm
                      </span>

                      <h3>How To Improve Your Programming Skills</h3>

                      <button>View Event</button>
                    </div>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className={styles._events_left_col_2}>
                    <div className={styles._events_left_col_details}>
                      <span className={styles._events_right_col_details_SPAN}>
                        <AiOutlineCalendar
                          className={styles._events_right_col_details_ICONS}
                        />{" "}
                        01 April 2023
                      </span>
                      {/* === */}
                      <span className={styles._events_right_col_details_SPAN}>
                        <AiOutlineFieldTime
                          className={styles._events_right_col_details_ICONS}
                        />{" "}
                        7:00 am - 3:00 pm
                      </span>

                      <h3>How To Improve Your Programming Skills</h3>

                      <button>View Event</button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Achievement;
