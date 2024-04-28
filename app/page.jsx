"use client";

import React, { useEffect, useState } from 'react';
import { FaGithub, FaYoutube, FaTwitter, FaEnvelope, FaDiscord, FaLock } from 'react-icons/fa';

import { SiPostgresql, SiMongodb, SiReact, SiNextDotJs, SiJavascript, SiTypescript, SiTailwindcss, SiExpress, SiRust, SiDotNet, SiNextdotjs, SiThreedotjs, SiTypeform, SiNodedotjs, SiCsharp } from 'react-icons/si';


const SkillBar = ({ name, color, percent }) => (
  <div>
    <h2 className="text-xl font-semibold">{name}</h2>
    <div className="relative w-full bg-gray-300 rounded-full overflow-hidden mt-2">
      <div className={`h-2 ${color} progress-bar`} style={{ width: '0%', animation: 'progressBar 2s forwards', '--progress-percent': `${percent}%` }}></div>
    </div>
  </div>
);

const SkillSection = ({ title, skills }) => (
  <div className='border p-4 mb-4 mt-4'>
    <h1 className="text-3xl font-bold mb-4">{title}</h1>
    {skills.map((skill, index) => (
      // <SkillBar key={index} name={skill.name} color={skill.color} percent={skill.percent} />
      <div key={index} className='p-2 flex flex-row gap-4 items-center text-center'>
         {getIcon(skill.name, skill.color)}
         <p className='text-2xl font-semibold mb-1'>{skill.name}</p>
      </div>
     
      // <p key={index}>{skill.name}</p>
    ))}
  </div>
);

const getIcon = (name, color) => {

  const size = 30; 

  switch (name) {
    case "React":
      return <SiReact className={`inline-block ${color}`} size={size} />;
    case "Next.js":
      return <SiNextdotjs className={`inline-block ${color}`} size={size} />;
    case "JavaScript":
      return <SiJavascript className={`inline-block ${color}`} size={size} />;
    case "TypeScript":
      return <SiTypescript className={`inline-block ${color}`} size={size} />;
    case "Tailwind":
      return <SiTailwindcss className={`inline-block ${color}`} size={size} />;
    case "Express.js":
      return <SiExpress className={`inline-block ${color}`} size={size} />;
    case "PostgreSQL":
      return <SiPostgresql className={`inline-block ${color}`} size={size} />;
    case "MongoDB":
      return <SiMongodb className={`inline-block ${color}`} size={size} />;
    case "Rust":
      return <SiRust className={`inline-block ${color}`} size={size} />;
    case "Three.js":
      return <SiThreedotjs className={`inline-block ${color}`} size={size} />;
    case "Node.js":
      return <SiNodedotjs className={`inline-block ${color}`} size={size} />;
    case "Next.js (API Routes)":
      return <SiNextdotjs className={`inline-block ${color}`} size={size} />;
    case "C#":
      return <SiCsharp className={`inline-block ${color}`} size={size} />;
    default:
      return null;
  }
};

