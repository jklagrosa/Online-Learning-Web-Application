import styles from "../../styles/SEARCH.module.scss";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { AiFillStar, AiFillCaretRight } from "react-icons/ai";
import { BsPersonFill, BsSearch } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdPlayLesson } from "react-icons/md";
import { BsSuitHeartFill, BsCartFill } from "react-icons/bs";
import { IoMdPricetag } from "react-icons/io";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Copyright from "../../components/Copyright";

const Search = () => {
  return (
    <>
      <Nav />
      <div id={styles._search_wrapper}>
        <Container fluid="lg" className="p-0">
          <div className={styles._search_header_section}>
            <InputGroup className={styles._auto_complete_input_wrapper}>
              <FormControl
                placeholder="Search Courses"
                aria-label="Search Courses"
                className={styles._auto_complete_input}
              />
              <abbr title="Search" style={{ all: "unset" }}>
                <Button variant="primary">
                  <BsSearch color="white" />
                </Button>
              </abbr>
            </InputGroup>
            <h1>
              Search Results:{" "}
              <span>
                <q>Web Development</q>
              </span>
            </h1>
            <Row className="gx-3 gy-4 mx-auto">
              <Col xs={12} md={6} lg={4}>
                <Card className={styles._featured_course_card}>
                  <Card.Img variant="top" src="/gs/1.png" />
                  <Card.Body className={styles._featured_course_card_BODY}>
                    <abbr title="Course title" style={{ all: "unset" }}>
                      <Card.Title className={styles._H1_TAG}>
                        Take A Course For Web Development
                      </Card.Title>
                    </abbr>

                    <abbr title="Instructor" style={{ all: "unset" }}>
                      <Card.Text className={styles._P_TAG}>
                        <FaChalkboardTeacher
                          className={styles._featured_card_ICONS}
                        />{" "}
                        David Sopas
                      </Card.Text>
                    </abbr>
                    {/*  */}
                    <abbr title="4.2 out of 5 stars" style={{ all: "unset" }}>
                      <Card.Text className={styles._P_TAG}>
                        <AiFillStar className={styles._featured_card_ICONS} />{" "}
                        4.2/5
                      </Card.Text>
                    </abbr>
                    {/*  */}
                    <abbr title="3 Lessons" style={{ all: "unset" }}>
                      <Card.Text className={styles._P_TAG}>
                        <MdPlayLesson className={styles._featured_card_ICONS} />{" "}
                        3 Lessons
                      </Card.Text>
                    </abbr>
                    {/*  */}
                    <abbr title="28 Enrolled students" style={{ all: "unset" }}>
                      <Card.Text className={styles._P_TAG}>
                        <BsPersonFill className={styles._featured_card_ICONS} />{" "}
                        28 Students
                      </Card.Text>
                    </abbr>
                    {/*  */}
                    <abbr title="Price" style={{ all: "unset" }}>
                      <Card.Text className={styles._P_TAG}>
                        <IoMdPricetag className={styles._featured_card_ICONS} />{" "}
                        ₱300
                      </Card.Text>
                    </abbr>
                    {/*  */}
                  </Card.Body>
                  <Card.Footer className={styles._featured_course_card_FOOTER}>
                    <button>
                      Enroll Now{" "}
                      <AiFillCaretRight
                        className={styles._featured_course_card_FOOTER_ICON}
                      />
                    </button>
                    {/* <abbr title="Course price" style={{ all: "unset" }}>
                    <span>₱300</span>
                  </abbr> */}

                    {/* WISH & CART */}
                    <div>
                      <abbr title="Your Wishlist" style={{ all: "unset" }}>
                        <BsSuitHeartFill
                          className={styles._featured_course_WISH_ICON}
                        />
                      </abbr>
                      {/* ======================================================= */}
                      <abbr title="Your Cart" style={{ all: "unset" }}>
                        <BsCartFill
                          className={styles._featured_course_CART_ICON}
                        />
                      </abbr>
                    </div>

                    {/* END */}
                  </Card.Footer>
                  {/* ==================== */}
                  <div className={styles._featured_course_TAG}>
                    <Badge className={styles._featured_course_TAG_BADGE}>
                      Web Development
                    </Badge>{" "}
                  </div>
                </Card>
              </Col>

              {/* =========================== */}

              <Col xs={12} md={6} lg={4}>
                <Card className={styles._featured_course_card}>
                  <Card.Img variant="top" src="/gs/1.png" />
                  <Card.Body className={styles._featured_course_card_BODY}>
                    <abbr title="Course title" style={{ all: "unset" }}>
                      <Card.Title className={styles._H1_TAG}>
                        Take A Course For Web Development
                      </Card.Title>
                    </abbr>

                    <abbr title="Instructor" style={{ all: "unset" }}>
                      <Card.Text className={styles._P_TAG}>
                        <FaChalkboardTeacher
                          className={styles._featured_card_ICONS}
                        />{" "}
                        David Sopas
                      </Card.Text>
                    </abbr>
                    {/*  */}
                    <abbr title="4.2 out of 5 stars" style={{ all: "unset" }}>
                      <Card.Text className={styles._P_TAG}>
                        <AiFillStar className={styles._featured_card_ICONS} />{" "}
                        4.2/5
                      </Card.Text>
                    </abbr>
                    {/*  */}
                    <abbr title="3 Lessons" style={{ all: "unset" }}>
                      <Card.Text className={styles._P_TAG}>
                        <MdPlayLesson className={styles._featured_card_ICONS} />{" "}
                        3 Lessons
                      </Card.Text>
                    </abbr>
                    {/*  */}
                    <abbr title="28 Enrolled students" style={{ all: "unset" }}>
                      <Card.Text className={styles._P_TAG}>
                        <BsPersonFill className={styles._featured_card_ICONS} />{" "}
                        28 Students
                      </Card.Text>
                    </abbr>
                    {/*  */}
                    <abbr title="Price" style={{ all: "unset" }}>
                      <Card.Text className={styles._P_TAG}>
                        <IoMdPricetag className={styles._featured_card_ICONS} />{" "}
                        ₱300
                      </Card.Text>
                    </abbr>
                    {/*  */}
                  </Card.Body>
                  <Card.Footer className={styles._featured_course_card_FOOTER}>
                    <button>
                      Enroll Now{" "}
                      <AiFillCaretRight
                        className={styles._featured_course_card_FOOTER_ICON}
                      />
                    </button>
                    {/* <abbr title="Course price" style={{ all: "unset" }}>
                    <span>₱300</span>
                  </abbr> */}

                    {/* WISH & CART */}
                    <div>
                      <abbr title="Your Wishlist" style={{ all: "unset" }}>
                        <BsSuitHeartFill
                          className={styles._featured_course_WISH_ICON}
                        />
                      </abbr>
                      {/* ======================================================= */}
                      <abbr title="Your Cart" style={{ all: "unset" }}>
                        <BsCartFill
                          className={styles._featured_course_CART_ICON}
                        />
                      </abbr>
                    </div>

                    {/* END */}
                  </Card.Footer>
                  {/* ==================== */}
                  <div className={styles._featured_course_TAG}>
                    <Badge className={styles._featured_course_TAG_BADGE}>
                      Web Development
                    </Badge>{" "}
                  </div>
                </Card>
              </Col>

              {/* =========================== */}

              <Col xs={12} md={6} lg={4}>
                <Card className={styles._featured_course_card}>
                  <Card.Img variant="top" src="/gs/1.png" />
                  <Card.Body className={styles._featured_course_card_BODY}>
                    <abbr title="Course title" style={{ all: "unset" }}>
                      <Card.Title className={styles._H1_TAG}>
                        Take A Course For Web Development
                      </Card.Title>
                    </abbr>

                    <abbr title="Instructor" style={{ all: "unset" }}>
                      <Card.Text className={styles._P_TAG}>
                        <FaChalkboardTeacher
                          className={styles._featured_card_ICONS}
                        />{" "}
                        David Sopas
                      </Card.Text>
                    </abbr>
                    {/*  */}
                    <abbr title="4.2 out of 5 stars" style={{ all: "unset" }}>
                      <Card.Text className={styles._P_TAG}>
                        <AiFillStar className={styles._featured_card_ICONS} />{" "}
                        4.2/5
                      </Card.Text>
                    </abbr>
                    {/*  */}
                    <abbr title="3 Lessons" style={{ all: "unset" }}>
                      <Card.Text className={styles._P_TAG}>
                        <MdPlayLesson className={styles._featured_card_ICONS} />{" "}
                        3 Lessons
                      </Card.Text>
                    </abbr>
                    {/*  */}
                    <abbr title="28 Enrolled students" style={{ all: "unset" }}>
                      <Card.Text className={styles._P_TAG}>
                        <BsPersonFill className={styles._featured_card_ICONS} />{" "}
                        28 Students
                      </Card.Text>
                    </abbr>
                    {/*  */}
                    <abbr title="Price" style={{ all: "unset" }}>
                      <Card.Text className={styles._P_TAG}>
                        <IoMdPricetag className={styles._featured_card_ICONS} />{" "}
                        ₱300
                      </Card.Text>
                    </abbr>
                    {/*  */}
                  </Card.Body>
                  <Card.Footer className={styles._featured_course_card_FOOTER}>
                    <button>
                      Enroll Now{" "}
                      <AiFillCaretRight
                        className={styles._featured_course_card_FOOTER_ICON}
                      />
                    </button>
                    {/* <abbr title="Course price" style={{ all: "unset" }}>
                    <span>₱300</span>
                  </abbr> */}

                    {/* WISH & CART */}
                    <div>
                      <abbr title="Your Wishlist" style={{ all: "unset" }}>
                        <BsSuitHeartFill
                          className={styles._featured_course_WISH_ICON}
                        />
                      </abbr>
                      {/* ======================================================= */}
                      <abbr title="Your Cart" style={{ all: "unset" }}>
                        <BsCartFill
                          className={styles._featured_course_CART_ICON}
                        />
                      </abbr>
                    </div>

                    {/* END */}
                  </Card.Footer>
                  {/* ==================== */}
                  <div className={styles._featured_course_TAG}>
                    <Badge className={styles._featured_course_TAG_BADGE}>
                      Web Development
                    </Badge>{" "}
                  </div>
                </Card>
              </Col>

              {/* =========================== */}

              <Col xs={12} md={6} lg={4}>
                <Card className={styles._featured_course_card}>
                  <Card.Img variant="top" src="/gs/1.png" />
                  <Card.Body className={styles._featured_course_card_BODY}>
                    <abbr title="Course title" style={{ all: "unset" }}>
                      <Card.Title className={styles._H1_TAG}>
                        Take A Course For Web Development
                      </Card.Title>
                    </abbr>

                    <abbr title="Instructor" style={{ all: "unset" }}>
                      <Card.Text className={styles._P_TAG}>
                        <FaChalkboardTeacher
                          className={styles._featured_card_ICONS}
                        />{" "}
                        David Sopas
                      </Card.Text>
                    </abbr>
                    {/*  */}
                    <abbr title="4.2 out of 5 stars" style={{ all: "unset" }}>
                      <Card.Text className={styles._P_TAG}>
                        <AiFillStar className={styles._featured_card_ICONS} />{" "}
                        4.2/5
                      </Card.Text>
                    </abbr>
                    {/*  */}
                    <abbr title="3 Lessons" style={{ all: "unset" }}>
                      <Card.Text className={styles._P_TAG}>
                        <MdPlayLesson className={styles._featured_card_ICONS} />{" "}
                        3 Lessons
                      </Card.Text>
                    </abbr>
                    {/*  */}
                    <abbr title="28 Enrolled students" style={{ all: "unset" }}>
                      <Card.Text className={styles._P_TAG}>
                        <BsPersonFill className={styles._featured_card_ICONS} />{" "}
                        28 Students
                      </Card.Text>
                    </abbr>
                    {/*  */}
                    <abbr title="Price" style={{ all: "unset" }}>
                      <Card.Text className={styles._P_TAG}>
                        <IoMdPricetag className={styles._featured_card_ICONS} />{" "}
                        ₱300
                      </Card.Text>
                    </abbr>
                    {/*  */}
                  </Card.Body>
                  <Card.Footer className={styles._featured_course_card_FOOTER}>
                    <button>
                      Enroll Now{" "}
                      <AiFillCaretRight
                        className={styles._featured_course_card_FOOTER_ICON}
                      />
                    </button>
                    {/* <abbr title="Course price" style={{ all: "unset" }}>
                    <span>₱300</span>
                  </abbr> */}

                    {/* WISH & CART */}
                    <div>
                      <abbr title="Your Wishlist" style={{ all: "unset" }}>
                        <BsSuitHeartFill
                          className={styles._featured_course_WISH_ICON}
                        />
                      </abbr>
                      {/* ======================================================= */}
                      <abbr title="Your Cart" style={{ all: "unset" }}>
                        <BsCartFill
                          className={styles._featured_course_CART_ICON}
                        />
                      </abbr>
                    </div>

                    {/* END */}
                  </Card.Footer>
                  {/* ==================== */}
                  <div className={styles._featured_course_TAG}>
                    <Badge className={styles._featured_course_TAG_BADGE}>
                      Web Development
                    </Badge>{" "}
                  </div>
                </Card>
              </Col>

              {/* =========================== */}
            </Row>
          </div>
        </Container>
      </div>
      <Footer />
      <Copyright />
    </>
  );
};

export default Search;
