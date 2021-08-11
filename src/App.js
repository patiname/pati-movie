import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollTop } from "./components/ScrollTop";
import { Detail } from "./routes/Detail/Detail";
import { Home } from "./routes/Home/Home";
import { Search } from "./routes/Search/Search";
import { GlobalStyles } from "./styeld";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollTop />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
