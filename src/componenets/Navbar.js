import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("oauth-login-backend.herokuapp.com", "_self");
  };
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
           Hello App
        </Link>
      </span>
     </div>
  );
};

export default Navbar;