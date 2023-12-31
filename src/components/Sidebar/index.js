import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-n.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      {/* <img className="sub-logo" src={LogoSubtitle} alt="nurman" /> */}
    </Link>
    <nav>
      <NavLink exact="true" activateClassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activateClassname="active" className='about-link' to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
		</NavLink>
      <NavLink exact="true" activateClassname="active" className='contact-link' to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
	 <ul>
		<li>
			<a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/nurman-jumanov/'>
      <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
			</a>
		</li>
		<li>
			<a target="_blank" rel='noreferrer' href='https://t.me/TengoMilMil'>
      <FontAwesomeIcon icon={faTelegram} color="#4d4d4e" />
			</a>
		</li>
		<li>
			<a target="_blank" rel='noreferrer' href='https://github.com/Nurmanplata/'>
      <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
			</a>
		</li>
		{/* <li>
			<a className='openModal' target="_blank" rel='noreferrer' href='https://t.me/TengoMilMil'>
      <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
			</a>
		</li> */}
	 </ul>
  </div>
)

export default Sidebar
