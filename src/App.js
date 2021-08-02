import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./routeo/components/Navbar";
import Contacto from "./routeo/pages/Contacto";
import Error404 from "./routeo/pages/Error404";
import Inicio from "./routeo/pages/Inicio";
import Nosotros from "./routeo/pages/Nosotros";
import Servicios from "./routeo/pages/Servicios";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/servicios" component={Servicios} />
        <Route exact path="/nosotros" component={Nosotros} />
        <Route exact path="/contacto" component={Contacto} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
};

export default App;
