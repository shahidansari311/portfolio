const Card = ({ name, children }) => {
  return (
    <div
      className="
        group
        relative
        w-full max-w-sm
        rounded-2xl
        bg-white/5
        backdrop-blur-xl
        border border-white/10
        p-6
        text-white
        shadow-lg
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-red-500/30
      "
    >
      <div
        className="
          absolute inset-0 -z-10
          rounded-2xl
          bg-gradient-to-r from-red-500/30 via-pink-500/20 to-cyan-500/30
          blur-xl opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      <h3 className="text-xl font-semibold mb-4 text-cyan-400">
        {name}
      </h3>

      <div className="text-sm text-gray-300 space-y-2">
        {children}
      </div>
    </div>
  )
}

export default Card
