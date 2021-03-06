import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Nav from './components/Nav'
import Signup from './components/Signup'
import Login from './components/Login'
import HomePage from './components/HomePage'
import { userContext } from './context';
import People from './components/People';
import User from './components/User';
import Following from './components/Following';
import QuestionLikes from './components/QuestionLikes';
import cookie from 'js-cookie'


function App() {
  const haveToken = cookie.get('jwt') ? true : false 
  const [logedIn, setLogedIn] = useState(haveToken)
  const [activeUserId, setactiveUserId] = useState('')

  return (
    <div className="App" >
      <userContext.Provider value={{logedIn, setLogedIn, activeUserId, setactiveUserId}}>
        <Nav />
        <Router>
          <Route path = '/signup'component={Signup} />
          <Route path = '/login'component={Login} />
          <Route path = '/people' component={People} />
          <Route path = '/user/:id' component ={User}/>
          <Route path = '/following/' component ={Following}/>
          <Route path = '/'component={HomePage } exact/>
          <Route path = '/ques/:quesId' component={QuestionLikes} />
        </Router>
      </userContext.Provider>
     
    </div>
  );
}

export default App;
