import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Row, Col } from "react-bootstrap";
import styles from "../styles/Nav.module.scss";
import { BsSuitHeartFill, BsCartFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { useRouter } from "next/router";
import { Tooltip } from "antd";

import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdPlayLesson } from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";

const Navigation = () => {
  const [showWishlist, setShowWishlist] = useState(false);

  const [text, setText] = useState("Intro to Web Development");

  const handleCloseWishlist = () => setShowWishlist(false);
  const handleShowWishlist = () => setShowWishlist(true);

  const router = useRouter();

  return (
    <>
      <Navbar expand="lg" id={styles._navbar_wrapper}>
        <Container fluid="lg" className="p-0">
          {/* SHOW NAVBAR LOGO IN LARGE DEVICES 577PX UP! */}
          <Navbar.Brand href="#home" id={styles._navbar_logo}>
            <span>Edu</span>kasyon
          </Navbar.Brand>
          {/* END */}

          {/* ============================================================= */}

          {/* SHOW NAVBAR LOGO IN SMALL DEVICES 576PX DOWN! */}
          <Navbar.Brand href="#home" id={styles._navbar_logo_SMALL}>
            <span>E</span>k
          </Navbar.Brand>
          {/* END */}

          {/* =========================================================== */}
          {/* <Nav className="mx-auto"> */}
          <div className={styles._navbar_ACTIONS_BTNS_ONLY_SHOW_BELOW_99PX}>
            <Nav.Link href="#" className={styles._wish_n_cart}>
              <Tooltip title="Your Wishlist">
                <BsSuitHeartFill
                  id={styles._navbar_icon_wishlist}
                  className={styles._navbar_icon_ONLY_SHOW_BELOW_99PX}
                />
              </Tooltip>
            </Nav.Link>
            {/* === */}
            <Nav.Link href="#" className={styles._wish_n_cart}>
              <Tooltip title="Your Cart">
                <BsCartFill
                  id={styles._navbar_icon_cart}
                  className={styles._navbar_icon_ONLY_SHOW_BELOW_99PX}
                />
              </Tooltip>
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => router.push("/")}
              className={styles._navbar_links}
              id={styles._navbar_icon_ONLY_SHOW_BELOW_99PX}
            >
              Login
            </Nav.Link>
            {/* === */}
          </div>
          {/* </Nav> */}
          {/* =========================================================== */}

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ outline: "none", border: "none" }}
          >
            <BiMenu id={styles._navbar_hamburger} />
          </Navbar.Toggle>

          {/* NAVBAR DRAWER IS NOW DISABLED IN SMALL DEVICES 991PX */}
          <Navbar.Collapse id={styles._navbar_COLLAPSE_HIDE}>
            <Nav className="mx-auto">
              <Nav.Link
                href="#"
                onClick={() => router.push("/")}
                className={styles._navbar_links}
              >
                Home
              </Nav.Link>
              <Nav.Link href="#" className={styles._navbar_links}>
                Featured Courses
              </Nav.Link>
              <Nav.Link href="#" className={styles._navbar_links}>
                Top Sellers
              </Nav.Link>
              <Nav.Link href="#" className={styles._navbar_links}>
                Events
              </Nav.Link>
              <Nav.Link href="#" className={styles._navbar_links}>
                Achievement
              </Nav.Link>
            </Nav>
            <Nav className="mx-auto">
              <Nav.Link
                href="#"
                onClick={() => router.push("/")}
                className={styles._navbar_links}
              >
                Login
              </Nav.Link>
              {/* === */}
              <Nav.Link
                href="#"
                className={styles._wish_n_cart}
                onClick={handleShowWishlist}
              >
                <Tooltip title="Your Wishlist">
                  <BsSuitHeartFill id={styles._navbar_icon_wishlist} />
                </Tooltip>
              </Nav.Link>
              {/* === */}
              <Nav.Link href="#" className={styles._wish_n_cart}>
                <Tooltip title="Your Cart">
                  <BsCartFill id={styles._navbar_icon_cart} />
                </Tooltip>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* WISHLIST OFFCANVAS */}
      <Offcanvas
        show={showWishlist}
        onHide={handleCloseWishlist}
        id={styles._navbar_offcanvas_wrapper}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={styles._navbar_offcanvas_title}>
            Wishlist
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body id={styles._navbar_offcanvas_body}>
          <div id={styles._navbar_offcanvas_body_COLS}>
            <Row className="gx-2 gy-0">
              <Col xs={6}>
                <abbr
                  title="Click to see more details"
                  style={{ all: "unset" }}
                >
                  <img src="/gs/1.png" />
                </abbr>
              </Col>
              {/* ====== */}
              <Col xs={6}>
                <h6>{`${text.substring(0, 18)}...`}</h6>

                <div id={styles._navbar_offcanvas_body_ICONS}>
                  <span>
                    <FaChalkboardTeacher
                      id={styles._navbar_offcanvas_body_main_icons}
                    />{" "}
                    David Sopas
                  </span>
                  <br />
                  {/*  */}
                  <span>
                    <AiFillStar id={styles._navbar_offcanvas_body_main_icons} />{" "}
                    4.2/5
                  </span>
                  <br />
                  {/*  */}
                  <span>
                    <MdPlayLesson
                      id={styles._navbar_offcanvas_body_main_icons}
                    />{" "}
                    3 Lessons
                  </span>
                  <br />
                  {/*  */}
                  <span>
                    <BsPersonFill
                      id={styles._navbar_offcanvas_body_main_icons}
                    />{" "}
                    25 Enrolled students
                  </span>
                  <br />
                  {/*  */}
                  <span>
                    <IoMdPricetag
                      id={styles._navbar_offcanvas_body_main_icons}
                    />{" "}
                    ₱300
                  </span>
                  {/*  */}
                </div>
              </Col>
            </Row>

            {/* CLOSE ICON */}
            <div id={styles._navbar_offcanvas_body_close_icons}>
              <AiOutlineClose
                id={styles._navbar_offcanvas_body_close_icons_ICON}
              />
            </div>
            {/* END */}
          </div>

          {/* ========================================== */}

          <div id={styles._navbar_offcanvas_body_COLS}>
            <Row className="gx-2 gy-0">
              <Col xs={6}>
                <img src="/gs/1.png" />
              </Col>
              {/* ====== */}
              <Col xs={6}>
                <h6>{`${text.substring(0, 18)}...`}</h6>

                <div id={styles._navbar_offcanvas_body_ICONS}>
                  <span>
                    <FaChalkboardTeacher
                      id={styles._navbar_offcanvas_body_main_icons}
                    />{" "}
                    David Sopas
                  </span>
                  <br />
                  {/*  */}
                  <span>
                    <AiFillStar id={styles._navbar_offcanvas_body_main_icons} />{" "}
                    4.2/5
                  </span>
                  <br />
                  {/*  */}
                  <span>
                    <MdPlayLesson
                      id={styles._navbar_offcanvas_body_main_icons}
                    />{" "}
                    3 Lessons
                  </span>
                  <br />
                  {/*  */}
                  <span>
                    <BsPersonFill
                      id={styles._navbar_offcanvas_body_main_icons}
                    />{" "}
                    25 Enrolled students
                  </span>
                  <br />
                  {/*  */}
                  <span>
                    <IoMdPricetag
                      id={styles._navbar_offcanvas_body_main_icons}
                    />{" "}
                    ₱300
                  </span>
                  {/*  */}
                </div>
              </Col>
            </Row>

            {/* CLOSE ICON */}
            <div id={styles._navbar_offcanvas_body_close_icons}>
              <AiOutlineClose
                id={styles._navbar_offcanvas_body_close_icons_ICON}
              />
            </div>
            {/* END */}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* END */}

      {/* ===================================================================== */}

      {/* CART OFFCANVAS */}

      {/* END */}
    </>
  );
};

export default Navigation;
