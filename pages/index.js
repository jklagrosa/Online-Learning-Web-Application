import Navigation from "../components/Nav";
import Hero from "../components/Hero";
import GetStarted from "../components/GetStarted";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import FAQ from "../components/FAQ";
import Featured from "../components/Featured";
import Latest from "../components/Latest";

import Dbconnection from "../db/conn";
import Course from "../models/course";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { GET_ALL_COURSE } from "../store/course";

import axios from "axios";
import { BASE_URL, headersOpts } from "../config/others";
import { GET_WISHLIST } from "../store/wishlist";
import { GET_CART } from "../store/cart";

export async function getStaticProps() {
  await Dbconnection();

  const GET_ALL_COURSE = await Course.find({});
  if (!GET_ALL_COURSE) {
    return {
      props: {
        course_data: JSON.stringify(null),
      },
    };
  }

  return {
    props: {
      course_data: JSON.stringify(GET_ALL_COURSE),
    },
  };
}

export default function Home({ course_data }) {
  const dispatch = useDispatch();
  const parsed_data = course_data ? JSON.parse(course_data) : false;

  useEffect(() => {
    if (parsed_data) {
      dispatch(GET_ALL_COURSE(parsed_data));
    }
  }, []);

  // *********** GET UPDATED WISHLIST DATA *********************
  const GET_UPDATED_WISHLIST_DATA = async () => {
    const response = await axios.get(`${BASE_URL}/api/wishlist`, headersOpts);
    if (!response.data.success) {
      dispatch(GET_WISHLIST(null));
    }

    if (response && response.data && response.data.success) {
      dispatch(GET_WISHLIST(response.data.data));
    }

    // console.log(`Hello from Wishlist: ${JSON.stringify(response.data.data)}`);

    return response.data;
  };

  // ************************ END ******************************

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
    GET_UPDATED_WISHLIST_DATA();
    GET_UPDATED_CART_DATA();
  }, []);

  // ************************ END ******************************

  return (
    <>
      <Navigation />
      <Hero />
      <Latest />
      <GetStarted />
      <Featured />
      <Events />
      <FAQ />
      <Footer />
      <Copyright />
    </>
  );
}
