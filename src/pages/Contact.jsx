import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="w-full mt-28 px-6 " id="contact">
      
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]">
          Contact Me
        </h2>
        <span className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />
      </div>

      <div className="max-w-4xl mx-auto mt-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl p-8">
        <form onSubmit={handleSubmit} className="space-y-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Name</label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-transparent border border-white/20
                  text-white placeholder-gray-500
                  focus:outline-none focus:border-cyan-400
                  transition
                "
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-transparent border border-white/20
                  text-white placeholder-gray-500
                  focus:outline-none focus:border-cyan-400
                  transition
                "
              />
            </div>

            <div className="md:col-span-2 flex flex-col gap-1">
              <label className="text-sm text-gray-300">Message</label>
              <textarea
                rows="5"
                required
                placeholder="Write your message..."
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-transparent border border-white/20
                  text-white placeholder-gray-500
                  resize-none
                  focus:outline-none focus:border-cyan-400
                  transition
                "
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="
                inline-flex items-center justify-center
                px-8 py-3 rounded-2xl
                text-sm font-semibold text-white
                bg-gradient-to-r from-cyan-500 to-blue-600
                shadow-lg shadow-cyan-500/30
                transition-all duration-300
                hover:scale-105 hover:shadow-cyan-400/60
              "
            >
              Send Message
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Contact;
