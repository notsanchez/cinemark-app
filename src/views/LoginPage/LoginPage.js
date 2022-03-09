import { Link } from 'react-router-dom'
import React from 'react'
import './LoginPage.css'

export default function LoginPage() {
  return (
    <div className='login-container'>
        <div className='login-block'>
            <form>
                <div className='form-block username-block'>
                    <div className='username-block-text'>
                        <span>Nome de usuário ou email</span>
                    </div>
                    <input type="text"></input>
                </div>
                <br></br>
                <div className='form-block password-block'>
                    <div className='password-block-text'>
                        <span>Senha</span>
                        <a href='#'>Esqueceu a senha?</a>
                    </div>
                    <input type="password"></input>
                </div>
                <input type="submit" value="Login"></input>
            </form>
            <div className='ask-register-block'>
                <div className='ask-register-block-content'>
                    <span>Novo na cinemark?</span>
                    <Link to="/register"><a href='#'>Crie uma conta.</a></Link>
                </div>
            </div>
            <div className='about-us-block'>
                <Link to='/'>Termos de serviço</Link>
                <Link to='/'>Privacidade</Link>
                <Link to='/'>Sobre nós</Link>
            </div>
        </div>
    </div>
  )
}
    