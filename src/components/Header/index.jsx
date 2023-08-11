// import de composant react-router-dom // Link = créer des liens de navigation ; NavLink = gestion des liens actifs 
import { Link, NavLink } from 'react-router-dom'

// importation du logo Kasa
import logo from '../../assets/logo.svg'

// Tableau avec mes liens de navigation // Si je veux ajouter d'autres items, j'ai juste a en ajouter dans ce tableau
const navLink = [
  { name: 'Accueil', href: '/' },
  { name: 'A Propos', href: '/a-propos' },
]

// Mon composant <Header/>
function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Kasa" />
      </Link>
      <nav className="header__nav">
        {navLink.map((item) => (
          <NavLink to={item.href} key={item.name} className={({ isActive }) => {
              return isActive ? 'active-link' : ''
            }}>
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
