import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Cars } from "../components/Cars/Cars";
import { Header } from "../components/Home/Header/Header";
import { Home } from "../components/Home/Home";
import { Purchase } from "../components/Purchase/Purchase";
import { Service } from "../components/Service/Service";

export function RootRouter() {
  return (
    <BrowserRouter>
    <div>
      
        <Switch>
            <Route exact={true} path="/">
              <Home />
            </Route>
            <Route path="/cars">
              <Cars />
            </Route>
            <Route path="/purchase">
              <Purchase />
            </Route>
            <Route path="/service">
              <Service />
            </Route>
        </Switch>
    </div>
    </BrowserRouter>
  );
}
