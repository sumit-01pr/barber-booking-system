const appointments = [

  {
    id: 1,
    customer: "Sumit",
    service: "Haircut",
    status: "confirmed",
    date: "25 May",
  },

  {
    id: 2,
    customer: "Rahul",
    service: "Beard Styling",
    status: "pending",
    date: "26 May",
  },

];

function AppointmentsTable() {

  return (

    <div
      className="
      bg-white
      rounded-2xl
      border
      border-zinc-200
      overflow-hidden
    "
    >

      <div
        className="
        p-5
        border-b
        border-zinc-200
      "
      >

        <h2
          className="
          text-xl
          font-semibold
        "
        >
          Recent Appointments
        </h2>

      </div>

      <table
        className="
        w-full
      "
      >

        <thead
          className="
          bg-zinc-50
        "
        >

          <tr>

            <th
              className="
              text-left
              p-4
            "
            >
              Customer
            </th>

            <th
              className="
              text-left
              p-4
            "
            >
              Service
            </th>

            <th
              className="
              text-left
              p-4
            "
            >
              Status
            </th>

            <th
              className="
              text-left
              p-4
            "
            >
              Date
            </th>

          </tr>

        </thead>

        <tbody>

          {
            appointments.map(
              (appointment) => (

                <tr
                  key={appointment.id}
                  className="
                  border-t
                  border-zinc-100
                "
                >

                  <td className="p-4">
                    {appointment.customer}
                  </td>

                  <td className="p-4">
                    {appointment.service}
                  </td>

                  <td className="p-4">

                    <span
                      className="
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      bg-green-100
                      text-green-700
                    "
                    >
                      {appointment.status}
                    </span>

                  </td>

                  <td className="p-4">
                    {appointment.date}
                  </td>

                </tr>

              )
            )
          }

        </tbody>

      </table>

    </div>

  );

}

export default AppointmentsTable;