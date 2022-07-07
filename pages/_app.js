import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

import { Provider } from "react-redux";
import { store } from "../store/store";

import Dbconnection from "../db/conn";
import Course from "../models/course";
import { useDispatch } from "react-redux";

export async function getStaticProps() {
  
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
