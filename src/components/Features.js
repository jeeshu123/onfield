import { BarChart, ChartNoAxesCombined, Newspaper, Tv } from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Tv />, // Replace with an appropriate sports-related icon
      text: "Live Scores",
      description:
        "Get real-time updates on scores for all major sports, including football, basketball, tennis, and more.",
    },
    {
      icon: <ChartNoAxesCombined />, // Replace with an appropriate sports-related icon
      text: "Game Stats",
      description:
        "Detailed statistics for each game, including player performances, team rankings, and match history.",
    },
    {
      icon: <Newspaper />, // Replace with an appropriate sports-related icon
      text: "Breaking News",
      description:
        "Stay informed with breaking news, transfer updates, and important stories from the sports world.",
    },

    {
      icon: <BarChart />, // Replace with an appropriate sports-related icon
      text: "Analytics & Insights",
      description:
        "Access in-depth analysis and insights on teams, players, and games with advanced analytics tools.",
    },
  ];

  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-green-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Stay Updated with{" "}
          <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
            Every Game
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-green-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
