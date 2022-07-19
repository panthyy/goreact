import { Link } from "react-router-dom";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "1rem",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hello">Hello</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
