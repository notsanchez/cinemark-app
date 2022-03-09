import { Link } from 'react-router-dom'
import React from 'react'
import '../css/Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className='register-notification'>
        <h3>Receba a Programação por e-mail</h3>
        <Link to="/register"><button>CADASTRE-SE</button></Link>
      </div>
      <div className='footer-container'>
        <div className='social-medias'>
          <div className='social-media-block facebook'>
            <img src='./img/facebook.svg' alt='Facebook Logo'></img>
            <div className='social-media-span'>
              <span>FACEBOOK</span>
              <span>/CINEMARKOFICIAL</span>
            </div>
          </div>
          <div className='social-media-block twitter'>
            <img src='./img/twitter.svg' alt='Twitter Logo'></img>
            <div className='social-media-span'>
              <span>TWITTER</span>
              <span>/CINEMARKOFICIAL</span>
            </div>
          </div>
          <div className='social-media-block instagram'>
            <img src='./img/instagram.svg' alt='Instagram Logo'></img>
            <div className='social-media-span'>
              <span>INSTAGRAM</span>
              <span>/CINEMARKOFICIAL</span>
            </div>
          </div>
          <div className='social-media-block youtube'>
            <img src='./img/youtube.svg' alt='Youtuber Logo'></img>
            <div className='social-media-span'>
              <span>YOUTUBE</span>
              <span>/CINEMARKOFICIAL</span>
            </div>
          </div>
          <div className='social-media-block linkedin'>
            <img src='./img/linkedin.svg' alt='Linkedin Logo'></img>
            <div className='social-media-span'>
              <span>LINKEDIN</span>
              <span>/CINEMARKOFICIAL</span>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className='about-us'>
          <div className='about-us-cols col-1'>
            <ul>FILMES</ul>
            <li>PROGRAMAÇÃO</li>
            <li>EM CARTAZ</li>
            <li>INGRESSOS</li>
          </div>
          <div className='about-us-cols col-2'>
            <ul>MEU CINEMARK</ul>
            <li>PROGRAMAÇÃO</li>
            <li>EM CARTAZ</li>
          </div>
          <div className='about-us-cols col-3'>
            <ul>SNACK BAR</ul>
            <li>CARDÁPIO SNACK BAR</li>
            <li>CARDÁPIO BRADESCO PRIME</li>
          </div>
          <div className='about-us-cols col-4'>
            <ul>SALAS</ul>
            <li>REAL D 3D</li>
            <li>XD</li>    
            <li>D-BOX</li>    
            <li>BRADESCO PRIME</li>    
            <li>MOVIE BISTRÔ</li>    
            <li>ALUGUEL DE SALAS</li>  
          </div>
          <div className='about-us-cols col-5'>
            <ul>A CINEMARK</ul>
            <li>INSTITUCIONAL</li>
            <li>ANUNCIE</li>    
            <li>IMPRENSA</li>    
            <li>GRADE DE PROGRAMAÇÃO</li>    
            <li>APLICATIVOS</li>    
          </div>
          <div className='about-us-cols col-6'>
            <ul>CONTATO</ul>
            <li>CENTRAL DE ATENDIMENTO</li>
            <li>TRABALHE</li>   
          </div>
        </div>
        <hr></hr>
        <div className='logo-container'>
          <div className='logo'>
            <h3>CINEMARK</h3>
            <p>É MAIS QUE CINEMA, É CINEMARK</p>
          </div>
          <span>Copyright &copy; 2022 Cinemark</span>
          <span>POLÍTICA DE PRIVACIDADE</span>
          <span>TERMOS DE USO</span>
        </div>
      </div>
    </footer>
  )
}
