import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import 'material-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.min.css';

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AboutPage from "./pages/AboutPage/AboutPage"
import ContactPage from "./pages/ContactPage/ContactPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import DoctorsPage from "./pages/DoctorsPage/DoctorsPage";
import PrivateRoute from "./private/PrivateRoute/PrivateRoute";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import UserProfileDetail from "./pages/UserProfileDetail/UserProfileDetail";
import PersonalProfilePage from "./pages/PersonalProfilePage/PersonalProfilePage";
import PostsPage from "./pages/PostsPage/PostsPage";
import VideosPage from "./pages/VideosPage/VideosPage";
import PostDetailPage from "./pages/PostDetailPage/PostDetailPage";


import VideoScreen from "./components/VideoScreen/VideoScreen";
import CallAlert from "./components/CallAlert/CallAlert"; 

import NotFound from "./components/NotFound/NotFound";


function App() {
  return (
    <div className="App" style={{height: "100vh", width: "100vw"}}>
      <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/register" component={RegisterPage}/>
            <PrivateRoute exact path="/users" component={UsersPage} />
            <PrivateRoute exact path="/patients" component={DoctorsPage} />
            <PrivateRoute exact path="/videos" component={VideosPage} />
            <PrivateRoute exact path="/posts" component={PostsPage} />
            <PrivateRoute exact path="/videocall" component={VideoScreen} />
            <PrivateRoute exact path="/profile" component={ProfilePage} />
            <PrivateRoute exact path="/userprofile" component={UserProfileDetail} />
            <PrivateRoute exact path="/myprofile" component={PersonalProfilePage} />
            <PrivateRoute exact path="/post" component={PostDetailPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            <CallAlert />
            <Route path="*" component={NotFound}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
