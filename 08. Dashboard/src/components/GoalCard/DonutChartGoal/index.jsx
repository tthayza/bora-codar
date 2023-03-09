
import { useEffect , useState} from "react";
import "./styles.css"


function DonutChartGoal(props) {
  const [number, setNumber] = useState(0);

  // useEffect(() => {
  //   if (number < props.limit){
  //     const intervalo = setInterval(() => {
  //       setNumber(prev => prev + 1)
  //     }, 15);
  //     return () => clearInterval(intervalo);
  //   }
  // }, [number]);



  return (

    <div className="progress-bar">
      <svg viewBox="0 0 232 232">
        <circle
            cx="50%"
            cy="50%"
            r="98.5"
            opacity="0.1"
            stroke="#D9D9D9"
        />
        <circle
            className="circle-goal"
            cx="50%"
            cy="50%"
            r="98.5"
            stroke="url(#paint0_linear_201_104)"
            strokeDashoffset={618 -(618 * props.percent) / 100}
        />

        <defs>
          <linearGradient
            id="paint0_linear_201_104"
            x1="0.5"
            y1="82"
            x2="154.842"
            y2="178.702"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DF9780" />
            <stop offset="1" stopColor="#A66DE9" />
          </linearGradient>
        </defs>
      </svg>

      <div className="content goals">
          <h3> {number}% </h3>
          <p> alcançada </p>
      </div>
    </div>
  )
}

export default DonutChartGoal