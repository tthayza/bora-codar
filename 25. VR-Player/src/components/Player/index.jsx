import './style.css'
export const Player = () => {
  return (
    <div className="player">
      <iframe
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
