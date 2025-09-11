import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[rgba(0,0,0,0.7)] backdrop-blur-md shadow-lg flex justify-center py-3">
      <div className="flex gap-8 items-center">
        <a href="#home" className="text-white font-semibold hover:text-yellow-300 transition">Home</a>
        <a href="#about" className="text-white font-semibold hover:text-yellow-300 transition">About</a>
        <a href="#experience" className="text-white font-semibold hover:text-yellow-300 transition">Experience</a>
        <a href="#project" className="text-white font-semibold hover:text-yellow-300 transition">Projects</a>
        <a href="#contact" className="text-white font-semibold hover:text-yellow-300 transition">Contact</a>
        <a
          href="/src/assets/CV.pdf"
          download
          className="bg-yellow-300 text-black font-bold px-4 py-2 rounded-lg shadow hover:bg-yellow-400 transition flex items-center gap-2"
        >
          <svg width="20" height="20" fill="currentColor" className="inline" viewBox="0 0 24 24"><path d="M12 16.5l4-4h-3v-7h-2v7h-3l4 4zm-8 2.5v2h16v-2h-16z"/></svg>
          Download Resume
        </a>
      </div>
    </nav>
  )
}

export default Navbar