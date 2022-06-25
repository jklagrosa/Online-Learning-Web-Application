import styles from "../styles/Hero.module.scss";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
const Hero = () => {
  return (
    <>
      <div id={styles._hero_wrapper}>
        <Container fluid="lg" className="p-0">
          <div id={styles._hero_details_wrapper}>
            <h1>Education is the biggest luxury</h1>
            <p className={styles._hero_para}>
              Educating all understudies to accomplish today and tomorrow in a
              worldwide network and economy
            </p>
            <div className={styles._auto_complete_wrapper}>
              <InputGroup className={styles._auto_complete_input_wrapper}>
                <FormControl
                  placeholder="Search Courses"
                  aria-label="Search Courses"
                  className={styles._auto_complete_input}
                />
                <Button variant="primary">
                  <BsSearch color="white" />
                </Button>
              </InputGroup>
            </div>
            <div className={styles._auto_complete_suggestions}>
              <p className={styles._auto_complete_suggestions_title}>
                Suggestions:
              </p>
              <span className={styles._auto_complete_suggestions_tags}>
                Programming
              </span>
              <span className={styles._auto_complete_suggestions_tags}>
                Web Design
              </span>
              <span className={styles._auto_complete_suggestions_tags}>
                Web Development
              </span>
              <span className={styles._auto_complete_suggestions_tags}>
                Graphic Design
              </span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
