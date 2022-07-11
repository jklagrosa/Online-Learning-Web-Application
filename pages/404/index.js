import styles from "../../styles/404.module.scss";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <>
      <div id={styles._404_page_not_found}>
        <Container fluid="lg" className="p-0">
          <h1>Whoops!</h1>
          <h2>404 Page Not Found</h2>
        </Container>
      </div>
    </>
  );
};

export default NotFound;
