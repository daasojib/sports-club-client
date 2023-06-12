import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useInstructor from "../hooks/useInstructor";
import { Navigate, useLocation } from "react-router-dom";


const InstructorRoute = ({ children }) => {
  const { user, load } = useContext(AuthContext);
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation();

  if (load || isInstructorLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isInstructor) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
