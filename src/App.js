import { Route, Switch } from "react-router";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Login from "./component/Login/Login";
import Home from "./component/Home/Home";
import ReviewDetail from "./component/ReviewDetail/ReviewDetail";
import PostReview from "./component/PostReview/PostReview";
import UserProfile from "./component/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import Registration from "./component/Registration/Registration";
import MovieDetail from "./component/MovieDetail/MovieDetail";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/reviews/:id" component={ReviewDetail} />
        <PrivateRoute path="/postReviews/:idMovie" component={PostReview} />
        <PrivateRoute path="/profil" component={UserProfile} />
        <Route path="/registration" component={Registration} />
        <Route path="/movies/:id" component={MovieDetail} />
      </Switch>
    </div>
  );
};

export default App;
