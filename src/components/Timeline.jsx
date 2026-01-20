const Timeline = () => {
  const events = [
    { year: "2024-2028", title: "B.Tech in CSE", place: "ABES Engineering College" },
    { year: "2022-2024", title: "Intermediate", place: "Amrit Public School" },
  ];

  return (
    <div className="border-l-2 border-cyan-500 ml-5 space-y-8 mt-8">
      {events.map((event, index) => (
        <div key={index} className="relative pl-6">
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-cyan-500 shadow-[0_0_10px_cyan]" />
          <h3 className="text-xl font-bold text-white">{event.title}</h3>
          <span className="text-sm text-gray-400">{event.year} | {event.place}</span>
        </div>
      ))}
    </div>
  );
};

export default Timeline;