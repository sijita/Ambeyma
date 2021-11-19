import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Galeria" component={Gallery} />
      </Switch>
    </Router>
  );
}

export default App;
