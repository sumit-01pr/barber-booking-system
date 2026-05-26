import {
  Scissors,
  LogOut,
} from "lucide-react";

import {
  useAuth,
} from "../context/AuthContext";

function Navbar() {

  const {
    user,
    logout,
  } = useAuth();

  return (

    <header
      className="
      h-16
      bg-white
      border-b
      border-zinc-200
      flex
      items-center
      justify-between
      px-6
      sticky
      top-0
      z-50
    "
    >

      <div
        className="
        flex
        items-center
        gap-3
      "
      >

        <div
          className="
          w-10
          h-10
          rounded-xl
          bg-black
          text-white
          flex
          items-center
          justify-center
        "
        >

          <Scissors size={20} />

        </div>

        <h1
          className="
          text-xl
          font-bold
        "
        >
          BarberBook
        </h1>

      </div>

      <div
        className="
        flex
        items-center
        gap-4
      "
      >

        <div
          className="
          text-right
        "
        >

          <p
            className="
            font-semibold
          "
          >
            {user?.name}
          </p>

          <p
            className="
            text-sm
            text-zinc-500
            capitalize
          "
          >
            {user?.role}
          </p>

        </div>

        <button
          onClick={logout}
          className="
          w-10
          h-10
          rounded-xl
          border
          border-zinc-200
          flex
          items-center
          justify-center
          hover:bg-zinc-100
          transition
        "
        >

          <LogOut size={18} />

        </button>

      </div>

    </header>

  );

}

export default Navbar;