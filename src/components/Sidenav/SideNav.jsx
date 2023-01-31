import NavLink from "./NavLink";
import styles from "./navstyles.module.css";

const navList = [
  {
    to: "/#",
    text: "Home"
  },
  {
    to: "/aavartan",
    text: "Aavartan"
  },
  {
    to: "/events",
    text: "Events"
  },
  {
    to: "/#journey",
    text: "Journey"
  },
  {
    to: "/#spons",
    text: "Sponsors"
  },
  {
    to: "/#team",
    text: "Team"
  },
  {
    to: "/#footer",
    text: "Contact"
  }
];

const SideNav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {navList.map((item, index) => {
          return (
            <li key={index}>
              <NavLink path={item.to} name={item.text} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideNav;
