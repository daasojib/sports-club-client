import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password).then((data) => {
      const user = data.user;
      console.log(user);
      Swal.fire({
        title: 'Login Successful',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      navigate(from, {replace: true})
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200 w-3/4 mx-auto">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Login!!</h1>
          <p className="py-6">
            Please Login to{" "}
            <span className="text-red-600 font-bold">Sports Club</span> to
            access the best sports training and learning environment.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-400">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", { required: true })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-400">Password is required</span>
              )}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="p-5 text-center">
            New here?<Link className="text-primary font-bold" to="/signup"> Create an account</Link>
          </p>
        <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
