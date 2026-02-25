import React from 'react';

const EmailSidebar = () => {
  return (
    <div className="fixed right-6 bottom-0 z-50 hidden xl:flex flex-col items-center gap-6 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
      <a
        href="mailto:shahidansari945256@gmail.com"
        className="cursor-target text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:text-indigo-400 [writing-mode:vertical-rl]"
      >
        shahidansari945256@gmail.com
      </a>
      <div className="w-[1px] h-32 bg-linear-to-t from-transparent via-slate-700 to-slate-700 mt-2"></div>
    </div>
  );
};

export default EmailSidebar;
