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
          <Navbar.Brand href="#home" id={styles._navbar_logo}>
            <span>Edu</span>kasyon
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ outline: "none", border: "none" }}
          >
            <BiMenu id={styles._navbar_hamburger} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#" onClick={() => router.push("/")}>
                Home
              </Nav.Link>
              <Nav.Link href="#">Featured Courses</Nav.Link>
              <Nav.Link href="#">Top Sellers</Nav.Link>
              <Nav.Link href="#">Testimonials</Nav.Link>
              <Nav.Link href="#">Achievement</Nav.Link>
            </Nav>
            <Nav className="mx-auto">
              <Nav.Link
                href="#"
                onClick={() => router.push("/")}
                className={styles._navbar_login}
              >
                Login
              </Nav.Link>
              {/* === */}
              <Nav.Link href="#" className={styles._navbar_login}>
                <Tooltip title="Your Wishlist">
                  <BsSuitHeartFill id={styles._navbar_icon_wishlist} />
                </Tooltip>
              </Nav.Link>
              {/* === */}
              <Nav.Link href="#" className={styles._navbar_login}>
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
