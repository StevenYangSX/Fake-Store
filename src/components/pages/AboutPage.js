import React from "react";

const AboutPage = () => {
  return (
    <div className="container text-center">
      <hr />
      <h2>About This Application</h2>
      <hr />
      <h6>
        This is a MERN full-stack application aims to practice my ability to
        design, plan, implement, test, maintain a raletively large application.
      </h6>
      <h6>
        {" "}
        It involves lots of technologies and framworks/libraries such as{" "}
        <strong>Express, Mongoose, React, Redux, Bootstrap, and etc..</strong>
      </h6>
    </div>
  );
};

export default AboutPage;
