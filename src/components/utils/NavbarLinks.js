import { Fragment } from "react";

const data = [
  {
    to: "/#",
    text: "Home",
  },
  // {
  //   to: "/#caseops",
  //   text: "CASE OPS",
  // },
  // {
  //   to: "/#smack",
  //   text: "SMACK D-BUG",
  // },
  {
    to:'/aavartan',
    text: "Aavartan"
  },
  {
    to: "/#sponsors",
    text: "Sponsors",
  },
  {
    to: "/#team",
    text: "Team",
  },
  {
    to: "/#contact-us",
    text: "Contact",
  },
];
export const NavbarLinks = ({ setOpen }) => {
  const closeNav = () => {
    if (setOpen) {
      setOpen(false);
    }
  };

  return (
    <Fragment>
      {data.map((ele, index) => (
        <li key={index}>
          <a href={ele.to} onClick={closeNav}>
            {ele.text}
          </a>
        </li>
      ))}
    </Fragment>
  );
};
