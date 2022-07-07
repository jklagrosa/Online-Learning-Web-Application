import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import { store } from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
