import React from "react";

const experienceContent = [
  {
    year: "   Nov 2021 - Present",
    position: " Mern Stack Developer",
    compnayName: "Hahsone Digital",
    details: `  In this role I am completey focused on bakend, but i also handle some integration parts.`,
  },
  {
    year: "Sep 2021 - Nov 2021",
    position: " Software Engineer (Mern)",
    compnayName: "Unplar Technologies",
    details: `I this role my main responsibilties was the funtionality part of serverless React Native App with firebase.`,
  },
  {
    year: "Jan 2021 - Sep 2021",
    position: "Mern Stack Developer",
    compnayName: "Tresmind Solutions",
    details: `My main responsibilites was api integration.`,
  },
  {
    year: "Jul 2021 - Dec 2021",
    position: "Mern Stack Developer (Internee)",
    compnayName: "Hnh Tech Solutions",
    details: `My main responsibilites was api integration.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
