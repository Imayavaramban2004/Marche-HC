import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MediaCenterPage from './pages/MediaCenterPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/media-center" component={MediaCenterPage} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;