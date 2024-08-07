export default function DateWeather() {
  const date = new Date();
  const options = {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(date);

  return (
    <div className="flex justify-between px-6 py-3 bg-stone-200 text-sm md:text-base">
      <p>{formattedDate}</p>
      <p>{"Wea"}</p>
    </div>
  );
}
