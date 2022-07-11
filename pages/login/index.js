import styles from "../../styles/LOGIN.module.scss";
import { Container } from "react-bootstrap";

const LogIn = () => {
  return (
    <>
      <div id={styles._login_wrapper}>
        <Container fluid="lg" className="p-0">
          <div className={styles._login_box_}>
            <h3>
              Edu<span>kasyon</span>
            </h3>
            <div className={styles._login_form_}>
              <label>Username</label>
              <input type="text" placeholder="Username" />

              <label>Password</label>
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LogIn;
