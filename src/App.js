import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { router } from "./router";
import { GlobalStyled } from "./style/GlobalStyled";
import { Header } from "./Components/Header";

function App() {
  return (
    <Router>
      <GlobalStyled />
      <Header />
      <Switch>
        <Route path={router.home} exact>
          Home
        </Route>

        <Route path={router.detail}>Detail page</Route>

        <Route path={router.search}>Search page</Route>

        <Route>Page Not Found</Route>
      </Switch>
    </Router>
  );
}

export default App;
