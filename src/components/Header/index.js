import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  const listReminders = useSelector((state) => state);
  return (
    <nav className="header">
      <div className="header__title">
        <Link to="/" style={{ textDecoration: "none" }}>
          Home page
        </Link>
      </div>
      <div>{listReminders.length}</div>
      <div>
        <Link to={"/list-priority"}>List Priority</Link>
      </div>
    </nav>
  );
}

export default Header;
