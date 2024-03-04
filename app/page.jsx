"use client";

import React, { useEffect, useState } from 'react';
import { FaGithub, FaYoutube, FaTwitter, FaEnvelope } from 'react-icons/fa';

const LandingPage = () => {
  const [viewCount, setViewCount] = useState(0);
  const [pageViews, setPageViews] = useState(1839);

  useEffect(() => {
    let interval;
    const animateViewCount = () => {
      let counter = 0;
      interval = setInterval(() => {
        counter += 10;
        if (counter >= pageViews) {
          clearInterval(interval);
          counter = pageViews;
        }
        setViewCount(counter);
      }, 10);
    };
  
    animateViewCount();
  
    return () => clearInterval(interval);
  }, []);  

  return (
    <div className="bg-black min-h-screen font-sans text-white">
      <header className="border-b border-gray-800 py-4 bg-black shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="text-3xl font-bold hover:text-gray-300 transition duration-300 text-white">
            
          </a>
          <div className="flex items-center">
            <a href="https://github.com/Loryhoof" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 mr-4">
              <FaGithub size={25} />
            </a>
            <a href="https://www.youtube.com/channel/UC2tbysPFyHPFrp5a_uWupgw" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 mr-4">
              <FaYoutube size={25}/>
            </a>
            <a href="https://twitter.com/loryhoof" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 mr-4">
              <FaTwitter size={25}/>
            </a>
            <a href="mailto:klattkev@gmail.com" className="text-white hover:text-gray-300">
              <FaEnvelope size={25}/>
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto my-8">
        <div className="md:flex md:flex-row md:justify-between">
          <div className="md:w-1/2">
            <div className="flex flex-col justify-center md:justify-start mb-4">
            <div>
              <h1 className="text-5xl font-bold mb-4"><span className="text-yellow-400">Greetings</span>, I&apos;m Kevin Klatt!</h1>
              <p className="text-2xl">I&apos;m a 22-year-old software engineer based in Germany 🇩🇪 with a passion for crafting <span className="text-yellow-400 font-semibold">digital solutions</span>. 💻</p>
              <p className="text-2xl mt-4">With over 6 years of experience in the industry, I specialize in React, JavaScript, Tailwind, and Three.js. With an entrepreneurial spirit, I&apos;ve brought my ideas to life, creating solutions that resonate.</p>
            </div>

            </div>
          </div>
          
        </div>
        <hr className="mt-8 border-t border-gray-300 w-1/2 mx-auto md:hidden" />
        <hr className="mt-8 border-t border-gray-300 w-full hidden md:block" />
      </div>

      {/* Skills Section */}
      <div className="container mx-auto mt-16 mb-8">
        <h1 className="text-3xl font-bold mb-4">Some of my skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold">React</h2>
            <div className="relative w-full bg-gray-300 rounded-full overflow-hidden mt-2">
              <div className="h-2 bg-blue-500 progress-bar" style={{ width: '0%', animation: 'progressBar 2.5s forwards', '--progress-percent': '90%' }}></div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">JavaScript</h2>
            <div className="relative w-full bg-gray-300 rounded-full overflow-hidden mt-2">
              <div className="h-2 bg-yellow-500 progress-bar" style={{ width: '0%', animation: 'progressBar 2s forwards', '--progress-percent': '90%' }}></div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">TypeScript</h2>
            <div className="relative w-full bg-gray-300 rounded-full overflow-hidden mt-2">
              <div className="h-2 bg-blue-500 progress-bar" style={{ width: '0%', animation: 'progressBar 2.5s forwards', '--progress-percent': '90%' }}></div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Tailwind</h2>
            <div className="relative w-full bg-gray-300 rounded-full overflow-hidden mt-2">
              <div className="h-2 bg-green-500 progress-bar" style={{ width: '0%', animation: 'progressBar 2s forwards', '--progress-percent': '65%' }}></div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">C#</h2>
            <div className="relative w-full bg-gray-300 rounded-full overflow-hidden mt-2">
              <div className="h-2 bg-red-500 progress-bar" style={{ width: '0%', animation: 'progressBar 2.5s forwards', '--progress-percent': '75%' }}></div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Three.js</h2>
            <div className="relative w-full bg-gray-300 rounded-full overflow-hidden mt-2">
              <div className="h-2 bg-purple-500 progress-bar" style={{ width: '0%', animation: 'progressBar 2s forwards', '--progress-percent': '80%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-16 mb-8">
  <h1 className="text-3xl font-bold mb-4">Things I've built</h1>
  {/* Project 1 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="border border-gray-700 p-4 flex items-center bg-black rounded-lg shadow-md hover:shake">
    <div className="w-36 h-36 md:w-20 md:h-20 lg:w-20 lg:h-20 flex items-center justify-center mr-4">
      <img src="/assets/projects/cuti.png" alt="Cuti.ai Logo" className="max-w-full max-h-full rounded-full" />
    </div>
      <div>
        <a href="https://cuti.ai" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
          <h2 className="text-xl font-bold mb-2">Cuti.ai</h2>
        </a>
        <p className="text-gray-400">AI Chatting Platform</p>
        <div className="flex flex-wrap mt-2">
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">React</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Tailwind</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">MongoDB</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Custom LLM</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Elevenlabs</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Stable Diffusion</span>
      </div>
      </div>
    </div>
    {/* Project 2 */}
    <div className="border border-gray-700 p-4 flex items-center bg-black rounded-lg shadow-md hover:shake">
      <div className="w-36 h-36 md:w-20 md:h-20 lg:w-20 lg:h-20 flex items-center justify-center mr-4">
        <img src="/assets/projects/fs.png" alt="PortraitAIArt.com Logo" className="max-w-full max-h-full rounded-full" />
      </div>
      <div>
        <a href="https://portraitaiart.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
          <h2 className="text-xl font-bold mb-2">PortraitAIArt.com</h2>
        </a>
        <p className="text-gray-400">AI Portrait Generation Service</p>
        <div className="flex flex-wrap mt-2">
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">React</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Tailwind</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">MongoDB</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Next.js</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Stable Diffusion</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">LoRa</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Stripe</span>
      </div>
      </div>
    </div>

    {/*Project 3*/}
    <div className="border border-gray-700 p-4 flex items-center bg-black rounded-lg shadow-md hover:shake">
      <div className="w-24 h-24 md:w-20 md:h-20 lg:w-20 lg:h-20 flex items-center justify-center mr-4">
        <img src="/assets/projects/crooktown.jpg" alt="CrookTown Logo" className="max-w-full max-h-full rounded-full" />
      </div>
      <div>
        <a href="https://loryhoof.github.io/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
          <h2 className="text-xl font-bold mb-2">CrookTown</h2>
        </a>
        <p className="text-gray-400">GTA-inspired Sandbox Web Game made in Three.js</p>
        <div className="flex flex-wrap mt-2">
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Three.js</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Socket.io</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">React</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Cannon.js</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">WebGL</span>
      </div>
      <div className="font-semibold">
          Play Now{" "}
          <a href="https://loryhoof.github.io/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            CrookTown
          </a>
        </div>
        <div className="font-semibold mt-1">
          Watch Trailer{" "}
          <a href="https://www.youtube.com/watch?v=v12txz36WXg" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      

      <div className="container mx-auto mt-16 mb-8">
        <div className="text-center">
          <p className="text-lg font-bold text-gray-300">Viewed by <span className="text-yellow-400">{viewCount}</span> Hoomans</p>
        </div>
      </div>


      <footer className="border-t border-gray-800 py-8 bg-black text-gray-400">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2 text-gray-300">Talk to me</h3>
            <ul>
              <li><a href="mailto:klattkev@gmail.com" className="hover:text-white flex items-center">
                <FaEnvelope className="mr-2" /> klattkev@gmail.com
              </a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">&copy; 2024 Kevin Klatt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
