import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Ghazanfar" },
  { meta: "last name", metaInfo: "Ali" },
  { meta: "Age", metaInfo: "24 Years" },
  { meta: "Nationality", metaInfo: "Pakistani" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Pakistan" },
  { meta: "phone", metaInfo: "+923002245404" },
  { meta: "whatsapp", metaInfo: "+923002245404" },
  { meta: "Skype", metaInfo: "" },
  { meta: "Email", metaInfo: "ghazanfarmalik345@gmail.com" },
  { meta: "languages", metaInfo: "Urdu, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
