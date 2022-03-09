import React from 'react'
import './RegisterPage.css'

export default function RegisterPage() {
  return (
    <div className='register-container'>
        <div className='register-block'>
            <form>
                <h3>Preencha seus dados</h3>
                <input className='default-input input-dark' name='name' type="text" placeholder='NOME COMPLETO' required></input>
                <input className='default-input input-light' name='nickname' type="text" placeholder='COMO GOSTARIA DE SER CHAMADO?' required></input>
                <div className='register-flex-2-col id-phone-container'>
                    <input className='default-input input-dark' name='id' type="number" placeholder='CPF' required></input>
                    <input className='default-input input-dark' name='phone' type="number" placeholder='CELULAR'></input>
                </div>
                <div className='register-flex-2-col gender-birthday-container'>
                    <select className='default-input input-light' name='gender' required>
                        <option value="" disabled selected hidden>GENERO</option>
                        <option value="masculine">Masculino</option>
                        <option value="feminine">Feminino</option>
                        <option value="non-binary">Não-binário</option>
                        <option value="other">Outro</option>
                    </select>
                    <input className='default-input input-light' placeholder="DATA DE NASCIMENTO" type="text" onFocus="(this.type='date')" onBlurCapture="(this.type='text')" required></input>
                </div>
                <div className='register-flex-2-col state-city-container'>
                    <select className='default-input input-dark' name='state' required>
                        <option value="" disabled selected hidden>ESTADO</option>
                        <option value="saopaulo-s">São Paulo</option>
                    </select>
                    <select className='default-input input-dark' name='city' required>
                        <option value="" disabled selected hidden>CIDADE</option>
                        <option value="saopaulo-c">São Paulo</option>
                    </select>
                </div>
                <input className='default-input input-light' type="email" placeholder='E-MAIL' required></input>
                <div className='register-flex-2-col password-confirm-container'>
                    <input className='default-input input-dark' type="password" placeholder='SENHA' required></input>
                    <input className='default-input input-dark' type="password" placeholder='CONFIRMAR SENHA' required></input>
                </div>
                <div className='checkbox-container'>
                    <div className='register-terms-flex'>
                        <input className='checkbox-input' type="checkbox" name='terms-of-service' id='terms-of-service' required></input>
                        <label htmlFor='terms-of-service'>LI E ACEITO OS TERMOS DE USO E POLÍTICA DE PRIVACIDADE</label>
                    </div>
                    <div className='register-terms-flex'>
                        <input className='checkbox-input' type="checkbox" name='veridical-term' id='veridical-term' required></input>
                        <label htmlFor='veridical-term'>DECLARO QUE TODAS AS INFORMAÇÕES PREENCHIDAS NESTE CADASTRO SÃO VERÍDICAS</label>
                    </div>
                </div>
                <div className='submit-container'>
                    <input type="submit" value='FINALIZAR CADASTRO'></input>
                </div>
            </form>
            <div className='featuring'>

            </div>
        </div>
        
    </div>
  )
}
