import "./App.css";
import {
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Login from "./components/Login";
import Products from "./components/Products";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
  const { user, isUserLoggedIn, logOut } = useContext(UserContext);
  return (
    <>
      <header>
        <p> secret: {import.meta.env.VITE_USERNAME}</p>
        <p>Wit0125 by {user && <span onClick={() => logOut()}>logOut</span>}</p>
        <nav>
          <Link to="/">Ana Sayfa</Link>
          <Link to="/products">Ürünler</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <div>Hello</div>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/products">
          {isUserLoggedIn ? <Products /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </>
  );
}

export default App;
