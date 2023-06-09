import { useState } from 'react'
import { CompanyForm } from './components/CompanyForm'
import { ContactForm } from './components/ContactForm'
import { Header } from './components/Header'
import { ProjectForm } from './components/ProjectForm'
import './styles/global.css'
function App() {
  const [currentForm, setcurrentForm] = useState(1)
  const [currentColor2, setCurrentColor2] = useState('#8D8D99')
  const [currentColor3, setCurrentColor3] = useState('#8D8D99')
  const [bgColor1, setBgColor1] = useState('#BC3B52')
  const [bgColor2, setBgColor2] = useState('#E1E1E6')
  const [bgColor3, setBgColor3] = useState('#E1E1E6')
  const nextForm = () => {
    if (currentForm == 1) {
      setcurrentForm(currentForm + 1)
      setBgColor1('#1D8841')
      setBgColor2('#BC3B52')
      setCurrentColor2('#FFFFFF')
    } else if (currentForm == 2) {
      setcurrentForm(currentForm + 1)
      setBgColor2('#1D8841')
      setBgColor3('#BC3B52')
      setCurrentColor3('#FFFFFF')
      console.log(currentColor3)
    } else if (currentForm == 3) {
      setBgColor2('#1D8841')
    }
  }
  const prevForm = () => {
    if (currentForm == 2) {
      setBgColor1('#BC3B52')
      setBgColor2('#E1E1E6')
      setCurrentColor2('#8D8D99')
    } else if (currentForm == 3) {
      setBgColor2('#BC3B52')
      setBgColor3('#E1E1E6')
      setCurrentColor3('#8D8D99')
    }

    setcurrentForm(currentForm - 1)
  }

  return (
    <div className="app">
      <div className="container">
        <Header
          bgColor1={bgColor1}
          bgColor2={bgColor2}
          bgColor3={bgColor3}
          currentColor2={currentColor2}
          currentColor3={currentColor3}
        />

        <div className="divider"></div>
        {currentForm == 1 && <ContactForm nextForm={nextForm} />}
        {currentForm == 2 && (
          <CompanyForm nextForm={nextForm} prevForm={prevForm} />
        )}
        {currentForm == 3 && <ProjectForm prevForm={prevForm} />}
      </div>
    </div>
  )
}

export default App
