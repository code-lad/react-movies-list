import './App.css'
import Header from './components/header'
import Home from './components/home'
import Action from './components/action'
import Comedy from './components/comedy'
import Thriller from './components/thriller'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
          <main className="container">
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/action" component={Action}/>
              <Route path="/comedy" component={Comedy}/>
              <Route path="/thriller" component={Thriller}/>
            </Switch>
          </main>
      </div>
    </Router>
  );
}
export default App;
