import styles from "../styles/FAQ.module.scss";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FAQ = () => {
  return (
    <>
      <div id={styles._faq_wrapper}>
        <Container fluid="lg" className="p-0" id="faq">
          <h1>Frequently Asked Questions</h1>
          <Row className="gx-3 gy-0">
            <Col xs={12} md={6}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" className={styles._faq_item}>
                  <Accordion.Header className={styles._faq_header}>
                    01. What do Edukasyon courses include?
                  </Accordion.Header>
                  <Accordion.Body className={styles._faq_body}>
                    Each Edukasyon course is created, owned and managed by the
                    instructors. The foundation of each Edukasyon course are its
                    lectures, which can include videos, slides, and text.
                  </Accordion.Body>
                </Accordion.Item>
                {/* ================ */}
                <Accordion.Item eventKey="1" className={styles._faq_item}>
                  <Accordion.Header className={styles._faq_header}>
                    02. How do I take a Udemy course?
                  </Accordion.Header>
                  <Accordion.Body className={styles._faq_body}>
                    Edukasyon courses are entirely on-demand and they can be
                    accessed from several different devices and platforms,
                    including a desktop, laptop, and our mobile app.
                  </Accordion.Body>
                </Accordion.Item>
                {/* ================ */}
                <Accordion.Item eventKey="2" className={styles._faq_item}>
                  <Accordion.Header className={styles._faq_header}>
                    03. Is there any way to preview a course?
                  </Accordion.Header>
                  <Accordion.Body className={styles._faq_body}>
                    Yes! Learn how to preview a course, and review key
                    information about it. This article outlines how you can
                    search Edukasyon&apos;s ever-growing library, and find
                    courses you&apos;re interested in taking.
                  </Accordion.Body>
                </Accordion.Item>
                {/* ================ */}
                <Accordion.Item eventKey="3" className={styles._faq_item}>
                  <Accordion.Header className={styles._faq_header}>
                    04. How can I pay for a course?
                  </Accordion.Header>
                  <Accordion.Body className={styles._faq_body}>
                    Edukasyon supports several different payment methods,
                    depending on your account country and location.
                  </Accordion.Body>
                </Accordion.Item>
                {/* ================ */}
              </Accordion>
            </Col>
            {/* ====================================== */}
            <Col xs={12} md={6}>
              <Accordion>
                <Accordion.Item eventKey="4" className={styles._faq_item}>
                  <Accordion.Header className={styles._faq_header}>
                    05. What if I don&apos;t like a course I purchased?
                  </Accordion.Header>
                  <Accordion.Body className={styles._faq_body}>
                    We want you to be satisfied, so all eligible courses
                    purchased on Edukasyon can be refunded within 30 days. If
                    you are unhappy with a course, you can request a refund,
                    provided the request meets the guidelines in our refund
                    policy.
                  </Accordion.Body>
                </Accordion.Item>
                {/* ================ */}
                <Accordion.Item eventKey="5" className={styles._faq_item}>
                  <Accordion.Header className={styles._faq_header}>
                    06. Where can I go for help?
                  </Accordion.Header>
                  <Accordion.Body className={styles._faq_body}>
                    If you find you have a question about a paid course while
                    you&apos;re taking it, you can search for answers to your
                    question in the Q&amp;A or ask the instructor.
                  </Accordion.Body>
                </Accordion.Item>
                {/* ================ */}
                <Accordion.Item eventKey="6" className={styles._faq_item}>
                  <Accordion.Header className={styles._faq_header}>
                    07. Is financial aid available?
                  </Accordion.Header>
                  <Accordion.Body className={styles._faq_body}>
                    Some Cornell students may be eligible for financial aid.
                    Please contact the Office of Financial Aid for information.
                  </Accordion.Body>
                </Accordion.Item>
                {/* ================ */}
                <Accordion.Item eventKey="7" className={styles._faq_item}>
                  <Accordion.Header className={styles._faq_header}>
                    08. What kind of credit do I get?
                  </Accordion.Header>
                  <Accordion.Body className={styles._faq_body}>
                    At the successful completion of the class, you will receive
                    Cornell University credits.
                  </Accordion.Body>
                </Accordion.Item>
                {/* ================ */}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FAQ;
