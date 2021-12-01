import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import Beds from "./pages/Beds"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/galeria" component={Gallery} />
        <Route path="/habitaciones" component={Beds} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
