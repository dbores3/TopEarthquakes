import { GiEarthCrack } from 'react-icons/gi'
import { Link } from 'react-router-dom'

//@desc Header for the Website. Contains the Links
//author David Bores 
function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>FUTURICE EARTHQUAKES</Link>
      </div>
      <ul>
        <>
        <li>
          <Link to='/top_earthquakes'>
            <GiEarthCrack /> Top earthquakes
          </Link>
        </li>
        </>
      </ul>
    </header>
  )
}

export default Header