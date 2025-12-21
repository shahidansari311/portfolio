import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="w-full mt-20 px-4">
      <h2 className="text-3xl font-bold text-center underline underline-offset-8 decoration-blue-500 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">
        Contact Me
      </h2>

      <div className="max-w-3xl mx-auto mt-10 p-6 rounded-3xl border border-white/20 bg-black/40 backdrop-blur-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-2xl bg-transparent border border-white/20 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 rounded-2xl bg-transparent border border-white/20 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1">Message</label>
              <textarea
                rows="6"
                required
                className="w-full px-4 py-2 rounded-2xl bg-transparent border border-white/20 focus:outline-none focus:border-blue-500 resize-none"
              ></textarea>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 rounded-3xl border border-blue-500 hover:bg-blue-500 transition"
            >
              Contact Me
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
