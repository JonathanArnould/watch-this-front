import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./component/Header/Header";
import Login from "./component/Login/Login";
import Home from "./component/Home/Home";
import ReviewDetail from "./component/ReviewDetail/ReviewDetail";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/reviews/:id" component={ReviewDetail} />
      </Switch>
    </div>
  );
};

export default App;
