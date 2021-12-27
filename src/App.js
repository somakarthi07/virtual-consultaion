import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import 'materialize-css/dist/css/materialize.min.css';

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PrivateRoute from "./private/PrivateRoute/PrivateRoute";

import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/register" component={RegisterPage}/>
            <PrivateRoute exact path="/users" component={UsersPage} />
            <Route path="*" component={NotFound}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
