import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/Nav.module.scss";
import { BsSuitHeartFill, BsCartFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { useRouter } from "next/router";
import { Tooltip } from "antd";

const Navigation = () => {
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
              <Nav.Link href="#" className={styles._wish_n_cart}>
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
    </>
  );
};

export default Navigation;
