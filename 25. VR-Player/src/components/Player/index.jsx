import { useState } from 'react'
import screen from '../../assets/Screen.png'
import './style.css'
export const Player = () => {
  const [display, setDisplay] = useState('none')
  const [displayImg, setDisplayImg] = useState('block')
  const displayHandler = () => {
    if (display === 'none') {
      setDisplay('block')
      setDisplayImg('none')
    } else {
      setDisplay('none')
      setDisplayImg('block')
    }
  }

  return (
    <div className="player">
      <img
        src={screen}
        onClick={() => displayHandler()}
        style={{ display: displayImg }}
      ></img>
      <iframe
        onClick={() => displayHandler()}
        style={{ display: display }}
        loading="eager"
        src="https://www.youtube.com/embed/uL6nu0-zhu0?controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  )
}
