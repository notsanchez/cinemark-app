import React from 'react'
import '../css/Header.css'

export default function Header() {
  return (
    <header>
        <div className="navbar navbar-left">
            <a id="menu-button" href="#"><img src="./img/menu.svg" alt="Menu button"></img></a>
        </div>
        <h1>CINEMARK</h1>
        <div className="navbar navbar-right">
            <a href="#"><img src="./img/search.svg" alt="Search button"></img><span>Busca</span></a>
            <a href="#"><img src="./img/login.svg" alt="Login button"></img><span>Login</span></a>
        </div>
    </header>
  )
}
