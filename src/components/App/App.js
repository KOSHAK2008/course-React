import Feedbacks from '../Feedbacks/Feedbacks';
import { Home } from '../Home/Home';
import Appartment from '../Appartment/Appartment';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { ThemeContext } from '../utils/ThemeContext';
import { useState } from 'react';
import config from '../utils/confid';
import styles from './App.modules.css'
import Todos from '../Todos/Todos';
import Todo from '../Todo/Todo';
import Counter from '../Counter/function/Counter/Counter';
import CounterViaContext from '../Counter/function/CounterViaContext/CounterViaContext';
import CounterViaState from '../Counter/function/CounterViaState/CounterViaState';
import CounterViaUseStateAndClasses from '../Counter/class/CounterViaUseStateAndClasses/CounterViaUseStateAndClasses'
import { getById, update, remove } from '../data/todos'
import CounterViaContextAndClassesWithStore from '../Counter/class/CounterViaContextAndClassesWithStore/CounterViaContextAndClassesWithStore';
import CounterViaClass from '../Counter/class/Counter Via Class/Counter Via Class';

function App() {

  const [theme, setTheme] = useState(config.defaultTheme);

  const changeTheme = (value) => {
    setTheme(value);
  }

  document.body.className = theme;

  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <div>
          <nav>
            <ul className='topUl'>
              <li>
                <NavLink to="/home" activeStyle={{ fontWeight: "bold", color: "red" }}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/feedbacks" activeStyle={{ fontWeight: "bold", color: "red" }}>Feedbacks</NavLink>
              </li>
              <li>
                <NavLink to="/appartment" activeStyle={{ fontWeight: "bold", color: "red" }}>Appartment</NavLink>
              </li>
              <li>
                <NavLink to="/todos" activeStyle={{ fontWeight: "bold", color: "red" }}>Todos</NavLink>
              </li>
              <ul>Counter
                <ul>Function
                  <li>
                    <NavLink to="/counter" activeStyle={{ fontWeight: "bold", color: "red" }}>Counter</NavLink>
                  </li>
                  <li>
                    <NavLink to="/counterViaContext" activeStyle={{ fontWeight: "bold", color: "red" }}>Counter Via Context</NavLink>
                  </li>
                  <li>
                    <NavLink to="/counterViaState" activeStyle={{ fontWeight: "bold", color: "red" }}>Counter Via State</NavLink>
                  </li></ul>
                <ul>Class
                  <li>
                    <NavLink to="/counterViaClass" activeStyle={{ fontWeight: "bold", color: "red" }}>Counter Via Classes</NavLink>
                  </li>
                  <li>
                    <NavLink to="/counterViaContextAndClassesWithStore" activeStyle={{ fontWeight: "bold", color: "red" }}>Counter Via Context And Classes With Store</NavLink>
                  </li>
                  <li>
                    <NavLink to="/counterViaStateAndClasses" activeStyle={{ fontWeight: "bold", color: "red" }}>Counter Via State and Classes</NavLink>
                  </li>
                </ul>
              </ul>
            </ul>
          </nav>
          <NavLink to='#' onClick={(evt) => changeTheme('dark')} >Dark</NavLink>
          <NavLink to='#' onClick={(evt) => changeTheme('light')} >Light</NavLink>
          <div className={styles.theme}><h3> Theme : {theme}</h3></div>
          <Switch>
            <Route path="/feedbacks">
              <Feedbacks />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/appartment">
              <Appartment />
            </Route>
            <Route exact path="/todos/filter/:filter?">
              <Todos />
            </Route>
            <Route exact path="/todos">
              <Todos />
            </Route>
            <Route path="/todos/:todo/:filter?">
              <Todo getById={getById} update={update} remove={remove} />
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route path="/counterViaContext">
              <CounterViaContext />
            </Route>
            <Route path="/counterViaState">
              <CounterViaState />
            </Route>
            <Route path="/counterViaClass">
              <CounterViaClass />
            </Route>
            <Route path="/counterViaStateAndClasses">
              <CounterViaUseStateAndClasses />
            </Route>
            <Route path="/counterViaContextAndClassesWithStore">
              <CounterViaContextAndClassesWithStore />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
