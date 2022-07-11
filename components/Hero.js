import styles from "../styles/Hero.module.scss";
import { Container } from "react-bootstrap";
import Select from "react-select";
import { useRouter } from "next/router";

// import { useEffect, useState } from "react";

const Hero = () => {
  const router = useRouter();

  const options = [
    {
      value: "62c66bd88d049cd8cc617d02",
      label: "HTML Course | From Beginners to Advance",
    },
    {
      value: "62ca6c94a922082ec19bac08",
      label: "Data Science A-Z: Real-Life Data Science",
    },
    {
      value: "62ca7ae9a922082ec19bae37",
      label: "Beginner Nikon Digital SLR Photography",
    },
    {
      value: "62ca8010a922082ec19bae85",
      label: "Web Design for Beginners: HTML/CSS",
    },
    {
      value: "62ca87b4a922082ec19baf06",
      label: "Graphic Design Masterclass - Learn GREAT Design",
    },
    {
      value: "62ca8b6da922082ec19baf25",
      label: "Complete FL Studio Megacourse: Masterclass",
    },
    {
      value: "62ca8feba922082ec19baf4a",
      label: "Introduction to Football (Soccer) Tactics",
    },
    {
      value: "62ca938da922082ec19baf56",
      label: "Business: Fundamentals Lessons from a CEO",
    },
    {
      value: "62ca98faa922082ec19baf94",
      label: "Filipino Course: Learn Filipino for Beginners",
    },
  ];

  const handleSearchCourse = (course) => {
    if (typeof course?.value !== "undefined" || course?.value !== null) {
      router.replace({
        pathname: "/please-wait",
        query: { id: course?.value },
      });
    }

    // console.log(searchCourse);
  };

  // Photography
  const photography = () => {
    router.replace({
      pathname: "/please-wait",
      query: { id: "62ca7ae9a922082ec19bae37" },
    });
  };

  // End

  // Web Design
  const web_design = () => {
    router.replace({
      pathname: "/please-wait",
      query: { id: "62ca8010a922082ec19bae85" },
    });
  };
  // End

  // Web Development
  const web_dev = () => {
    router.replace({
      pathname: "/please-wait",
      query: { id: "62c66bd88d049cd8cc617d02" },
    });
  };
  // End

  // Graphic Design
  const graphic_design = () => {
    router.replace({
      pathname: "/please-wait",
      query: { id: "62ca87b4a922082ec19baf06" },
    });
  };
  // End

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
              <span
                className={styles._auto_complete_suggestions_tags}
                onClick={photography}
              >
                Photography
              </span>
              <span
                className={styles._auto_complete_suggestions_tags}
                onClick={web_design}
              >
                Web Design
              </span>
              <span
                className={styles._auto_complete_suggestions_tags}
                onClick={web_dev}
              >
                Web Development
              </span>
              <span
                className={styles._auto_complete_suggestions_tags}
                onClick={graphic_design}
              >
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
