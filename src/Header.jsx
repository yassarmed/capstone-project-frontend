import { Link } from "react-router-dom"
export function Header() {
  return (
    <header>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MovieLibrary</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item" id="navbar">
        <Link to="/">Home</Link>
        </li>
      
        <li className="nav-item" id="navbar">
        <Link to="/Login">Login</Link>
        </li>
      
        <li className="nav-item" id="navbar">
        <Link to="/Logout">Logout</Link>
        </li>

        <li className="nav-item" id="navbar">
        <Link to="/signup">SignUp</Link>
        </li>

        <li className="nav-item" id="navbar">
        <Link to="/movies">Movies</Link>
        </li>

        <li className="nav-item" id="navbar">
        <Link to="/favorites">Favorites</Link>
        </li>

        <li className="nav-item" id="navbar">
        <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
  )
}