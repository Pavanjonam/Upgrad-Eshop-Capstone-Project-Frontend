import logo from './logo.svg';
import './App.css';
import NavBar from './core/Header';
import { ConnectedRouter } from 'connected-react-router';
import Screen from './core/Screen';
import routes from '../components/app';

function App(props) {
  return (
    <ConnectedRouter history={props.history}>
    <div className="App">
      {routes}
    </div>
    </ConnectedRouter>
  );
}

export default App;