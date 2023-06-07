import {
  AccessibilityIcon,
  BellIcon,
  HelpCircleIcon,
  KeyRoundIcon,
  Laptop2Icon,
  LogOutIcon,
  UserCircle,
  Users2Icon
} from 'lucide-react'
import astronaut from '../../assets/astronaut.jpg'
import { Item } from '../Item/Item'
import './style.css'

const images = {
  personalData: <UserCircle size={'20px'} color="#38343D" />,
  loginInfos: <KeyRoundIcon size={'20px'} color="#38343D" />,
  notifications: <BellIcon size={'20px'} color="#38343D" />,
  accessibility: <AccessibilityIcon size={'20px'} color="#38343D" />,
  devices: <Laptop2Icon size={'20px'} color="#38343D" />,
  linkedAccounts: <Users2Icon size={'20px'} color="#38343D" />,
  helpCenter: <HelpCircleIcon size={'20px'} color="#38343D" />,
  logOut: <LogOutIcon size={'20px'} color="#38343D" />
}

export const Settings = () => {
  return (
    <div className="settings">
      <header className="header">
        <figure>
          <img
            width="56"
            height="56"
            src={astronaut}
            alt="Ilustração de um astronauta"
          />
        </figure>
        <div className="informations">
          <h1>Marvin McKinney</h1>
          <p>marvin.mckinney@example.com</p>
        </div>
      </header>
      <main>
        <section>
          <h3>CONTA</h3>
          <Item name="Dados pessoais" icon={images.personalData} />
          <Item name="Informações de login" icon={images.loginInfos} />
        </section>
        <section>
          <h3>PREFERÊNCIAS</h3>
          <Item name="Notificações" icon={images.notifications} />
          <Item name="Acessibilidade" icon={images.accessibility} />
        </section>
        <section>
          <h3>PRIVACIDADE</h3>
          <Item name="Dispositivos conectados" icon={images.devices} />
          <Item name="Contas conectadas" icon={images.linkedAccounts} />
        </section>
      </main>
      <footer>
        <Item name="Central de ajuda" icon={images.helpCenter} />
        <Item name="Sair" icon={images.logOut} />
      </footer>
    </div>
  )
}
