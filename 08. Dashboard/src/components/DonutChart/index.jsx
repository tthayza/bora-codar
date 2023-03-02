
import { useEffect , useState} from "react";
import "./styles.css"


function DonutChart(props) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (number < props.limit){
      const intervalo = setInterval(() => {
        setNumber(prev => prev + 1)
      }, 15);
      return () => clearInterval(intervalo);
    }
  }, [number]);


  let initialColor = props.color ==  "blue" ? "#CE9FFC" : "#DF9780"
  let finalColor = props.color ==  "blue" ? "#7367F0" : "#A66DE9"

  let gradientName = props.color ==  "blue" ? "GradientColor" : "GradientColor2"
  let circleClassName = props.color ==  "blue" ? "circle" : "circle2"


  return (

    <div className="progress-bar">
      <div className="outer">
        <div className="inner">
          <div id="percent">
            <div><h1>
            {number}%</h1> </div>
            <p>alcançada</p>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="16rem" >
        <defs>
          <linearGradient id={gradientName} >
            <stop offset="0%" stopColor={initialColor} />
            <stop offset="100%" stopColor={finalColor} />
          </linearGradient>
        </defs>
          <circle cx="80" cy="80" r="60" strokeLinecap="round" className={circleClassName} />
      </svg>
    </div>
  )
}

export default DonutChart