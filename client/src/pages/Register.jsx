import {
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  Scissors,
  User,
  Mail,
  Lock,
} from "lucide-react";

import toast
from "react-hot-toast";

import {
  registerUser,
} from "../services/authService";

function Register() {

  const navigate =
    useNavigate();

  const [loading,
    setLoading] =
      useState(false);

  const [formData,
    setFormData] =
      useState({
        name: "",
        email: "",
        password: "",
      });

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

    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-black
      via-zinc-900
      to-zinc-800
      px-4
    "
    >

      <div
        className="
        w-full
        max-w-md
        bg-white/10
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        p-8
        shadow-2xl
      "
      >

        <div
          className="
          flex
          flex-col
          items-center
          mb-8
        "
        >

          <div
            className="
            w-16
            h-16
            rounded-2xl
            bg-white
            flex
            items-center
            justify-center
            mb-4
          "
          >

            <Scissors
              className="
              text-black
            "
              size={30}
            />

          </div>

          <h1
            className="
            text-3xl
            font-bold
            text-white
          "
          >
            Create Account
          </h1>

          <p
            className="
            text-zinc-400
            mt-2
          "
          >
            Join Barber Booking Platform
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div
            className="
            flex
            items-center
            bg-white/5
            border
            border-white/10
            rounded-xl
            px-4
          "
          >

            <User
              className="
              text-zinc-400
            "
              size={18}
            />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="
              w-full
              bg-transparent
              outline-none
              py-4
              px-3
              text-white
              placeholder:text-zinc-500
            "
            />

          </div>

          <div
            className="
            flex
            items-center
            bg-white/5
            border
            border-white/10
            rounded-xl
            px-4
          "
          >

            <Mail
              className="
              text-zinc-400
            "
              size={18}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="
              w-full
              bg-transparent
              outline-none
              py-4
              px-3
              text-white
              placeholder:text-zinc-500
            "
            />

          </div>

          <div
            className="
            flex
            items-center
            bg-white/5
            border
            border-white/10
            rounded-xl
            px-4
          "
          >

            <Lock
              className="
              text-zinc-400
            "
              size={18}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="
              w-full
              bg-transparent
              outline-none
              py-4
              px-3
              text-white
              placeholder:text-zinc-500
            "
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="
            w-full
            py-4
            rounded-xl
            bg-white
            text-black
            font-semibold
            hover:bg-zinc-200
            transition
            duration-300
            cursor-pointer
          "
          >

            {
              loading
                ? "Creating Account..."
                : "Register"
            }

          </button>

        </form>

        <p
          className="
          text-center
          text-zinc-400
          mt-6
        "
        >

          Already have an account?

          <Link
            to="/login"
            className="
            text-white
            font-medium
            ml-2
            hover:underline
          "
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;