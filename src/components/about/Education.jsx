import React from "react";

const educationContent = [
  {
    year: "2022 - in progress",
    degree: "MCS",
    institute: "VIRTUAL UNIVERSITY",
    details: `  This is a two years degree of computer science.`,
  },
  {
    year: "",
    degree: "Responsive Web Design",
    institute: "FreeCodeCamp",
    details: `This is responsvice web design certificate.
    https://www.freecodecamp.org/certification/fcc15bcc7bf-58e6-451e-ad86-0eae7ee6abda/responsive-web-design
    `,
  },
  {
    year: "",
    degree: "Mern Stack Certificate",
    institute: "Udemy",
    details: `This is responsvice web design certificate.`,
  },
  {
    year: "2020",
    degree: "BACHELOR OF COMMERCE ",
    institute: "University Of Karachi",
    details: `This is a two year associate degree of commerce`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
