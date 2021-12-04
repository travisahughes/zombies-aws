import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CasinoPage from './Casino';
import SplitPathPage from './SplitPath';

export default function Location() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/locations/split-path">
            <SplitPathPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/locations/casino">
            <CasinoPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
