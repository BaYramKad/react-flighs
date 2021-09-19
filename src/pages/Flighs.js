import React from 'react'
import { useDispatch } from 'react-redux'


import Flighstyle from './Flighs.module.scss'
import time from '../img/await.svg'
import plane from '../img/plane.svg'
import noFavorite from '../img/no-favorite.svg'
import truefavorite from '../img/favorite.svg'
import arrow from '../img/away.svg'

import axios from 'axios'

export const Flighs = ({favorite, id, flight, airline, favorites, addToFavorite, getFavorites}) => {

    const obj = {favorite, id, flight, airline, parentId: id}
    // let isFavorite = favorites.some((item) => item.parentId === obj.id)

    // const addToFavorites = async () => {
    //     addToFavorite()
    //     // let filterFav = favorites.find((item) => item.parentId === obj.id)
    //     // try {
    //     //     if (filterFav) {
    //     //         await axios.delete(`https://6116b4cd095013001796b0a1.mockapi.io/favorites/${filterFav.id}`)
    //     //     } else  {
    //     //         const {data} = await axios.post('https://6116b4cd095013001796b0a1.mockapi.io/favorites', obj)
    //     //         addToFavorite(data)
    //     //     }
    //     //     const {data} = await axios.get('https://6116b4cd095013001796b0a1.mockapi.io/favorites')
    //     //     getFavorites(data)
    //     // } catch (error) {
    //     //     alert(error)
    //     // }
    // }

    
        const dispatch = useDispatch()
        return <div className='mb-20' >
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
                    <img onClick={ () => dispatch({type:'ADD_FAVORITE'})} src={"isFavorite" ? truefavorite : noFavorite} alt='#' />
                    <div>
                        <strong><span>Price:</span>{flight.price} р</strong>
                    </div>
                </div>
            </div> 
            <hr className={Flighstyle.hr}/>
        </div>
}
