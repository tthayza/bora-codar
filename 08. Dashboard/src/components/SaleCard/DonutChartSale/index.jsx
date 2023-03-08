
import { useEffect , useState} from "react";
import "./styles.css"


function DonutChartSale(props) {
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
      <svg viewBox="0 0 225 225">
        <circle
            cx="50%"
            cy="50%"
            r="98.5"
            opacity="0.1"
            stroke="#D9D9D9"
        />
        <circle
            className="circle-sale"
            cx="50%"
            cy="50%"
            r="98.5"
            stroke="url(#paint0_linear_201_85)"
        />

        <defs>
          <linearGradient
            id="paint0_linear_201_85"
            x1="-9"
            y1="82"
            x2="145"
            y2="178"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CE9FFC" />
            <stop offset="1" stopColor="#7367F0" />
          </linearGradient>
        </defs>
      </svg>
      {/*
          <div id="percent">
            <div>
              <h1>
                {number}%
              </h1>
            </div>
            <p>alcançada</p>
          </div> */}
    </div>
  )
}

export default DonutChartSale