const LandingPage = () => {
  const [viewCount, setViewCount] = useState(0);
  const [pageViews, setPageViews] = useState(223);

  const databaseSkills = [
    { name: "PostgreSQL", color: "text-blue-500", percent: 90 },
    { name: "MongoDB", color: "text-green-500", percent: 90, Icon: FaYoutube},
  ];

  const frontendSkills = [
    { name: "React", color: "text-blue-500", percent: 90 },
    { name: "Next.js", color: "text-white", percent: 90},
    { name: "TypeScript", color: "text-blue-500", percent: 90 },
    { name: "JavaScript", color: "text-yellow-500", percent: 90 },
    { name: "Tailwind", color: "text-teal-500", percent: 90 },
    { name: "Three.js", color: "text-white", percent: 90 },
  ];

  const backendSkills = [
    { name: "Express.js", color: "text-yellow-500", percent: 90 },
    { name: "Next.js (API Routes)", color: "text-white", percent: 90},
    { name: "Node.js", color: "text-slate-600", percent: 90},
    { name: "C#", color: "text-purple-500", percent: 90},
  ];

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
              <h1 className="text-5xl font-bold mb-4"><span className="text-yellow-400">Hi there</span>, I&apos;m Kevin Klatt!</h1>
              <p className="text-2xl">I&apos;m a 23-year-old full-stack software engineer from Germany 🇩🇪 with a passion for <span className="text-yellow-400 font-semibold">3D</span>, <span className="text-yellow-400 font-semibold">Game Development</span> and all things <span className="text-yellow-400 font-semibold">Web</span>.  💻</p>
              <p className="text-2xl mt-4">
              With over 4 years of experience in the industry, I specialize in React, TypeScript and Three.js. </p>
              <p className='text-2xl mt-4'>I find joy in bringing both my own ideas and those of others to life, through creative problem-solving.</p>
            </div>

            </div>
          </div>
          
        </div>
        <hr className="mt-8 border-t border-gray-300 w-1/2 mx-auto md:hidden" />
        <hr className="mt-8 border-t border-gray-300 w-full hidden md:block" />
      </div>


      <div className="container mx-auto mt-16 mb-8">
        <h1 className="text-3xl font-bold mb-4">Some of my skills</h1>
        <SkillSection title="Database" skills={databaseSkills} />
        <SkillSection title="Frontend" skills={frontendSkills} />
        <SkillSection title="Backend" skills={backendSkills} />
      </div>

      {/* Skills Section */}
      {/* <div className="container mx-auto mt-16 mb-8">
        <h1 className="text-3xl font-bold mb-4">Some of my skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold">React</h2>
            <div className="relative w-full bg-gray-300 rounded-full overflow-hidden mt-2">
              <div className="h-2 bg-blue-500 progress-bar" style={{ width: '0%', animation: 'progressBar 2.5s forwards', '--progress-percent': '90%' }}></div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Next.js</h2>
            <div className="relative w-full bg-gray-300 rounded-full overflow-hidden mt-2">
              <div className="h-2 bg-slate-600 progress-bar" style={{ width: '0%', animation: 'progressBar 2s forwards', '--progress-percent': '90%' }}></div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Three.js</h2>
            <div className="relative w-full bg-gray-300 rounded-full overflow-hidden mt-2">
              <div className="h-2 bg-purple-500 progress-bar" style={{ width: '0%', animation: 'progressBar 2s forwards', '--progress-percent': '90%' }}></div>
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
              <div className="h-2 bg-green-500 progress-bar" style={{ width: '0%', animation: 'progressBar 2s forwards', '--progress-percent': '90%' }}></div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Express.js</h2>
            <div className="relative w-full bg-gray-300 rounded-full overflow-hidden mt-2">
              <div className="h-2 bg-yellow-500 progress-bar" style={{ width: '0%', animation: 'progressBar 2s forwards', '--progress-percent': '90%' }}></div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">PostgreSQL</h2>
            <div className="relative w-full bg-gray-300 rounded-full overflow-hidden mt-2">
              <div className="h-2 bg-blue-500 progress-bar" style={{ width: '0%', animation: 'progressBar 2s forwards', '--progress-percent': '90%' }}></div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">MongoDB</h2>
            <div className="relative w-full bg-gray-300 rounded-full overflow-hidden mt-2">
              <div className="h-2 bg-green-500 progress-bar" style={{ width: '0%', animation: 'progressBar 2s forwards', '--progress-percent': '90%' }}></div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Rust</h2>
            <div className="relative w-full bg-gray-300 rounded-full overflow-hidden mt-2">
              <div className="h-2 bg-orange-500 progress-bar" style={{ width: '0%', animation: 'progressBar 2.5s forwards', '--progress-percent': '25%' }}></div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">C#</h2>
            <div className="relative w-full bg-gray-300 rounded-full overflow-hidden mt-2">
              <div className="h-2 bg-red-500 progress-bar" style={{ width: '0%', animation: 'progressBar 2.5s forwards', '--progress-percent': '75%' }}></div>
            </div>
          </div>

        </div>
      </div> */}

      <div className="container mx-auto mt-16 mb-8">
  <h1 className="text-3xl font-bold mb-4">Things I&apos;ve built</h1>
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
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">JavaScript</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">React</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Tailwind</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">PostgreSQL</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Custom LLM</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Elevenlabs</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Stable Diffusion</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Express.js</span>
      </div>
      <div className="font-semibold mt-1">
          Website{" "}
          <a href="https://cuti.ai" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </div>
        <div className="font-semibold mt-1 flex flex-row gap-2">
          <FaLock className='mt-1'></FaLock>
          Proof of Ownership{" "}
          <a href="https://www.cuti.ai/proof-of-ownership" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Link
          </a>
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
        <p className="text-gray-400">AI Portrait Generation SaaS</p>
        <div className="flex flex-wrap mt-2">
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">JavaScript</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">React</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Tailwind</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">MongoDB</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Next.js</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Stable Diffusion</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">LoRa</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Stripe</span>
      </div>
      <div className="font-semibold mt-1">
          Website{" "}
          <a href="https://portraitaiart.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </div>
        <div className="font-semibold mt-1">
          Github{" "}
          <a href="https://github.com/Loryhoof/nextjs-saas" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </div>
        <div className="font-semibold mt-1 flex flex-row gap-2">
          <FaLock className='mt-1'></FaLock>
          Proof of Ownership{" "}
          <a href="https://www.portraitaiart.com/proof-of-ownership" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </div>
      </div>
    </div>

    {/*Project 3*/}
    <div className="border border-gray-700 p-4 flex items-center bg-black rounded-lg shadow-md hover:shake">
      <div className="w-24 h-24 md:w-20 md:h-20 lg:w-20 lg:h-20 flex items-center justify-center mr-4">
        <img src="/assets/projects/crooktown.jpg" alt="CrookTown Logo" className="max-w-full max-h-full rounded-full" />
      </div>
      <div>
        <a href="https://crooktown.github.io/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
          <h2 className="text-xl font-bold mb-2">CrookTown</h2>
        </a>
        <p className="text-gray-400">GTA-inspired Sandbox Web Game made in Three.js</p>
        <div className="flex flex-wrap mt-2">
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">TypeScript</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Three.js</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Socket.io</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Cannon.js</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">WebGL</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Express.js</span>
      </div>
      <div className="font-semibold">
          Play Now{" "}
          <a href="https://crooktown.github.io/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
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

    {/*Project 4*/}
    <div className="border border-gray-700 p-4 flex items-center bg-black rounded-lg shadow-md hover:shake">
      <div className="w-24 h-24 md:w-20 md:h-20 lg:w-20 lg:h-20 flex items-center justify-center mr-4">
        <img src="/assets/projects/g2.jpg" alt="CrookTown Logo" className="max-w-full max-h-full rounded-full" />
      </div>
      <div>
        <a href="https://github.com/Loryhoof/bonkers2" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
          <h2 className="text-xl font-bold mb-2">Bonkers</h2>
        </a>
        <p className="text-gray-400">Survival game made in Three.js</p>
        <div className="flex flex-wrap mt-2">
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">TypeScript</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Three.js</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">WebGL</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Rust</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">WASM</span>
      </div>
      <div className="font-semibold">
          Play Now{" "}
          <a href="https://bonkers-ts.vercel.app/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </div>
        <div className="font-semibold mt-1">
          Github{" "}
          <a href="https://github.com/Loryhoof/bonkers2" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </div>
      </div>
    </div>

    {/* Thai Learning App */}
    <div className="border border-gray-700 p-4 flex items-center bg-black rounded-lg shadow-md hover:shake">
      <div className="w-24 h-24 md:w-20 md:h-20 lg:w-20 lg:h-20 flex items-center justify-center mr-4">
        <img src="/assets/projects/thai.png" alt="CrookTown Logo" className="max-w-full max-h-full rounded-full" />
      </div>
      <div>
        <a href="https://thai-learn.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
          <h2 className="text-xl font-bold mb-2">Language Learning App</h2>
        </a>
        <p className="text-gray-400">Flashcard-inspired language language learning Web App</p>
        <div className="flex flex-wrap mt-2">
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">TypeScript</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">React</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Tailwind</span>
          <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">Next.js</span>
      </div>
      <div className="font-semibold">
          Website{" "}
          <a href="https://thai-learn.vercel.app/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </div>
        <div className="font-semibold mt-1">
          Github{" "}
          <a href="https://github.com/Loryhoof/learning-platform" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </div>
      </div>
    </div>


  </div>
</div>

      

      {/* <div className="container mx-auto mt-16 mb-8">
        <div className="text-center">
          <p className="text-lg font-bold text-gray-300">Viewed by <span className="text-yellow-400">{viewCount}</span> Hoomans</p>
        </div>
      </div> */}


      <footer className="border-t border-gray-800 py-8 bg-black text-gray-400">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2 text-gray-300">Talk to me</h3>
            <ul>
              <li><a href="mailto:klattkev@gmail.com" className="hover:text-white flex items-center">
                <FaEnvelope className="mr-2" /> klattkev@gmail.com
              </a></li>
              <li className="hover:text-white flex items-center">
                <FaDiscord className="mr-2" /> loryhoof
              </li>
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
