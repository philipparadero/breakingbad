
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Episodes from './pages/Episodes';
import Characters from './pages/Characters';
import Quotes from './pages/Quotes';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/characters'  component={Characters}/>
          <Route path='/episodes'  component={Episodes}/>
          <Route path='/quotes'  component={Quotes}/>

        </Switch>      
      </Router>
    </>
  );
}

export default App;
