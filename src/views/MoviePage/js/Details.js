import React from 'react'
import '../css/Details.css'

export default function Details() {
  return (
    <div className='one'>
        <div className="details">
            <div className="about cast">
                <img src="./img/movie-cast.svg" alt="Cast icon"></img>
                <span>Benedict Cumberbatch, Elizabeth Olsen, Benedict Wong</span>
            </div>
            <div className="about director">
                <img src="./img/movie-director.svg" alt="Director icon"></img>
                <span>Sam Raimi</span>
            </div>
            <div className="about destributor">
                <img src="./img/movie-distributor.svg" alt="Destributor icon"></img>
                <span>Walt Disney Studios Motion Pictures</span>
            </div>
        </div>
        <div className="synopsis">
            <h3>Sinopse</h3>
            <div className="text">
                <p>
                    "A porta do multiverso, cheia de mistério e loucura, se abre. 
                    Agora, que Homem de Ferro e Capitão América partiram, após a 
                    batalha de Vingadores: Ultimato, o ex-cirurgião genial deve 
                    cumprir um papel central nos Vingadores. Entretanto, usando 
                    sua mágica para manipular o tempo e o espaço à vontade com 
                    um feitiço proibido e considerado o mais perigoso acabou 
                    abrindo as portas para a loucura conhecida como 'O Multiverso'.
                </p>
                <br></br>
                <p>
                    Para restaurar um mundo onde tudo está mudando, Estranho busca 
                    a ajuda de seu aliado Wong, agora o Mago Supremo, e a Vingadora 
                    mais poderosa: a Feiticeira Escarlate, Wanda. Mas uma terrível 
                    ameaça paira sobre a humanidade e o universo inteiro não pode ser 
                    mantido pelo poder deles apenas. O mais surpreendente, entretanto, 
                    é que o maior perigo do universo se parece exatamente com o Doutor 
                    Estranho".
                </p>
            </div>
        </div>
    </div>
  )
}
