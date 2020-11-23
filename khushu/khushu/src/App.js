import './App.css';
import Landing from './Landing'
import { Switch , Route} from 'react-router-dom';
import Home from './Home'
import Error from './Error'
import Lectures from './Lectures'
import Books from './Books'
import Feedback from './Feedback'
import Login from './Login'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path='/' component={Landing} exact />
        <Route path='/home' component={Home} />
        <Route path='/lectures' component={Lectures} />
        <Route path='/books' component={Books} />
        <Route path='/feedback' component={Feedback} />
        <Route path='/login' component={Login} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
