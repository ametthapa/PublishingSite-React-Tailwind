import './App.css';


import Header from './components/Header';
import Showcase from './components/Showcase';
import Information from './components/Information';
import DataValue from './components/DataValue';
import Author from './components/Author';
import Books from './components/Books';
import RecentBlog from './components/RecentBlog';
import Footer from './components/Footer';


function App() {
  return (
    <div className="Container">
      <Header />
      <Showcase />
      <Information />
      <DataValue />
      <Author />
      {/* <Books /> */}
      <RecentBlog />
      <Footer />
    </div>
  );
}

export default App;
