import img1 from './assets/img1.svg'
import img2 from './assets/img2.svg'
import img3 from './assets/img3.svg'
import img4 from './assets/img4.svg'
import img5 from './assets/img5.svg'
import img6 from './assets/img6.svg'
import img7 from './assets/img7.svg'
import img8 from './assets/img8.svg'
import './styles/global.css'
function App() {
  return (
    <div className="app">
      <header>
        <h1>The — Abstract Gallery</h1>
        <i className="ph ph-arrow-down-right"></i>
      </header>
      <div className="gallery grid">
        <div className="model-1 grid">
          <div className="container">
            <img className="image" src={img1} alt="Imagem texturizada" />
            <span>Abstract Name</span>
          </div>
          <div className="container">
            <img className="image" src={img2} alt="Abstracte image" />
            <span>Abstract Name</span>
          </div>
          <div className="container">
            <img className="image" src={img3} alt="Abstracte image" />
            <span>Abstract Name</span>
          </div>
          <div className="container horizontal">
            <img className="image" src={img4} alt="Abstracte image" />
            <span>Abstract Name</span>
          </div>
        </div>

        <div className="model-2 grid">
          <div className="container">
            <img className="image" src={img5} alt="Abstracte image" />
            <span>Abstract Name</span>
          </div>
          <div className="container">
            <img className="image" src={img6} alt="Abstracte image" />
            <span>Abstract Name</span>
          </div>
          <div className="container">
            <img className="image" src={img7} alt="Abstracte image" />
            <span>Abstract Name</span>
          </div>
          <div className="container horizontal">
            <img className="image" src={img8} alt="Abstracte image" />
            <span>Abstract Name</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
