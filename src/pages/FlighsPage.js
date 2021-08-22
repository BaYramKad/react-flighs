import React from 'react'
import Flighstyle from './Flighs.module.scss'

import arrow1 from '../img/arrow1.svg'
import celendar from '../img/the-celendar.svg'

import city1 from '../img/city-1.png'
import city2 from '../img/city-2.png'
import city3 from '../img/city-3.png'
import city4 from '../img/Intersect.png'
import logOut from '../img/log-out.svg'

import { Flighs } from './Flighs'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import FavoriteFlighsCreator from '../redux/actions/FavoriteFlighs'

import axios from 'axios'
import addToFavorite from '../redux/actions/addFavorite'

class FlighsPage extends React.Component {
    componentDidMount() {
        ( async () => {
            const {data} = await axios.get('https://6116b4cd095013001796b0a1.mockapi.io/favorites')
            this.props.getFavoritesFlighs(data)
        })()
    }

    render() {
        return (
            <div className={Flighstyle.wrapper}>
                <div className={Flighstyle.logOut}>
                    <NavLink to='/'>
                        <a>Выйти </a>
                        <img src={logOut} alt='log out'/>
                    </NavLink>
                </div>
                <div className={Flighstyle.mainFlighs}>
                <div>
                    <div className='d-flex justify-between align-center mb-25'>
                        <div className={`${Flighstyle.title} d-flex justify-between`}>
                            <span> Вылеты </span>
                            <img src={arrow1} alt='arrow'/>
                            <span>SVO-JFK</span>
                        </div>
                        <div className={`${Flighstyle.date} d-flex align-center`}>
                            <span>07 июля 2020</span>
                            <img src={celendar} alt='#' />
                        </div>
    
                    </div>
                    <div className='d-flex align-start justify-between'>
                        <img src={city1} alt='#' />
                        <img src={city2} alt='#' />
                        <img src={city3} alt='#' />
                        <img src={city4} alt='#' />
                    </div>
    
                    <p> Добавлено в избранное: {this.props.favorites.length} рейсов </p>
                    <div className={Flighstyle.flighsBlock}>
                       {
                           this.props.items.map((items, i) => <Flighs key={i} {...items} favorites={this.props.favorites}

                           addToFavorite={this.props.addToFavorite}
                           getFavorites={this.props.getFavoritesFlighs} /> )
                       }
                    </div>
                </div>
            </div>
            </div>
        )
    }
        
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favoritesFlighs.fItems
    }
}

const maDispatchToProps = (dispatch) => {
    return {
        getFavoritesFlighs: (items) => dispatch(FavoriteFlighsCreator(items)),
        addToFavorite: (item) => dispatch(addToFavorite(item))
    }
}

export default connect(mapStateToProps, maDispatchToProps)(FlighsPage)
