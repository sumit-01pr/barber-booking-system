const generateSlots = (
  start,
  end,
  duration
) => {

  const slots = [];

  let current =
    convertToMinutes(start);

  const endMinutes =
    convertToMinutes(end);

  while (
    current + duration <= endMinutes
  ) {

    slots.push(
      convertToTime(current)
    );

    current += duration;

  }

  return slots;

};

const convertToMinutes = (time) => {

  const [hours, minutes] =
    time.split(":").map(Number);

  return hours * 60 + minutes;

};

const convertToTime = (minutes) => {

  const hrs = Math.floor(minutes / 60)
    .toString()
    .padStart(2, "0");

  const mins = (minutes % 60)
    .toString()
    .padStart(2, "0");

  return `${hrs}:${mins}`;

};

export default generateSlots;