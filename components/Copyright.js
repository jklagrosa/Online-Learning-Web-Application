import styles from "../styles/Copyright.module.scss";
import { Container } from "react-bootstrap";

const Copyright = () => {
  return (
    <>
      <div id={styles._copyright_wrapper}>
        <Container fluid="lg" className="p-0">
          <p>
            Copyright &copy; {new Date().getFullYear()} JK Lagrosa. All Rights
            Reserved.
          </p>
        </Container>
      </div>
    </>
  );
};

export default Copyright;
