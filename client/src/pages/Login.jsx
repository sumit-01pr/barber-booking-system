import {
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  Scissors,
  Mail,
  Lock,
} from "lucide-react";

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

  const [loading,
    setLoading] =
      useState(false);

  const [formData,
    setFormData] =
      useState({
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
          await loginUser(
            formData
          );

       setUser(data.user)

localStorage.setItem(
  "user",
  JSON.stringify(data.user)
)

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

    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-black
      via-zinc-950
      to-zinc-900
      px-4
    "
    >

      <div
        className="
        w-full
        max-w-md
        bg-zinc-900/70
        backdrop-blur-2xl
        border
        border-zinc-800
        rounded-3xl
        p-8
        shadow-[0_0_60px_rgba(0,0,0,0.6)]
      "
      >

        <div
          className="
          flex
          flex-col
          items-center
          mb-10
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
            mb-5
            shadow-lg
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
            text-4xl
            font-bold
            text-white
            tracking-tight
          "
          >
            Welcome Back
          </h1>

          <p
            className="
            text-zinc-400
            mt-3
            text-sm
          "
          >
            Login to continue booking
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
            bg-zinc-950/70
            border
            border-zinc-800
            rounded-2xl
            px-4
            focus-within:border-white
            transition-all
            duration-300
          "
          >

            <Mail
              className="
              text-zinc-500
            "
              size={18}
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
              className="
              w-full
              bg-transparent
              border-none
              outline-none
              shadow-none
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
            bg-zinc-950/70
            border
            border-zinc-800
            rounded-2xl
            px-4
            focus-within:border-white
            transition-all
            duration-300
          "
          >

            <Lock
              className="
              text-zinc-500
            "
              size={18}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="off"
              className="
              w-full
              bg-transparent
              border-none
              outline-none
              shadow-none
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
            rounded-2xl
            bg-white
            text-black
            font-semibold
            hover:bg-zinc-200
            hover:scale-[1.02]
            active:scale-[0.98]
            transition-all
            duration-300
            cursor-pointer
            disabled:opacity-70
          "
          >

            {
              loading
                ? "Logging In..."
                : "Login"
            }

          </button>

        </form>

        <p
          className="
          text-center
          text-zinc-400
          mt-8
          text-sm
        "
        >

          Don't have an account?

          <Link
            to="/register"
            className="
            text-white
            font-medium
            ml-2
            hover:text-zinc-300
            transition
          "
          >
            Register
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Login;