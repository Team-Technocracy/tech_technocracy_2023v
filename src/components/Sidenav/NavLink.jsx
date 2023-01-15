import navstyles from "./navstyles.module.css";

const NavLink = ({ path, name }) => {
  return (
    <a href={path} className={navstyles.navitem}>
      <span className={navstyles.navlink}></span>
      <span className={navstyles.navlink_after}>{name}</span>
    </a>
  );
};

export default NavLink;
