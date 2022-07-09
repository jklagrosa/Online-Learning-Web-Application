import styles from "../styles/Hero.module.scss";
import { Container } from "react-bootstrap";
import Select from "react-select";

import { useEffect, useState } from "react";

const Hero = () => {
  const options = [
    { value: "HTML TYPE SHIT", label: "HTML TYPE SHIT" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleSearchCourse = (value) => {
    console.log(value?.value);
    // console.log(searchCourse);
  };

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
              <div className={styles._auto_complete_input_wrapper}>
                {/* ########### */}
                <Select
                  options={options}
                  isClearable={true}
                  isSearchable={true}
                  placeholder="Search for anything"
                  className="react-select-container"
                  classNamePrefix="react-select"
                  onChange={handleSearchCourse}
                />
                {/* ########### */}
              </div>
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
