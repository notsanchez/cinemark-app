import React from 'react'
import '../css/Tickets.css'

export default function Tickets() {
  return (
    <div className='tickets-menu-container'>
        <div className='trailer-container'>
            <h3>Confira o trailer:</h3>
            <div className='trailer'>
              <iframe width="640" 
              height="385" 
              src="https://www.youtube.com/embed/X23XCFgdh2M" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen></iframe>
            </div>    
        </div>
        <div className='tickets-container'>
            <div className='state-container'>
                <h4>São Paulo</h4>
                <div className='configs-container'>
                    <a href='#'>Trocar cidade</a>
                    <a href='#'>Outros filmes</a>
                </div>
                <p>Agora você pode comprar seus ingressos no nosso site!</p>
            </div>
            <div className='day-container default-list'>
                <ul>
                    <li><a id='selected' href='#'>HOJE</a></li>
                    <li><a href='#'>AMANHÃ</a></li>
                    <li><a href='#'>26/02</a></li>
                    <li><a href='#'>27/02</a></li>
                    <li><a href='#'>28/02</a></li>
                    <li><a href='#'>01/03</a></li>
                    <li><a href='#'>02/03</a></li>
                    <li><a href='#'>03/03</a></li>
                </ul>
            </div>
            <div className='sessions-container'>
                <div className='rooms-container'>
                    <div className='city-container default-list'>
                        <h4>Aricanduva</h4>
                    </div>
                    <div className='room-block'>
                        <div className='room-row div-dark top-room-block'>
                            <div className='room-row-side row-left'>
                                <span className='room-state state-red'></span>
                                <span>Sala 1</span>
                                <button>17:50</button>
                                <button>21:30</button>
                            </div>
                            <div className='room-row-side row-right'>
                                <span className='lang-type lang-type-dark'>DUB</span>
                            </div>
                        </div>
                        <div className='room-row div-light'>
                            <div className='room-row-side row-left'>
                                <span className='room-state state-yellow'></span>
                                <span>Sala 2</span>
                                <button>14:30</button>
                                <button>18:10</button>
                            </div>
                            <div className='room-row-side row-right'>
                                <span className='movie-type movie-type-light'>3D</span>
                                <span className='lang-type lang-type-light'>LEG</span>
                            </div>
                        </div>
                        <div className='room-row div-dark'>
                            <div className='room-row-side row-left'>
                                <span className='room-state state-yellow'></span>
                                <span>Sala 3</span>
                                <button>21:00</button>
                            </div>
                            <div className='room-row-side row-right'>
                                <span className='movie-type movie-type-dark'>4D</span>
                                <span className='lang-type lang-type-dark'>LEG</span>
                            </div>
                        </div>
                        <div className='room-row div-light bottom-room-block'>
                            <div className='room-row-side row-left'>
                                <span className='room-state state-green'></span>
                                <span>Sala 4</span>
                                <button>13:00</button>
                                <button>19:00</button>
                            </div>
                            <div className='room-row-side row-right'>
                                <span className='movie-type movie-type-light'>4D</span>
                                <span className='lang-type lang-type-light'>DUB</span>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className='room-block'>
                        <div className='room-row div-dark top-room-block'>
                            <div className='room-row-side row-left'>
                                <span className='room-state state-red'></span>
                                <span>Sala 5</span>
                                <button>17:50</button>
                                <button>21:30</button>
                            </div>
                            <div className='room-row-side row-right'>
                                <span className='movie-type movie-type-dark'>3D</span>
                                <span className='lang-type lang-type-dark'>DUB</span>
                            </div>
                        </div>
                        <div className='room-row div-light'>
                            <div className='room-row-side row-left'>
                                <span className='room-state state-yellow'></span>
                                <span>Sala 6</span>
                                <button>14:30</button>
                                <button>18:10</button>
                            </div>
                            <div className='room-row-side row-right'>
                                <span className='movie-type movie-type-light'>3D</span>
                                <span className='lang-type lang-type-light'>DUB</span>
                            </div>
                        </div>
                        <div className='room-row div-dark'>
                            <div className='room-row-side row-left'>
                                <span className='room-state state-yellow'></span>
                                <span>Sala 7</span>
                                <button>21:00</button>
                            </div>
                            <div className='room-row-side row-right'>
                                <span className='movie-type movie-type-dark'>3D</span>
                                <span className='lang-type lang-type-dark'>DUB</span>
                            </div>
                        </div>
                        <div className='room-row div-light bottom-room-block'>
                            <div className='room-row-side row-left'>
                                <span className='room-state state-green'></span>
                                <span>Sala 8</span>
                                <button>13:00</button>
                                <button>19:00</button>
                            </div>
                            <div className='room-row-side row-right'>
                                <span className='movie-type movie-type-light'>3D</span>
                                <span className='lang-type lang-type-light'>DUB</span>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className='city-container default-list'>
                        <h4>Center Norte</h4>
                    </div>
                    <div className='room-block'>
                        <div className='room-row div-dark top-room-block'>
                            <div className='room-row-side row-left'>
                                <span className='room-state state-red'></span>
                                <span>Sala 1</span>
                                <button>17:50</button>
                                <button>21:30</button>
                            </div>
                            <div className='room-row-side row-right'>
                                <span className='movie-type movie-type-dark'>3D</span>
                                <span className='lang-type lang-type-dark'>DUB</span>
                            </div>
                        </div>
                        <div className='room-row div-light'>
                            <div className='room-row-side row-left'>
                                <span className='room-state state-yellow'></span>
                                <span>Sala 2</span>
                                <button>14:30</button>
                                <button>18:10</button>
                            </div>
                            <div className='room-row-side row-right'>
                                <span className='movie-type movie-type-light'>3D</span>
                                <span className='lang-type lang-type-light'>DUB</span>
                            </div>
                        </div>
                        <div className='room-row div-dark'>
                            <div className='room-row-side row-left'>
                                <span className='room-state state-yellow'></span>
                                <span>Sala 3</span>
                                <button>21:00</button>
                            </div>
                            <div className='room-row-side row-right'>
                                <span className='movie-type movie-type-dark'>3D</span>
                                <span className='lang-type lang-type-dark'>DUB</span>
                            </div>
                        </div>
                        <div className='room-row div-light bottom-room-block'>
                            <div className='room-row-side row-left'>
                                <span className='room-state state-yellow'></span>
                                <span>Sala 4</span>
                                <button>13:00</button>
                                <button>19:00</button>
                            </div>
                            <div className='room-row-side row-right'>
                                <span className='movie-type movie-type-light'>3D</span>
                                <span className='lang-type lang-type-light'>DUB</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='side-container'>
                    <img src='https://i.imgur.com/LweWoF7.jpg'></img>
                </div>
            </div>
        </div>
    </div>
  )
}
