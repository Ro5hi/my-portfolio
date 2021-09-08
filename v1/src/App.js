import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';

const Home = React.lazy(() => import('./components/Home'))

function App() {
  return (
    <Suspense fallback={""}>
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />
      </Switch>
    </BrowserRouter>
    </Suspense>
  )
}

export default App;
