const Card = ({ name, children }) => {
  return (
    <div className="w-88 pl-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 text-white shadow-lg hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-4 text-cyan-400">
        {name}
      </h3>

      {children}
    </div>
  )
}

export default Card
