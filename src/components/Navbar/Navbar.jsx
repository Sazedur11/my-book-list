import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-green-500 border-b-1 border-green-500 font-bold"
            : "font-semibold"
        }
      >
        Home
      </NavLink>
      <NavLink 
      to={"/listedbooks"}
      className={({isActive})=>
        isActive ? "text-green-500 border-b-1 border-green-500 font-bold" : "font-semibold"
      }
      >
        Listed Books
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">My Books</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <Link className="btn bg-green-600 text-white" to={"/"}>
            Sing In
          </Link>
          <Link className="btn bg-cyan-500 text-white" to={"/"}>
            Sing Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
