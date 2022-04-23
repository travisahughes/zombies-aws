import { Router, Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import ArenaPage from './Arena';
import BattlePage from './Battle';
import SelectionPage from './Selection';
import SearchPage from './Search';

export default function Arena() {
  const history = useHistory();

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/arena/battle">
            <BattlePage />
          </Route>
          <Route path="/arena/search">
            <SearchPage />
          </Route>
          <Route path="/arena/selection">
            <SelectionPage />
          </Route>
          <Route path="/">
            <ArenaPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
