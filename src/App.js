import React from 'react'
import {Route, Switch} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomepageLayout from './layout/HomepageLayout'
import Homepage from './Pages/Hompage'
import Registration from './Pages/Registration'
import './default.scss'

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' render={() =>(
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )} />
          <Route path='/registration' render={() =>(
            <MainLayout>
              <Registration />
            </MainLayout>
          )}  />
        </Switch>
    </div>
  );
}

export default App;
