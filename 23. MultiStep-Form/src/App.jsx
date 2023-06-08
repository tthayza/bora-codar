import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { CompanyForm } from './components/CompanyForm'
import { ContactForm } from './components/ContactForm'
import { ProjectForm } from './components/ProjectForm'
import './styles/global.css'

function App() {
  const [visibilityContact, setVisibilityContact] = useState('block')
  const [visibilityCompany, setVisibilityCompany] = useState('none')
  const [visibilityProject, setVisibilityProject] = useState('none')
  const currentDisplayContact = () => {
    setVisibilityCompany('block')
    setVisibilityContact('none')
  }
  const currentDisplayCompanyBack = () => {
    setVisibilityCompany('none')
    setVisibilityContact('block')
  }
  const currentDisplayCompanyNext = () => {
    setVisibilityCompany('none')
    setVisibilityProject('block')
  }
  const currentDisplayProject = () => {
    setVisibilityContact('block')
    setVisibilityProject('none')
  }

  return (
    <div className="app">
      <div className="container">
        <header>
          <div className="item">
            <p>1</p> <h2>Contato</h2>
          </div>
          <div className="icon">
            <ChevronRight size={20} color="#323238" />
          </div>
          <div className="item">
            <p>2</p> <h2>Empresa</h2>
          </div>
          <div className="icon">
            <ChevronRight size={20} color="#323238" />
          </div>
          <div className="item">
            <p>3</p> <h2>Projeto</h2>
          </div>
        </header>
        <div className="divider"></div>
        <ContactForm
          visibility={visibilityContact}
          currentDisplayContact={currentDisplayContact}
        />
        <CompanyForm
          visibility={visibilityCompany}
          currentDisplayCompanyBack={currentDisplayCompanyBack}
          currentDisplayCompanyNext={currentDisplayCompanyNext}
        />
        <ProjectForm
          visibility={visibilityProject}
          currentDisplayProject={currentDisplayProject}
        />
      </div>
    </div>
  )
}

export default App
