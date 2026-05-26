import DashboardLayout
from "../layouts/DashboardLayout";

import {
  useAuth,
} from "../context/AuthContext";

function Home() {

  const {
    user,
  } = useAuth();

  return (

    <DashboardLayout>

      <div>

        <h1
          className="
          text-3xl
          font-bold
          mb-2
        "
        >
          Welcome back,
          {" "}
          {user?.name}
        </h1>

        <p
          className="
          text-zinc-500
        "
        >
          Manage your barber booking system.
        </p>

      </div>

    </DashboardLayout>

  );

}

export default Home;