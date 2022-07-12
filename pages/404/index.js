import styles from "../../styles/404.module.scss";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <>
      <div id={styles._404_page_not_found}>
        <Container fluid="lg" className="p-0">
          <div id={styles._not_found_box}>
            <h1>Whoops!</h1>
            <h2>404 Page Not Found</h2>
            <p>
              We&apos;re sorry. The page you were trying to access is no longer
              available or does not exist.
            </p>
            <a
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Back to homepage
            </a>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NotFound;
