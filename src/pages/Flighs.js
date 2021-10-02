import React from 'react'

import Flighstyle from './Flighs.module.scss'
import time from '../img/await.svg'
import plane from '../img/plane.svg'
import noFavorite from '../img/no-favorite.svg'
import truefavorite from '../img/favorite.svg'
import arrow from '../img/away.svg'

export const Flighs = ({isFavorite, id, flight, airline, favorite, addToFavorite}) => {
    let obj = {isFavorite, id, flight, airline, parentId: id}
        return <div className='mb-20'>
            <div className='d-flex justify-around align-center'>
                <div className={Flighstyle.plane}>
                    <img src={plane} alt='plane'/>
                </div>
                <div className={Flighstyle.flighs}>
                    <div>
                        <span > Moscow (SVO) </span>
                        <img src={arrow} alt='#'/>
                        <span > New York City (JFK) </span>
                    </div>
                    <div>
                        <span className={Flighstyle.info}>28 June, 2020</span>
                        <img src={time} alt='#'/>
                        <span className={Flighstyle.info}> {flight.depscheduled} </span>
                    </div>
                    <span className={Flighstyle.info}>{airline.name}</span>
                </div>
                <div className={Flighstyle.favorite}>
                    <img onClick={() => addToFavorite(obj)} src={ favorite ? truefavorite : noFavorite} alt='favorite'/>
                    <div><strong><span>Price:</span>{flight.price} р</strong></div>
                </div>
            </div>
            <hr className={Flighstyle.hr}/>
        </div>
}