import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Cars } from "../components/Cars/Cars";
import { The3 } from "../components/Cars/The3/The3";
import { The5 } from "../components/Cars/The5/The5";
import { The7 } from "../components/Cars/The7/The7";
import { Footer } from "../components/Home/Footer/Footer";
import { Header } from "../components/Home/Header/Header";
import { NavBar } from "../components/Home/Header/NavBar/NavBar";
import { Home } from "../components/Home/Home";
import { Purchase } from "../components/Purchase/Purchase";
import { Service } from "../components/Service/Service";

export function RootRouter() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route exact path="/cars">
            <Cars />
          </Route>
          <Route exact path="/cars/the-3">
            <The3 />
          </Route>
          <Route exact path="/cars/the-5">
            <The5 />
          </Route>
          <Route exact path="/cars/the-7">
            <The7 />
          </Route>
          <Route exact path="/purchase">
            <Purchase />
          </Route>
          <Route exact path="/service">
            <Service />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
