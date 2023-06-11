import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
//   const isAdmin = true;
    const [isAdmin] = useAdmin();
    const isInstructor = true;
  return (
    <div className="drawer lg:drawer-open bg-orange-100">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-5 w-80 h-full bg-base-300 gap-6 text-base-content">
          {/* Sidebar content here */}
          {
                      isInstructor ? <>
                      <li><NavLink to='addclass'>Add a Class</NavLink></li>
                      <li><NavLink to='/myclasses'>My Classes</NavLink></li>
                      </> :   <>
              <li>
                <NavLink>User Home</NavLink>
              </li>
              <li>
                <NavLink>Payment History</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myclasses">My Classes</NavLink>
              </li>
            </>
          }
          {isAdmin ? (
            <>
              <li>
                <NavLink>Manage Classes</NavLink>
              </li>
              <li>
                <NavLink to='manageusers'>Manage Users</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink>User Home</NavLink>
              </li>
              <li>
                <NavLink>Payment History</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myclasses">My Classes</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
