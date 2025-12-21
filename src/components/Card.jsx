const Card = ({ name, children }) => {
  return (
    <div className="w-88 pl-10 rounded-2xl backdrop-blur-xl border border-white/20 p-6 text-white shadow-lg shadow-blue-900 hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-4 text-cyan-400">
        {name}
      </h3>

      {children}
    </div>
  )
}

export default Card
