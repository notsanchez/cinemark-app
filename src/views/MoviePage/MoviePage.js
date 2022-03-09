import React from 'react'
import { useState } from "react"
import Banner from "./js/Banner"
import Title from "./js/Title"
import Details from "./js/Details"
import Tickets from './js/Tickets'

export default function MoviePage() {
    const [movieTitle] = useState('Doutor Estranho no Multiverso da Loucura')
  
    return (
      <>
      <Banner/>
      <Title movieTitle={movieTitle} key={movieTitle}/>
      <Details/>
      <Tickets/>
      </>
    )
  }
