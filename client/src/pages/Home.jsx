import {
  useAuth,
} from "../context/AuthContext";

function Home() {

  const {
    user,
    logout,
  } = useAuth();

  return (

    <div
      className="
      min-h-screen
      flex
      flex-col
      items-center
      justify-center
      gap-5
    "
    >

      <h1
        className="
        text-4xl
        font-bold
      "
      >
        Welcome
        {" "}
        {user?.name}
      </h1>

      <button
        onClick={logout}
        className="
        bg-black
        text-white
        px-6
        py-3
        rounded-lg
      "
      >
        Logout
      </button>

    </div>

  );

}

export default Home;