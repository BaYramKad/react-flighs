import appStyle from './App.module.scss'

import {NavLink, Route} from 'react-router-dom'
import {BrowserRouter as Router} from "react-router-dom";
import  FlighsPage  from './pages/FlighsPage';

import {connect} from 'react-redux'
import React from 'react';

class App extends React.Component {

  render() {
    return (
      <Router>
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
      </Router>
     )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.flighs.items
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setFlighs: (items) => dispatch(FlighsCreator(items))
//   }
// }

export default connect(mapStateToProps)(App);
