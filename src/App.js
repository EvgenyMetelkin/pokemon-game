import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';
import cn from 'classnames';

import HomePage from './routes/Home';
import GamePage from './routes/Game';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';
import NotFound from './routes/NotFound';
import MenuHeaderBlock from './components/MenuHeader';

import s from './style.module.css';

const App = () => {
  const match = useRouteMatch('/');
  return (
        <Switch>
          <Route path="/404" component={NotFound}/>
          <Route>
            <>
              <MenuHeaderBlock bgActive={!match.isExact} />
              <div className={cn(s.wrap, {
                  [s.isHomePage]: match.isExact
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
  )
};

export default App;