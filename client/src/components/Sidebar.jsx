import {
  LayoutDashboard,
  Calendar,
  Scissors,
  Users,
} from "lucide-react";

import {
  NavLink,
} from "react-router-dom";

import {
  useAuth,
} from "../context/AuthContext";

function Sidebar() {

  const {
    user,
  } = useAuth();

  const links = [

    {
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/",
    },

    {
      label: "Appointments",
      icon: Calendar,
      path: "/appointments",
    },

  ];

  if (
    user?.role === "admin"
  ) {

    links.push(
      {
        label: "Services",
        icon: Scissors,
        path: "/services",
      },

      {
        label: "Users",
        icon: Users,
        path: "/users",
      }
    );

  }

  return (

    <aside
      className="
      w-64
      bg-white
      border-r
      border-zinc-200
      p-5
      hidden
      md:block
    "
    >

      <nav
        className="
        flex
        flex-col
        gap-2
      "
      >

        {
          links.map(
            (link) => {

              const Icon =
                link.icon;

              return (

                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({
                    isActive,
                  }) =>
                    `
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    transition

                    ${
                      isActive
                        ? "bg-black text-white"
                        : "hover:bg-zinc-100"
                    }
                  `
                  }
                >

                  <Icon size={18} />

                  {link.label}

                </NavLink>

              );

            }
          )
        }

      </nav>

    </aside>

  );

}

export default Sidebar;