import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Modal from './components/Modal'
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Modal} path='/about' exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
