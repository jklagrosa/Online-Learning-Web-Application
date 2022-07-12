import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import { store } from "../store/store";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Online Learning Web Application</title>
      </Head>

      <ToastContainer />

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
