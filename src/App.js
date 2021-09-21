import Nav from "./components/Nav";
import Kontakt from "./components/Kontakt";
import Galerie from "./components/Galerie";
import Time from "./components/Time";
import Menu from "./components/Menu";
import Home from "./components/Home";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <header>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Menu">
            <Menu />
          </Route>
          <Route path="/Kontakt">
            <Kontakt />
          </Route>
          <Route path="/Time">
            <Time />
          </Route>
          <Route path="/Galerie">
            <Galerie />
          </Route>
        </Switch>
      </Router>
    </header>
  );
}

export default App;
