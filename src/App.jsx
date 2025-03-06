import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter';

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
    <div className='bg-tertiary text-white'>
      <nav className='grid grid-cols-3 py-7 px-24'>
        <h1 className='text-xl font-light'>Rayyan <span className='text-primary'>Alfawazy</span></h1>
        <ul className='flex justify-center space-x-10 font-light'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <br/>
      </nav>
      <header className='grid grid-cols-3 px-25'>
        <div className='place-content-center space-y-2'>
          <h1 className='font-bold text-4xl'>Hi Everyone 👋</h1>
          <h2 className='text-2xl font-light'>My name is <span className='text-primary'>Rayyan Alfawazy Adheswarna</span></h2>
          <h2 className='text-xl'>I am a <span className='text-primary'>{roles}<Cursor/></span></h2>
          <p className='font-light text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa atque reiciendis odit. Sit ducimus laborum quidem sunt quas perspiciatis ratione rem, nulla, nobis provident perferendis debitis officiis! Quibusdam numquam odit ea dolore quo perspiciatis quae, deleniti soluta illum, repellat atque aut alias assumenda pariatur maiores quis nisi. Autem, eos ipsa.</p>
        </div>

        <div className='h-[500px] col-span-2 overflow-hidden relative'>
          <img src="./images/anotherme.png" className=" absolute right-[-200px] bottom-[-800px] scale-75" alt="profilepicture" />
        </div>
      </header>
    </div>
  )
}
