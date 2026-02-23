import React from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { useState } from "react";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import SocialLinks from "../components/Sociallinks";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false);
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    }, (error) => {
      setLoading(false);
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    });
  };

  return (
    <section className="section-padding py-24" id="contact">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-sync text-center mb-4 uppercase leading-tight">
          GET IN <span className="text-gradient">TOUCH</span>
        </h2>
        <div className="w-24 h-1 bg-indigo-500 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="glass-card p-8 md:p-10 rounded-[40px] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all font-medium resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 rounded-2xl bg-indigo-600 text-sm font-black uppercase tracking-widest text-white hover:bg-indigo-700 transition-all shadow-[0_10px_30px_-10px_rgba(99,102,241,0.5)] active:scale-[0.98] disabled:opacity-50"
                >
                  {loading ? "Transmitting..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="glass-card p-10 rounded-[40px] space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">Let's build something <span className="text-gradient">extraordinary</span> together.</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <HiMail />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Email</p>
                    <p className="text-white font-bold text-base md:text-lg overflow-hidden text-ellipsis">shahidansari310@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-2xl group-hover:bg-purple-600 group-hover:text-white transition-all">
                    <HiLocationMarker />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Location</p>
                    <p className="text-white font-bold text-base md:text-lg">Ghaziabad, Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <p className="text-sm font-medium text-slate-400 mb-6">Social Networks</p>
                <SocialLinks size={28} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
