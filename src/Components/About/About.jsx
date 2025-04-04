import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import profile_img from "../../assets/about_profile.svg";
import kartik_img from "../../assets/krtk_img.JPEG";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          {/* <img src={profile_img} alt="" /> */}
          <img src={kartik_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Skilled Software Engineer specializing in frontend development and
              UI/UX design. Proficient in HTML, CSS, JavaScript, and React, with
              a focus on creating user-centered, scalable, and responsive
              applications. Excels in fast-paced settings, collaborating across
              teams to deliver impactful software solutions. Ready to bring
              technical expertise and problem-solving to a growth-focused
              organization
            </p>
            <p>
              My passion for frontend development is the enthusiasm and
              dedication I bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "70% " }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p> <hr style={{ width: "60% " }} />
            </div>
            <div className="about-skill">
              <p>HTMLS & CSS</p> <hr style={{ width: "50% " }} />
            </div>
            <div className="about-skill">
              <p>Redux</p> <hr style={{ width: "45% " }} />
            </div>
            <div className="about-skill">
              <p>Tailwind CSS</p> <hr style={{ width: "60% " }} />
            </div>
            <div className="about-skill">
              <p>React-Router</p> <hr style={{ width: "50% " }} />
            </div>
            <div className="about-skill">
              <p>Git</p> <hr style={{ width: "55% " }} />
            </div>
            {/* <div className="about-skill">
              <p>Next js</p> <hr style={{ width: "50% " }} />
            </div> */}
          </div>
        </div>
      </div>
      <div className="about-achievements">
        {/* <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERINECE</p>
        </div> */}
        <hr />
        <div className="about-achievement">
          <h1>9</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
