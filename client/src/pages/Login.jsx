import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import toast
from "react-hot-toast";

import {
  loginUser,
} from "../services/authService";

import {
  useAuth,
} from "../context/AuthContext";

function Login() {

  const navigate =
    useNavigate();

  const {
    setUser,
  } = useAuth();

  const [formData,
    setFormData] =
      useState({

        email: "",
        password: "",

      });

  const [loading,
    setLoading] =
      useState(false);

  const handleChange =
    (event) => {

      setFormData({
        ...formData,

        [event.target.name]:
          event.target.value,
      });

    };

  const handleSubmit =
    async (event) => {

      event.preventDefault();

      try {

        setLoading(true);

        const data =
          await loginUser(
            formData
          );

        setUser(
          data.user
        );

        toast.success(
          data.message
        );

        navigate("/");

      } catch (error) {

        toast.error(
          error.response?.data?.message
          || "Login failed"
        );

      } finally {

        setLoading(false);

      }

    };

  return (

    <div>

      <h1>
        Login
      </h1>

      <form
        onSubmit={
          handleSubmit
        }
      >

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">

          {
            loading
              ? "Loading..."
              : "Login"
          }

        </button>

      </form>

    </div>

  );

}

export default Login;