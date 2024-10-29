"use client";

import {
  FaGithub,
  FaYoutube,
  FaTwitter,
  FaEnvelope,
  FaDiscord,
  FaLock
} from 'react-icons/fa'
import { SkillSection } from './components/SkillSection'
import { DownloadSection } from './components/DownloadSection'

const LandingPage = () => {
  const databaseSkills = [
    { name: 'PostgreSQL', color: 'text-blue-500', percent: 90 },
    { name: 'MongoDB', color: 'text-green-500', percent: 90 }
  ]

  const devOpsSkills = [
    { name: 'Docker', color: 'text-blue-500', percent: 60 },
    { name: 'Kubernetes', color: 'text-blue-500', percent: 60 },
    { name: 'AWS', color: 'text-orange-500', percent: 60 },
    { name: 'DigitalOcean', color: 'text-blue-500' }
  ]

  const frontendSkills = [
    { name: 'React', color: 'text-blue-500', percent: 90 },
    { name: 'Next.js', color: 'text-white', percent: 90 },
    { name: 'TypeScript', color: 'text-blue-500', percent: 90 },
    { name: 'JavaScript', color: 'text-yellow-500', percent: 90 },
    { name: 'Tailwind', color: 'text-teal-500', percent: 90 },
    { name: 'Three.js', color: 'text-white', percent: 90 },
    { name: 'Vue.js', color: 'text-green-500' },
    { name: 'Nuxt.js', color: 'text-green-500' }
  ]

  const backendSkills = [
    { name: 'Express.js', color: 'text-yellow-500', percent: 90 },
    { name: 'Next.js', color: 'text-white', percent: 90 },
    { name: 'Node.js', color: 'text-slate-600', percent: 90 },
    { name: 'C#', color: 'text-purple-500', percent: 90 },
    { name: 'Nuxt.js', color: 'text-green-500' },
    { name: 'Directus', color: 'text-purple-500' }
  ]

  return (
    <div className='min-h-screen bg-black font-sans text-white'>
      <header className='border-b border-gray-800 bg-black py-4 shadow-md'>
        <div className='container mx-auto flex items-center justify-between'>
          <a
            href='/'
            className='text-3xl font-bold text-white transition duration-300 hover:text-gray-300'
          ></a>
          <div className='flex items-center'>
            <a
              href='https://github.com/Loryhoof'
              target='_blank'
              rel='noopener noreferrer'
              className='mr-4 text-white hover:text-gray-300'
            >
              <FaGithub size={25} />
            </a>
            <a
              href='https://www.youtube.com/channel/UC2tbysPFyHPFrp5a_uWupgw'
              target='_blank'
              rel='noopener noreferrer'
              className='mr-4 text-white hover:text-gray-300'
            >
              <FaYoutube size={25} />
            </a>
            <a
              href='https://twitter.com/loryhoof'
              target='_blank'
              rel='noopener noreferrer'
              className='mr-4 text-white hover:text-gray-300'
            >
              <FaTwitter size={25} />
            </a>
            <a
              href='mailto:klattkev@gmail.com'
              className='text-white hover:text-gray-300'
            >
              <FaEnvelope size={25} />
            </a>
          </div>
        </div>
      </header>

      <div className='container mx-auto my-8'>
        <div className='md:flex md:flex-row md:justify-between'>
          <div className='md:w-1/2'>
            <div className='mb-4 flex flex-col justify-center md:justify-start'>
              <div>
                <h1 className='mb-4 text-5xl font-bold'>
                  <span className='text-yellow-400'>Hi there</span>, I&apos;m
                  Kevin Klatt!
                </h1>
                <p className='text-2xl'>
                  I&apos;m a Full-Stack Engineer from Germany 🇩🇪 with a passion
                  for <span className='font-semibold text-yellow-400'>3D</span>,{' '}
                  <span className='font-semibold text-yellow-400'>
                    Game Development
                  </span>{' '}
                  and all things{' '}
                  <span className='font-semibold text-yellow-400'>Web</span>. 💻
                </p>
                <p className='mt-4 text-2xl'>
                  With over 4 years of experience in the industry, I specialize
                  in React, TypeScript and Three.js.{' '}
                </p>
                <p className='mt-4 text-2xl'>
                  I find joy in bringing both my own ideas and those of others
                  to life, through creative problem-solving.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className='mx-auto mt-8 w-1/2 border-t border-gray-300 md:hidden' />
        <hr className='mt-8 hidden w-full border-t border-gray-300 md:block' />
      </div>

      <div className='container mx-auto mb-8 mt-16 '>
        <h1 className='mb-4 text-3xl font-bold'>Some of my skills</h1>
        <div className='mx-auto flex-row gap-8 md:flex'>
          <SkillSection title='Frontend' skills={frontendSkills} />
          <SkillSection title='Backend' skills={backendSkills} />
          <SkillSection title='DevOps' skills={devOpsSkills} />
          <SkillSection title='Database' skills={databaseSkills} />
        </div>
        <hr className='mx-auto mt-8 w-1/2 border-t border-gray-300 md:hidden' />
        <hr className='mt-8 hidden w-full border-t border-gray-300 md:block' />
      </div>

      <div className='container mx-auto mb-8 mt-16'>
        <h1 className='mb-4 text-3xl font-bold'>Things I&apos;ve built</h1>
        {/* Project 1 */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div className='hover:shake flex items-center rounded-lg border border-gray-700 bg-black p-4 shadow-md'>
            <div className='mr-4 flex h-36 w-36 items-center justify-center md:h-20 md:w-20 lg:h-20 lg:w-20'>
              <img
                src='/assets/projects/cuti.png'
                alt='Cuti.ai Logo'
                className='max-h-full max-w-full rounded-full'
              />
            </div>
            <div>
              <a
                href='https://cuti.ai'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:underline'
              >
                <h2 className='mb-2 text-xl font-bold'>Cuti.ai</h2>
              </a>
              <p className='text-gray-400'>AI Chatting Platform</p>
              <div className='mt-2 flex flex-wrap'>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  JavaScript
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  React
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  Tailwind
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  PostgreSQL
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  Custom LLM
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  Elevenlabs
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  Stable Diffusion
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  Express.js
                </span>
              </div>
              <div className='mt-1 font-semibold'>
                Website{' '}
                <a
                  href='https://cuti.ai'
                  className='text-blue-500 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Link
                </a>
              </div>
              <div className='mt-1 flex flex-row gap-2 font-semibold'>
                <FaLock className='mt-1'></FaLock>
                Proof of Ownership{' '}
                <a
                  href='https://www.cuti.ai/proof-of-ownership'
                  className='text-blue-500 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Link
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className='hover:shake flex items-center rounded-lg border border-gray-700 bg-black p-4 shadow-md'>
            <div className='mr-4 flex h-36 w-36 items-center justify-center md:h-20 md:w-20 lg:h-20 lg:w-20'>
              <img
                src='/assets/projects/fs.png'
                alt='PortraitAIArt.com Logo'
                className='max-h-full max-w-full rounded-full'
              />
            </div>
            <div>
              <a
                href='https://portraitaiart.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:underline'
              >
                <h2 className='mb-2 text-xl font-bold'>PortraitAIArt.com</h2>
              </a>
              <p className='text-gray-400'>AI Portrait Generation SaaS</p>
              <div className='mt-2 flex flex-wrap'>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  JavaScript
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  React
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  Tailwind
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  MongoDB
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  Next.js
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  Stable Diffusion
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  LoRa
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  Stripe
                </span>
              </div>
              <div className='mt-1 font-semibold'>
                Website{' '}
                <a
                  href='https://portraitaiart.com'
                  className='text-blue-500 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Link
                </a>
              </div>
              <div className='mt-1 font-semibold'>
                Github{' '}
                <a
                  href='https://github.com/Loryhoof/nextjs-saas'
                  className='text-blue-500 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Link
                </a>
              </div>
              <div className='mt-1 flex flex-row gap-2 font-semibold'>
                <FaLock className='mt-1'></FaLock>
                Proof of Ownership{' '}
                <a
                  href='https://www.portraitaiart.com/proof-of-ownership'
                  className='text-blue-500 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Link
                </a>
              </div>
            </div>
          </div>

          {/*Project 3*/}
          <div className='hover:shake flex items-center rounded-lg border border-gray-700 bg-black p-4 shadow-md'>
            <div className='mr-4 flex h-24 w-24 items-center justify-center md:h-20 md:w-20 lg:h-20 lg:w-20'>
              <img
                src='/assets/projects/crooktown.jpg'
                alt='CrookTown Logo'
                className='max-h-full max-w-full rounded-full'
              />
            </div>
            <div>
              <a
                href='https://crooktown.github.io/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:underline'
              >
                <h2 className='mb-2 text-xl font-bold'>CrookTown</h2>
              </a>
              <p className='text-gray-400'>
                GTA-inspired Sandbox Web Game made in Three.js
              </p>
              <div className='mt-2 flex flex-wrap'>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  TypeScript
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  Three.js
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  Socket.io
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  Cannon.js
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  WebGL
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  Express.js
                </span>
              </div>
              <div className='font-semibold'>
                Play Now{' '}
                <a
                  href='https://crooktown.github.io/'
                  className='text-blue-500 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  CrookTown
                </a>
              </div>
              <div className='mt-1 font-semibold'>
                Watch Trailer{' '}
                <a
                  href='https://www.youtube.com/watch?v=v12txz36WXg'
                  className='text-blue-500 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/*Project 4*/}
          <div className='hover:shake flex items-center rounded-lg border border-gray-700 bg-black p-4 shadow-md'>
            <div className='mr-4 flex h-24 w-24 items-center justify-center md:h-20 md:w-20 lg:h-20 lg:w-20'>
              <img
                src='/assets/projects/g2.jpg'
                alt='CrookTown Logo'
                className='max-h-full max-w-full rounded-full'
              />
            </div>
            <div>
              <a
                href='https://github.com/Loryhoof/bonkers2'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:underline'
              >
                <h2 className='mb-2 text-xl font-bold'>Bonkers</h2>
              </a>
              <p className='text-gray-400'>Survival game made in Three.js</p>
              <div className='mt-2 flex flex-wrap'>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  TypeScript
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  Three.js
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  WebGL
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  Rust
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  WASM
                </span>
              </div>
              <div className='font-semibold'>
                Play Now{' '}
                <a
                  href='https://bonkers-ts.vercel.app/'
                  className='text-blue-500 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Link
                </a>
              </div>
              <div className='mt-1 font-semibold'>
                Github{' '}
                <a
                  href='https://github.com/Loryhoof/bonkers2'
                  className='text-blue-500 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Link
                </a>
              </div>
            </div>
          </div>

          {/* Thai Learning App */}
          <div className='hover:shake flex items-center rounded-lg border border-gray-700 bg-black p-4 shadow-md'>
            <div className='mr-4 flex h-24 w-24 items-center justify-center md:h-20 md:w-20 lg:h-20 lg:w-20'>
              <img
                src='/assets/projects/thai.png'
                alt='CrookTown Logo'
                className='max-h-full max-w-full rounded-full'
              />
            </div>
            <div>
              <a
                href='https://thai-learn.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:underline'
              >
                <h2 className='mb-2 text-xl font-bold'>
                  Language Learning App
                </h2>
              </a>
              <p className='text-gray-400'>
                Flashcard-inspired language language learning Web App
              </p>
              <div className='mt-2 flex flex-wrap'>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  TypeScript
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  React
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  Tailwind
                </span>
                <span className='mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-300'>
                  Next.js
                </span>
              </div>
              <div className='font-semibold'>
                Website{' '}
                <a
                  href='https://thai-learn.vercel.app/'
                  className='text-blue-500 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Link
                </a>
              </div>
              <div className='mt-1 font-semibold'>
                Github{' '}
                <a
                  href='https://github.com/Loryhoof/learning-platform'
                  className='text-blue-500 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Download section */}
        <DownloadSection />
       
      </div>
      <footer className='border-t border-gray-800 bg-black py-8 text-gray-400'>
        <div className='container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div className='mb-4'>
            <h3 className='mb-2 text-lg font-bold text-gray-300'>Talk to me</h3>
            <ul>
              <li>
                <a
                  className='flex items-center hover:text-white'
                  onClick={() => navigator.clipboard.writeText("klattkev@gmail.com")}
                >
                  <FaEnvelope className='mr-2' /> klattkev@gmail.com
                </a>
              </li>
              <li className='flex items-center hover:text-white' onClick={() => navigator.clipboard.writeText("loryhoof")}>
                
                <FaDiscord className='mr-2' /> loryhoof
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-8 text-center'>
          <p className='text-sm'>
            &copy; 2024 Kevin Klatt. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
