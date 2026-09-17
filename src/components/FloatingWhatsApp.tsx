import React from 'react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918760668866?text=Hi%20The%20One%20Vision,%20I'd%20like%20to%20discuss%20a%20project"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-200"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Chat on WhatsApp"
    >
      {/* Official WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7"
        fill="white"
      >
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.648 4.826 1.778 6.855L2 30l7.343-1.744A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 0 1-5.895-1.612l-.422-.25-4.358 1.036 1.063-4.248-.275-.437A11.565 11.565 0 0 1 4.4 16C4.4 9.593 9.593 4.4 16 4.4 22.407 4.4 27.6 9.593 27.6 16S22.407 27.6 16 27.6zm6.34-8.66c-.347-.174-2.053-1.013-2.372-1.129-.319-.116-.551-.174-.782.174-.231.347-.897 1.129-1.1 1.36-.203.232-.405.26-.752.086-.347-.173-1.465-.54-2.79-1.72-1.031-.92-1.727-2.055-1.93-2.402-.203-.347-.022-.534.152-.707.156-.155.347-.405.521-.608.174-.202.231-.347.347-.578.116-.232.058-.434-.029-.608-.087-.174-.782-1.88-1.072-2.574-.283-.676-.57-.584-.782-.595l-.666-.012c-.231 0-.608.087-.926.434-.318.347-1.216 1.188-1.216 2.895s1.245 3.357 1.419 3.589c.174.231 2.452 3.742 5.944 5.248.832.359 1.48.573 1.987.734.835.265 1.595.228 2.195.138.67-.1 2.053-.839 2.344-1.65.29-.811.29-1.507.203-1.65-.087-.145-.319-.231-.666-.405z"/>
      </svg>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: '#25D366' }} />
    </a>
  );
}
