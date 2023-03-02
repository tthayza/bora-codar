
import { Closing } from './components/Closing'
import { DataBox } from './components/DataBox'
import { DestinyBox } from './components/DestinyBox'
import { InfoBox } from './components/InfoBox'
import { PassengerBox } from './components/PassengerBox'


function App() {

  return (
    <div className="container">
      <h2>Cartão de embarque</h2>
      <div className="card">
        <DataBox />
        <DestinyBox />
        <PassengerBox />
        <InfoBox />
        <Closing/>


      </div>
      <footer>
        <p>Qualquer problema procure o balcão de atendimento da sua companhia aérea</p>
      </footer>
    </div>
  )
}

export default App
