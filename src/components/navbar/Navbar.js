import { Link } from "react-router-dom"
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className='header__logo' >GRÁFICOS</div>
      <nav className="header__nav">
        <Link to="/" className="header__nav-element">
          Inicio
        </Link>
        <ul>
          <Link className="header__nav-element" to='/plotly' >Plotly</Link>
        </ul>
        <ul>
          <Link className="header__nav-element" to='/vis' >Vis</Link>
        </ul>
      </nav>
    </header>
  )
}
export default Navbar