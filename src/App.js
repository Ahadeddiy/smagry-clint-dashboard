import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import About from './components/about/about';
import Exp from './components/experience/exp';
import Ser from './components/services/ser';
import Portfolio from './components/portfolio/portfolio';
import Test from './components/test/test';
import Contact from './components/Contact/contact';
import Foo from './components/footer/foo';



function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Exp />
      <Ser />
      <Portfolio />
      <Test />
      <Contact />
      <Foo />
    </div>
  );
}

export default App;
