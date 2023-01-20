import React from 'react'
import Audio from '../components/Audio'
import { AppContext } from '../App'
import { useContext } from 'react'

const audio1 = require('../assets/a1.mp3') 
const audio2 = require('../assets/a2.mp3') 
const audio3 = require('../assets/a3.mp3') 
const audio4 = require('../assets/a4.mp3') 

function Podcast() {
  const { data, user } = useContext(AppContext)
  return (
    <div>
      <Audio media={audio1} />
      <Audio media={audio2} />
      <Audio media={audio3} />
      <Audio media={audio4} />

      {data && data.podcast.map((i, j) => <div key={j}>
        {data.podcast.slice(0,4).map(i => <>
          <img src={i.img} alt="pic" height={100} width={100}/>
          <h1>{i.title}</h1>
          <h1>{i.date}</h1>
          {user? <p>{i.text}</p> : <p>Join our premium membership to enjoy the the text</p>}
          <Audio media={i.audio} />
        </>)}
      </div>)}
    </div>
  )
}

export default Podcast