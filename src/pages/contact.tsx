import React, { useState } from 'react'

const Contact = () => {
  return (
    <div id='contact' className='bg-abyss min-h-screen w-full relative flex flex-col items-center justify-center py-36 sm:py-36'>
      <h2 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 [text-shadow:2px_2px_0_black]'>
          Let's Connect
      </h2>


      
      <p className='text-center text-base sm:text-base lg:text-xl text-gray-300 mb-8 [text-shadow:1px_1px_0_black]'>
        Ready to dive deeper? Reach out and let's explore opportunities together.
      </p>

      <div className='flex items-center justify-center gap-2 mb-12 text-base sm:text-base lg:text-xl'>
        <svg className='w-5 h-5 text-orange-400' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/>
        </svg>
        <p className='text-gray-300 [text-shadow:1px_1px_0_black]'>
          Currently in <span className='text-orange-400 font-semibold'>Amsterdam, NL</span>
        </p>
      </div>

      <div className='flex flex-col md:flex-row gap-8 justify-center items-center'>
        <a
          href='mailto:alvaro.maharto@outlook.com'
          className='group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 w-72 sm:w-80 md:w-80'
        >
          <div className='flex flex-col items-center'>
            <div className='p-3 sm:p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-400/30 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300'>
              <svg className='w-6 h-6 sm:w-8 sm:h-8 text-cyan-400' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 13.065l-11.99-7.065v14h23.98v-14l-11.99 7.065zm11.99-9.065h-23.98l11.99 7.065 11.99-7.065z'/>
              </svg>
            </div>
            <h3 className='text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-300 transition-colors duration-300'>
              Email
            </h3>
            <p className='text-gray-400 text-sm sm:text-lg group-hover:text-white transition-colors duration-300 break-all'>
              alvaro.maharto@outlook.com
            </p>
            <div className='mt-3 sm:mt-4 text-xs sm:text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              Click to send email →
            </div>
          </div>
        </a>

        <a
          href='https://www.linkedin.com/in/alvaropratama/'
          target='_blank'
          rel='noopener noreferrer'
          className='group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-400/50 w-72 sm:w-80 md:w-80'
        >
          <div className='flex flex-col items-center'>
            <div className='p-3 sm:p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-400/30 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300'>
              <svg className='w-6 h-6 sm:w-8 sm:h-8 text-blue-400' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.598 2 3.598 4.59v5.606z'/>
              </svg>
            </div>
            <h3 className='text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors duration-300'>
              LinkedIn
            </h3>
            <p className='text-gray-400 text-sm sm:text-lg group-hover:text-white transition-colors duration-300'>
              @alvaropratama
            </p>
            <div className='mt-3 sm:mt-4 text-xs sm:text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              View profile →
            </div>
          </div>
        </a>
      </div>
      <div className='flex gap-8 mt-8'>
        <a
          href='https://github.com/alvaroprtm'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 text-blue-400 hover:text-blue-500 transition smd:text-sm lg:text-lg xl:text-lg'
        >
          <svg width="24" height="24" fill="currentColor" className="inline" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          GitHub
        </a>
        <a
          href='https://instagram.com/alvaroprtm_'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 text-blue-400 hover:text-blue-500 transition text-lg'
        >
          <svg width="24" height="24" fill="currentColor" className="inline" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
          Instagram
        </a>
      </div>
    </div>
  )
}

export default Contact