import React, { useState } from "react";
import toast from "react-hot-toast";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import SocialLinks from "../components/Sociallinks";

const Contact = () => {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const isConfigured =
      ACCESS_KEY &&
      !["YOUR_KEY_HERE", "YOUR_WEB3FORMS_ACCESS_KEY"].includes(ACCESS_KEY);

    // No valid Web3Forms key configured → fall back to the visitor's email app
    // so the message still reaches you instead of failing.
    if (!isConfigured) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:shahidansari945256@gmail.com?subject=${subject}&body=${body}`;
      toast.success("Opening your email app to send the message!");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
      return;
    }

    try {
      // Using Web3Forms for a free, backend-less solution
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(result.message || "Failed to send message.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding" id="contact">
      <div className="content-wrap">
        <div className="section-header">
          <h2>GET IN <span className="text-gradient">TOUCH</span></h2>
          <div className="section-divider"></div>
        </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="glass-card p-8 md:p-10 rounded-[40px] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl group-hover:bg-rose-500/20 transition-all"></div>
              
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
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-rose-500/50 transition-all font-medium"
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
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-rose-500/50 transition-all font-medium"
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
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-rose-500/50 transition-all font-medium resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 rounded-2xl bg-rose-600 text-sm font-black uppercase tracking-widest text-white hover:bg-rose-700 transition-all shadow-[0_10px_30px_-10px_rgba(244,63,94,0.5)] active:scale-[0.98] disabled:opacity-50"
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
                  <div className="w-14 h-14 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center text-2xl group-hover:bg-rose-600 group-hover:text-white transition-all">
                    <HiMail />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Email</p>
                    <p className="text-white font-bold text-sm sm:text-base md:text-lg overflow-hidden text-ellipsis break-all sm:break-normal">shahidansari945256@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center text-2xl group-hover:bg-red-600 group-hover:text-white transition-all">
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
      </div>
    </section>
  );
};

export default Contact;
