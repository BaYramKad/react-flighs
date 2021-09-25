import React from 'react';
import {connect} from 'react-redux'

import appStyle from './App.module.scss'

import {NavLink, Route} from 'react-router-dom'

import FlighsPage from './pages/FlighsPage';

class App extends React.Component {
  render() {
    return (
        <div className={`${appStyle.wrapper} clear d-flex justify-center align-center`}>
              <Route path='/' exact>
                <div className={`${appStyle.autorizeBlock} d-flex`}>
                  <h1 className={appStyle.title}>Simple Flight Check</h1>
                  <div className={appStyle.autorize}>
                      <div className={appStyle.login}>
                        <span> Логин: </span>
                        <input />
                      </div>
                      <div className={appStyle.password}>
                        <span> Пароль: </span>
                        <input />
                      </div>
                      <div className={appStyle.buttonBlock}>
                        <NavLink to='/flights'>
                            <button className={appStyle.button}> Войти </button>
                        </NavLink>
                      </div>
                  </div>
                </div>
              </Route>
    
              <Route path='/flights' exact component={ () => <FlighsPage 
              items={this.props.items}   />} />
            </div>
     )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.flightItems.items
  }
}

export default connect(mapStateToProps)(App);
