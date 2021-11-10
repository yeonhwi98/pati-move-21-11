import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { router } from "./router";
import { GlobalStyled } from "./style/GlobalStyled";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Home } from "./Components/Home/Home";
import { Search } from "./Components/Search/Search";
import { Detail } from "./Components/Detail/Detail";

function App() {
  return (
    <Router>
      <GlobalStyled />
      <Header />
      <Switch>
        <Route path={router.home} exact>
          <Home></Home>
        </Route>

        <Route path={router.detail}>
          <Detail></Detail>
        </Route>

        <Route path={router.search}>
          <Search></Search>
        </Route>

        <Route>Page Not Found</Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
