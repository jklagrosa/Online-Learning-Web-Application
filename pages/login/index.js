import { useState, useEffect } from "react";
import styles from "../../styles/LOGIN.module.scss";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
import { BASE_URL, headersOpts } from "../../config/others";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { USER_DATA } from "../../store/user";

const LogIn = () => {
  const [username, setUsername] = useState("DemoUser");
  const [password, setPassword] = useState("demouser123");
  const [loading, setLoading] = useState(false);

  const [isUser, setIsUser] = useState(false);

  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    const parsed_uid = window.localStorage.getItem("uid")
      ? JSON.parse(window.localStorage.getItem("uid"))
      : null;

    if (parsed_uid !== null) {
      setIsUser(true);
      router.replace("/");
    }
  }, []);

  const handleLoginUser = async (e) => {
    e.preventDefault();

    setLoading(true);

    const response = await axios.post(
      `${BASE_URL}/api/user`,
      {
        username: username,
        password: password,
      },
      headersOpts
    );

    if (!response.data.success) {
      toast.error("Please try again later.", {
        position: "top-center",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setLoading(false);
    }

    if (response && response.data && response.data.success) {
      dispatch(USER_DATA(response.data.data._id));

      router.push("/");
    }

    return response.data;
  };

  return (
    <>
      <div id={styles._login_wrapper}>
        <Container fluid="lg" className="p-0">
          {/* IF USER IS NOT LOGGED IN */}
          {!isUser && (
            <>
              <div className={styles._login_box_}>
                <form onSubmit={handleLoginUser}>
                  <h3>
                    Edu<span>kasyon</span>
                  </h3>
                  <div className={styles._login_form_}>
                    <label>Username</label>
                    <input
                      type="text"
                      placeholder="Username"
                      defaultValue={username}
                      readOnly
                    />

                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      defaultValue={password}
                      readOnly
                    />

                    {!loading && (
                      <>
                        <button type="submit">Login as Demo User</button>
                      </>
                    )}

                    {/* ################## */}

                    {loading && (
                      <>
                        <button id={styles._login_btn_submit_loading}>
                          Please wait...
                        </button>
                      </>
                    )}

                    {/* ################## */}

                    <hr className={styles._divider_} />
                    <center>
                      <a onClick={() => router.replace("/")}>Back to home</a>
                    </center>
                  </div>
                </form>
              </div>
            </>
          )}

          {/* IF USER IS LOGGED IN */}
          {isUser && (
            <>
              <p id={styles._user_is_logged_in}>Please wait...</p>
            </>
          )}
          {/* END */}

          {/* END */}
        </Container>
      </div>
    </>
  );
};

export default LogIn;
