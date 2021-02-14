import { useLocation, Route, Switch, Redirect } from 'react-router-dom';
import cn from 'classnames';

import HomePage from './routes/Home';
import GamePage from './routes/Game';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';
import NotFound from './routes/NotFound';
import MenuHeaderBlock from './components/MenuHeader';

import {FireBaseContext} from './context/firebaseContext';

import s from './style.module.css';
import Firebase from './service/firebase';

const App = () => { 
  const location = useLocation(); 
  const isPadding = location.pathname === '/' || location.pathname === '/game/board' || location.pathname === '/home';

  return ( 
      <FireBaseContext.Provider value={new Firebase()}>
        <Switch>
          <Route path="/404" component={NotFound}/>
          <Route>
            <>
              <MenuHeaderBlock bgActive={!isPadding} />
              <div className={cn(s.wrap, {
                  [s.isHomePage]: isPadding
              })}>
                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/home" component={HomePage} />
                  <Route path="/game" component={GamePage} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/contact" component={ContactPage} />
                  <Route component={NotFound} />
                  <Route render={() => (
                    <Redirect to = "/404"/>
                  )} />
                </Switch>
              </div>

            </>
          </Route>
        </Switch> 
      </FireBaseContext.Provider>
  )
};

export default App;