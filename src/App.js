import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Author from "./components/Author";
import RecentBlog from "./components/RecentBlog";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import HomePage from "./pages/HomePage";
import Error from "./components/Error";
function App() {
  return (
    <Router>
      <div className="Container">
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/author" exact>
            <Author />
          </Route>
          <Route path="/blog" exact>
            <RecentBlog />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
