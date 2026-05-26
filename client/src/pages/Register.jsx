import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import toast
from "react-hot-toast";

import {
  registerUser,
} from "../services/authService";

function Register() {

  const navigate =
    useNavigate();

  const [formData,
    setFormData] =
      useState({

        name: "",
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
          await registerUser(
            formData
          );

        toast.success(
          data.message
        );

        navigate("/login");

      } catch (error) {

        toast.error(
          error.response?.data?.message
          || "Registration failed"
        );

      } finally {

        setLoading(false);

      }

    };

  return (

    <div>

      <h1>
        Register
      </h1>

      <form
        onSubmit={
          handleSubmit
        }
      >

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

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
              : "Register"
          }

        </button>

      </form>

    </div>

  );

}

export default Register;