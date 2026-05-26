function StatsCard({
  title,
  value,
  icon: Icon,
}) {

  return (

    <div
      className="
      bg-white
      rounded-2xl
      p-6
      border
      border-zinc-200
      shadow-sm
    "
    >

      <div
        className="
        flex
        items-center
        justify-between
      "
      >

        <div>

          <p
            className="
            text-zinc-500
            text-sm
          "
          >
            {title}
          </p>

          <h2
            className="
            text-3xl
            font-bold
            mt-2
          "
          >
            {value}
          </h2>

        </div>

        <div
          className="
          w-14
          h-14
          rounded-2xl
          bg-black
          text-white
          flex
          items-center
          justify-center
        "
        >

          <Icon size={26} />

        </div>

      </div>

    </div>

  );

}

export default StatsCard;