import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header';
import Showcase from './components/Showcase';
import Information from './components/Information';
import DataValue from './components/DataValue';
import Author from './components/Author';
import Books from './components/Books';
import RecentBlog from './components/RecentBlog';
import Footer from './components/Footer';
import Contact from './components/Contact'


function App() {
  return (
    <Router>
      <div className="Container">
        <Switch>
          <Route path='/' exact>
            <Header />
            <Showcase />
            <Information />
            <DataValue />
            <Author />
            {/* <Books /> */}
            <RecentBlog />
            <Footer />
          </Route>
          <Route path='/author' exact>
            <Header />
            <Author />

            <Footer />

          </Route>
          <Route path='/blog' exact>
            <Header />
            <RecentBlog />
            <Footer />
          </Route>
          <Route path='/contact' exact>
            <Header />
            <Contact />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
