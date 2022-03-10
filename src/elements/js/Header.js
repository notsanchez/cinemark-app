import { Link } from "react-router-dom"
import React from 'react'
import '../css/Header.css'

export default function Header() {
  return (
    <header>
        <div className="navbar navbar-left">
            <Link to="/movie" id="menu-button"><img src="./img/menu.svg" alt="Menu button"></img></Link>
        </div>
        <Link to="/"><h1>CINEMARK</h1></Link>
        <div className="navbar navbar-right">
            <Link to="/"><img src="./img/search.svg" alt="Search button"></img><span>Busca</span></Link>
            <Link to="/login"><img src="./img/login.svg" alt="Login button"></img><span>Login</span></Link>
        </div>
    </header>
  )
}
