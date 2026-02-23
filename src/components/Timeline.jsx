const Timeline = () => {
  const events = [
    { year: "2024 - 2028", title: "B.Tech in CSE", place: "ABES Engineering College" },
    { year: "2022 - 2024", title: "Intermediate", place: "Amrit Public School" },
  ];

  return (
    <div className="border-l border-white/10 ml-2 space-y-10 py-4">
      {events.map((event, index) => (
        <div key={index} className="relative pl-8 group">
          <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-slate-800 border border-indigo-500 transition-all duration-300 group-hover:bg-indigo-500 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">{event.title}</h3>
            <p className="text-sm font-medium text-indigo-400/80 tracking-wide uppercase">{event.year}</p>
            <p className="text-sm text-slate-400">{event.place}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;