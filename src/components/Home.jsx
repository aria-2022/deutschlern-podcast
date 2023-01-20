import React from 'react'
import Audio from '../components/Audio'
import { AppContext } from '../App'
import { useContext } from 'react'

import a1 from '../assets/a1.mp3'
import a2 from '../assets/a2.mp3'
import a3 from '../assets/a1.mp3'
import a4 from '../assets/a2.mp3'

function Home() {
  return (
    <div>
      <p> 🎧 </p>
      <div className="hero min-h-screen" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGlvbiUyMGhlYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60')` }}>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">LEARN GERMAN BY PODCAST</h1>
            <h2 className="mb-5 text-5xl font-bold">REAL LIFE CONVERSATION</h2>
          </div>
        </div>
      
      </div>
      <div>
      <a role="button" className="btn">🎧 LISTEN PODCAST</a>
      </div>
        <Audio media={a1} />
        <Audio media={a2} />
        <Audio media={a3} />
        <Audio media={a4} />
      <div>
        <a role="button" className="btn">🎧 ALL EPISODES</a>
      </div>
    </div>
  )
}

export default Home