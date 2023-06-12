import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { app } from "../../firebase/firebase.config";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [user, setUser] = useState(null);
  console.log(user);
  const auth = getAuth(app);
  console.log(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
        };
        fetch("https://sports-club-server-pi.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
              navigate(from, {replace: true});
          });
        setUser(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="text-center my-5">
        <div className="divider font-bold">Social Login</div>
        <div>
          <button onClick={googleSignIn} className="btn btn-circle btn-outline">
            <FaGoogle className="text-purple-500"></FaGoogle>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
