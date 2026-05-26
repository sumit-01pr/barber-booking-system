import {
  Calendar,
  DollarSign,
  Users,
  Scissors,
} from "lucide-react";

import DashboardLayout
from "../layouts/DashboardLayout";

import StatsCard
from "../components/StatsCard";

import AppointmentsTable
from "../components/AppointmentsTable";

import {
  useAuth,
} from "../context/AuthContext";

function Home() {

  const {
    user,
  } = useAuth();

  return (

    <DashboardLayout>

      <div
        className="
        mb-8
      "
      >

        <h1
          className="
          text-3xl
          font-bold
        "
        >
          Welcome back,
          {" "}
          {user?.name}
        </h1>

        <p
          className="
          text-zinc-500
          mt-2
        "
        >
          Here's what's happening today.
        </p>

      </div>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-5
        mb-8
      "
      >

        <StatsCard
          title="Total Appointments"
          value="120"
          icon={Calendar}
        />

        <StatsCard
          title="Revenue"
          value="₹45,000"
          icon={DollarSign}
        />

        <StatsCard
          title="Customers"
          value="80"
          icon={Users}
        />

        <StatsCard
          title="Services"
          value="12"
          icon={Scissors}
        />

      </div>

      <AppointmentsTable />

    </DashboardLayout>

  );

}

export default Home;