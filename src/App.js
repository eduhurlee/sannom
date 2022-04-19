import logo from './logo.svg';
import './App.css';

import Menu from "./Taviur/Menu";
import Header from './Taviur/Header';
import Content from './Taviur/Content';
import Footer from './Taviur/Footer';
import Search from './Taviur/Search';

function App() {
  return (
    <div className="App">  
          
      <Header />
      <Menu />
      <Content />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
