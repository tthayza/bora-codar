import React, { useEffect, useState } from "react"
import cancel from "../../assets/cancel.svg"
import progressFile from "../../assets/progress-file.svg"
import fileUploaded from "../../assets/uploaded-file.svg"
import "./styles.css"

function File(props) {
  const [currentFile, setCurrentFile] = useState(progressFile)
  const { name, size } = props
  const [percentage, setPercentage] = useState(9)
  const [visibility, setVisibility] = useState("visible")
  const [color, setColor] = useState("#9892a6")
  const [bgColor, setBgColor] = useState("crimson")
  useEffect(() => {
    if (percentage < 100) {
      const intervalo = setInterval(() => {
        setPercentage((prev) => prev + 1)
      }, 90)
      return () => clearInterval(intervalo)
    } else {
      setVisibility("hidden")
      setColor("green")
      setBgColor("green")
      setCurrentFile(fileUploaded)
    }
  }, [percentage])
  const [display, setDisplay] = useState("flex")

  return (
    <div className="file" style={{ display: display }}>
      <div className="image">
        <img src={currentFile} alt="" />
      </div>
      <div className="infos">
        <div className="top">
          <div className="info">
            <h2 className="name"> {name}</h2>
            <h3 className="size">{size}</h3>
          </div>
          <div className="icon" onClick={() => setDisplay("none")}>
            <img src={cancel} alt="" style={{ visibility: visibility }} />
          </div>
        </div>
        <div className="bottom">
          <div className="progress-bar">
            <div className="bar">
              <div
                className="progress"
                style={{ width: percentage * 3, backgroundColor: bgColor }}
              ></div>
            </div>
          </div>
          <div className="current-status">
            <p style={{ color: color }}>{percentage}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default File
