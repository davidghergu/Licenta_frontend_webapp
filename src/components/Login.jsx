import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

const LOGIN_URL = "/api/login";

const Login = () => {
  const { setAuth,persist,setPersist } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [user, setUser] = useState("");
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        body: JSON.stringify({ nume: user, parola: password }),
        headers: { "Content-Type": "application/json" },
      });
      const utiliz = await response.json();
      const token = utiliz[0]._id;
      const roles = [utiliz[0].rol];
      setAuth({ user, password, roles, token });
      console.log({ user, password, roles, token });
      setUser("");
      setPwd("");
      sessionStorage.setItem("user",{user,roles,token});
      navigate("/lounge");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //       const response = await fetch(LOGIN_URL, {
  //       method: "POST",
  //       body: JSON.stringify({ nume: user, parola: password }),
  //       headers: { "Content-Type": "application/json" },
  // });
  //       const utiliz = await response.json();
  //       console.log(utiliz);
  //       const token = utiliz.token;
  //       const roles = [utiliz.role];
  //       setAuth({ user, password, roles, token });
  //       setUser("");
  //       setPwd("");
  //       navigate("/lounge");
  //     } catch (err) {
  //       if (!err?.response) {
  //         setErrMsg("No Server Response");
  //       } else if (err.response?.status === 400) {
  //         setErrMsg("Missing Username or Password");
  //       } else if (err.response?.status === 401) {
  //         setErrMsg("Unauthorized");
  //       } else {
  //         setErrMsg("Login Failed");
  //       }
  //     }
  //   };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className=" bg-gray-100 rounded-lg p-8 flex flex-col  mt-10 mx-auto">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Name</label>
            <input
              type="text"
              id="full-name"
              onChange={(e) => setUser(e.target.value)}
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPwd(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Login-san
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Literally you probably haven't heard of them jean shorts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
