import React from 'react'
import '../css/Title.css'

export default function Title({movieTitle}) {
  return (
    <div className='container'>
        <div className='one'>
            <div className="poster-container">
                <div className="poster">
                    <img src="https://i.imgur.com/7LHIju7.jpg" alt="Movie poster"></img>
                </div>
            </div>
            <div className="title-container">
                <div className="title">
                    <h2>{movieTitle}</h2>
                    <div className="title-bottom">
                        <img className="bottom" src="./img/ar12.svg" alt="pg-12"></img>
                        <span className="border-text bottom">180 MIN</span>
                        <span className="border-text bottom">AÇÃO</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
