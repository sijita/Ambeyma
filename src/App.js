import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header
        menu1="Inicio"
        menu2="Nosotros"
        menu3="Servicios"
        menu4="Habitaciones"
        menu5="Galería"
        menu6="Contacto"
      />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Galeria" component={Gallery} />
      </Switch>
    </Router>
  );
}

export default App;
