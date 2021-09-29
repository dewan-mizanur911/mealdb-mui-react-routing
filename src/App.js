import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import Home from "./components/Home/Home";
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { useState } from 'react';
import { useEffect } from 'react';
import NoMeals from './components/NoMeals/NoMeals';

function App() {
  const [searchName, setSearchName] = useState('');
  const [meals, setMeals] = useState([]);
  const handleOnSearch = name => {
    setSearchName(name);
  }
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`)
      .then(res => res.json())
      .then(data => setMeals(data.meals));
  },[searchName])
  return (
      <div className="App">
        <Router>
      <Header handleOnSearch={handleOnSearch}></Header>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/meals">
              <Meals meals={meals}></Meals>
            </Route>
            <Route path="/about">
              <About></About>
          </Route>
          <Route path="/noMeals">
            <NoMeals></NoMeals>
          </Route>
            <Route path="*">
               <NotFound></NotFound>
            </Route>
        </Switch>
      </Router>
      </div>
  );
}

export default App;
