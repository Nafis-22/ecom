import logo from "./logo.svg";
import Home from "./componant/Home";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./componant/Navbar";
import Products from "./componant/Products";
import Cart from "./componant/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </>

    // <Home />
  );
}

export default App;
