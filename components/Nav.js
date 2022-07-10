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

import { AiFillStar, AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdPlayLesson } from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";

import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import { BASE_URL, headersOpts } from "../config/others";
import { toast } from "react-toastify";
import { GET_WISHLIST } from "../store/wishlist";
import { GET_CART, CART_COURSE_ID, RAN_GET_CART_AGAIN } from "../store/cart";
import { RESET_OFFCANVAS } from "../store/offcanvas";

const Navigation = () => {
  const [showWishlist, setShowWishlist] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const [showDrawer, setShowDrawer] = useState(false);

  // WISHLIST STATE
  const [newWishlist, setNewWishlist] = useState(null);
  // END

  // #################

  // CART STATE
  const [newCart, setNewCart] = useState(null);
  // END

  // GET ALL WISHLIST FROM STORE
  const { wishlist } = useSelector((state) => state?.wishlist);
  // END

  // #############################

  // GET ALL CART FROM STORE
  const { cart } = useSelector((state) => state?.cart);
  // END

  // #############################

  // GET ALL OFFCANVAS STATE
  const { cart_oc } = useSelector((state) => state?.drawer);
  // END

  useEffect(() => {
    if (wishlist) {
      let new_arr = Array.from(wishlist).reverse();
      setNewWishlist(new_arr);
    }
  }, [wishlist]);

  // ####################

  useEffect(() => {
    if (cart) {
      let new_arr = Array.from(cart).reverse();
      setNewCart(new_arr);
    }
  }, [cart]);

  // ########################################
  useEffect(() => {
    if (cart_oc) {
      setShowCart(true);
    }
  }, [cart_oc]);

  const dispatch = useDispatch();

  // #########################################

  // DRAWER LINKS
  const handleCloseDrawer = () => setShowDrawer(false);
  const handleShowDrawerOpen = () => setShowDrawer(true);

  // END

  // ===================================================================

  // WISHLIST
  const handleCloseWishlist = () => setShowWishlist(false);
  const handleShowWishlist = () => setShowWishlist(true);
  // END
  // ===========================================================

  // CART
  const handleCloseCart = () => {
    setShowCart(false);
    dispatch(RESET_OFFCANVAS(false));
  };
  const handleShowCart = () => setShowCart(true);
  // END

  const router = useRouter();

  // ################################################################################

  const handleSeeMore = (id) => {
    router.push({
      pathname: "/please-wait",
      query: { id },
    });
  };

  // @@@@@@@@@@@@@@@@@

  const handleWatchCourseFromCart = (id) => {
    router.push({
      pathname: "/please-wait-watch",
      query: { id },
    });
  };

  // ########### REMOVE FROM YOUR WISHLIST ###################

  const REMOVE_FROM_YOUR_WISHLIST = async (id) => {
    const response = await axios.post(
      `${BASE_URL}/api/del-wishlist`,
      { id },
      headersOpts
    );

    if (!response.data.success) {
      toast.error("Please try again later.", {
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
      // await GET_UPDATED_WISHLIST_DATA();

      // console.log(response.data.data);

      dispatch(GET_WISHLIST(response.data.data));
    }

    return response.data;
  };
  // ############ END ########################

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  // ########### REMOVE FROM YOUR CART ###################
  const REMOVE_FROM_CART = async (id) => {
    const response = await axios.post(
      `${BASE_URL}/api/del-cart`,
      { id },
      headersOpts
    );

    if (!response.data.success) {
      toast.error("Please try again later.", {
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
      // await GET_UPDATED_WISHLIST_DATA();

      // console.log(response.data.data);

      dispatch(GET_CART(response.data.data));
      dispatch(CART_COURSE_ID(response.data.data._id));

      dispatch(RAN_GET_CART_AGAIN(true));
    }

    return response.data;
  };
  // ############ END ########################

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
                  onClick={handleShowWishlist}
                />
              </Tooltip>
            </Nav.Link>
            {/* === */}
            <Nav.Link href="#" className={styles._wish_n_cart}>
              <Tooltip title="Your Cart">
                <BsCartFill
                  id={styles._navbar_icon_cart}
                  className={styles._navbar_icon_ONLY_SHOW_BELOW_99PX}
                  onClick={handleShowCart}
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
            onClick={handleShowDrawerOpen}
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
              <Nav.Link
                href="#"
                className={styles._wish_n_cart}
                onClick={handleShowCart}
              >
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
          {newWishlist?.length === 0 && (
            <>
              <div id={styles._NO_DATA_AVAILABLE_}>
                <h6>Your Wishlist is Empty.</h6>
              </div>
            </>
          )}
          {/* ========================================== */}

          {/* IF DATA IS AVAILABLE */}
          {newWishlist?.length > 0 && (
            <>
              {newWishlist?.map((wish) => (
                <>
                  <div id={styles._navbar_offcanvas_body_COLS} key={wish._id}>
                    <Row className="gx-2 gy-0">
                      <Col xs={6}>
                        <abbr
                          title="Click to see more details"
                          style={{ all: "unset" }}
                        >
                          <img
                            src={`/img/${wish.course_img}`}
                            alt={wish.title}
                            onClick={() => handleSeeMore(wish._id)}
                          />
                        </abbr>
                      </Col>
                      {/* ====== */}
                      <Col xs={6}>
                        <h6>{`${wish.title.substring(0, 18)}...`}</h6>

                        <div id={styles._navbar_offcanvas_body_ICONS}>
                          <span>
                            <FaChalkboardTeacher
                              id={styles._navbar_offcanvas_body_main_icons}
                            />{" "}
                            {wish.inst}
                          </span>
                          <br />
                          {/*  */}
                          <span>
                            <AiFillStar
                              id={styles._navbar_offcanvas_body_main_icons}
                            />{" "}
                            {wish.star}/5
                          </span>
                          <br />
                          {/*  */}
                          <span>
                            <MdPlayLesson
                              id={styles._navbar_offcanvas_body_main_icons}
                            />{" "}
                            {wish.lessons} Lessons
                          </span>
                          <br />
                          {/*  */}
                          <span>
                            <BsPersonFill
                              id={styles._navbar_offcanvas_body_main_icons}
                            />{" "}
                            {wish.enrolled_students} Enrolled students
                          </span>
                          <br />
                          {/*  */}
                          <span>
                            <IoMdPricetag
                              id={styles._navbar_offcanvas_body_main_icons}
                            />{" "}
                            ₱{wish.price}
                          </span>
                          {/*  */}
                        </div>
                      </Col>
                    </Row>

                    {/* CLOSE ICON */}
                    <div id={styles._navbar_offcanvas_body_close_icons}>
                      <abbr
                        title={`Remove ${wish.title} from your wishlist.`}
                        style={{ all: "unset" }}
                      >
                        <AiOutlineClose
                          id={styles._navbar_offcanvas_body_close_icons_ICON}
                          onClick={() => REMOVE_FROM_YOUR_WISHLIST(wish._id)}
                        />
                      </abbr>
                    </div>
                    {/* END */}
                  </div>
                </>
              ))}
            </>
          )}
          {/* END */}
          {/* ############################################# */}
        </Offcanvas.Body>
      </Offcanvas>
      {/* END */}

      {/* ===================================================================== */}

      {/* CART OFFCANVAS */}
      <Offcanvas
        show={showCart}
        onHide={handleCloseCart}
        id={styles._navbar_offcanvas_wrapper}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={styles._navbar_offcanvas_title}>
            Cart
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body id={styles._navbar_offcanvas_body}>
          {newCart?.length === 0 && (
            <>
              <div id={styles._NO_DATA_AVAILABLE_}>
                <h6>Enrolled courses are shown here.</h6>
              </div>
            </>
          )}
          {/* ========================================== */}

          {newCart?.length > 0 && (
            <>
              {newCart?.map((cart) => (
                <>
                  <div id={styles._navbar_offcanvas_body_COLS} key={cart._id}>
                    <Row className="gx-2 gy-0">
                      <Col xs={6}>
                        <abbr
                          title="Click to watch course"
                          style={{ all: "unset" }}
                        >
                          <img
                            src={`/img/${cart.course_img}`}
                            onClick={() => handleWatchCourseFromCart(cart._id)}
                          />
                        </abbr>
                      </Col>
                      {/* ====== */}
                      <Col xs={6}>
                        <h6>{`${cart.title.substring(0, 18)}...`}</h6>

                        <div id={styles._navbar_offcanvas_body_ICONS}>
                          <span>
                            <AiOutlineCheck
                              id={styles._navbar_offcanvas_body_main_icons}
                              style={{ color: "#e6c229" }}
                            />{" "}
                            {cart.status ? "Enrolled" : "Not Enrolled"}
                          </span>
                          <br />
                          {/*  */}

                          <span>
                            <FaChalkboardTeacher
                              id={styles._navbar_offcanvas_body_main_icons}
                              style={{ color: "#e6c229" }}
                            />{" "}
                            {cart.inst}
                          </span>
                          <br />
                          {/*  */}
                          <span>
                            <AiFillStar
                              id={styles._navbar_offcanvas_body_main_icons}
                              style={{ color: "#e6c229" }}
                            />{" "}
                            {cart.star}/5
                          </span>
                          <br />
                          {/*  */}
                          <span>
                            <MdPlayLesson
                              id={styles._navbar_offcanvas_body_main_icons}
                              style={{ color: "#e6c229" }}
                            />{" "}
                            {cart.lessons} Lessons
                          </span>
                          <br />

                          {/*  */}

                          <span>
                            <BsPersonFill
                              id={styles._navbar_offcanvas_body_main_icons}
                              style={{ color: "#e6c229" }}
                            />{" "}
                            {cart.enrolled_students} Enrolled students
                          </span>
                          <br />
                          {/*  */}
                        </div>
                      </Col>
                    </Row>

                    {/* CLOSE ICON */}
                    <div id={styles._navbar_offcanvas_body_close_icons}>
                      <abbr
                        title={`Unenroll from this course titled "${cart.title}."`}
                        style={{ all: "unset" }}
                      >
                        <AiOutlineClose
                          id={styles._navbar_offcanvas_body_close_icons_ICON}
                          onClick={() => REMOVE_FROM_CART(cart._id)}
                        />
                      </abbr>
                    </div>
                    {/* END */}
                  </div>
                </>
              ))}
            </>
          )}

          {/* ========================================== */}
        </Offcanvas.Body>
      </Offcanvas>
      {/* END */}

      {/* ================================================================================ */}
      {/* ==========================OFFCANVAS SMALL DEVICES DRAWER========================= */}
      {/* ================================================================================ */}

      <Offcanvas show={showDrawer} onHide={handleCloseDrawer}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>EDUKASYON</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

      {/* ================================================================================ */}
      {/* ==============================END============================================== */}
      {/* ================================================================================ */}
    </>
  );
};

export default Navigation;
