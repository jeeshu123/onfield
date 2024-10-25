import { useEffect } from "react";

export default function DateWeather() {
  const date = new Date();
  const options = {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(date);

  useEffect(() => {
    async function fetchWeather() {
      const res = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=6.9271&lon=79.8612&appid=26637bf6ea165ee2533ff29f3e9e866b`
      );
      const data = await res.json();
      console.log(data);
    }
    fetchWeather();
  }, []);
  return (
    <div className="flex justify-between px-6 py-3 text-sm md:text-base">
      <p>{formattedDate}</p>
      <p>{"Weather"}</p>
    </div>
  );
}
