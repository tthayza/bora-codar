import car from './assets/car.svg'
import driver from './assets/driver.png'
import star from './assets/star.svg'
import './styles/global.css'
function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="bar">
          <div></div>
        </div>
        <div className="header">
          <h1>
            Encontre <span>Boris</span> no local de partida
          </h1>
          <p>Chega em 3 minutos (800 metros)</p>
        </div>
        <div className="infos">
          <div className="driver-id">
            <div className="driver-infos">
              <div className="driver-data">
                <div className="stars">
                  <img src={star} alt="" />
                  <h2> 5.0 </h2>
                </div>
                <div className="name-driver">
                  <h2>Boris C.</h2>
                </div>
              </div>
            </div>
            <div className="driver-img">
              <img src={driver} alt="" />
            </div>
            <div className="car-img">
              <img src={car} alt="" />
            </div>
          </div>
          <div className="car-id">
            <h1>BCD0D19</h1>
            <h2>Honda Civic Rosa</h2>
          </div>
        </div>
        <div className="send-message">
          <input type="text" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
