import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import { FaLinkedin } from "react-icons/fa";


export default function App() {
  const [roles] = useTypewriter({
    words: [
      'Full-Stack Web Developer', 
      'Indie Game Developer', 
      'Voice Talent'
    ],
    loop: {},
    typeSpeed: 100,
  })

  return (
    <div className='text-white'>
      {/* Navigation Bar */}
      <nav className='bg-secondary grid grid-cols-3 py-7 px-24'>
        <h1 className='text-xl font-light'>Rayyan <span className='text-primary'>Alfawazy</span></h1>
        <ul className='flex justify-center space-x-10 font-light'>
          <li><a className='hover:text-primary duration-150' href="#home">Home</a></li>
          <li><a className='hover:text-primary duration-150' href="#about">About</a></li>
          <li><a className='hover:text-primary duration-150' href="#services">Services</a></li>
          <li><a className='hover:text-primary duration-150' href="#portfolio">Portfolio</a></li>
          <li><a className='hover:text-primary duration-150' href="#contact">Contact</a></li>
        </ul>
        <h1 className='place-self-end'>Contact Me</h1>
      </nav>

      {/* Header */}
      <header className='bg-secondary grid grid-cols-3 px-25'>
        <div className='place-content-center space-y-2'>
          <h1 className='font-bold text-4xl'>Hi Everyone 👋</h1>
          <h2 className='text-2xl font-light'>My name is <span className='text-primary'>Rayyan Alfawazy Adheswarna</span></h2>
          <h2 className='text-xl'>I am a <span className='text-primary'>{roles}<Cursor/></span></h2>
          <p className='font-light text-md text-justify'>An enthusiastic coder in <span className='text-primary'>web and game development</span> from South Tangerang, Indonesia. I love learning new things. I also have expertise in making voice-overs with the quality of voice that I have.</p>
          <div className=' rounded-lg w-full drop-shadow-3xl shadow-secondary text-black bg-tertiary p-5'>
          <ul className='flex space-x-3 text-primary'>
            <li><FaLinkedin /></li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>GitHub</li>

          </ul>
        </div>
        </div>

        <div className='h-[500px] col-span-2 overflow-hidden relative'>
          <img src="./images/anotherme.png" className=" absolute right-[-200px] bottom-[-800px] scale-75" alt="profilepicture" />
        </div>
      </header>
    </div>
  )
}
