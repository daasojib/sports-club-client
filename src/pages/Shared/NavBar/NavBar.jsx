import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import App from "../../../App";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navList = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors ">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <Link to="/dashboard/myclasses">
          Dashboard
        </Link>
      </li>
      <li>
        
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 max-w-screen-xl md:text-white text-red-500 bg-blue-700">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <App></App>
              {navList}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case md:text-xl font-bold"
          >
            <img className="md:w-14 md:ms-auto -ms-10 w-10" src={logo} alt="" />
            Sports Club
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navList} <App></App></ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button onClick={handleLogOut} className="btn btn-ghost">
                <Link to="">LogOut</Link>
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-success">
                <Link to="/login">Login</Link>
              </button>
            </>
          )}
          {user ? (
            <>
              <img className="w-10 h-10 rounded" src={user?.photoURL} alt="" />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
