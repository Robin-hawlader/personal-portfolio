import logo from './logo.svg';
import './App.css';
import Banner from './Pages/Home/Banner/Banner';
import Project from './Pages/Home/Projects/Project';
import Header from './Pages/Home/Header/Header';
import { Contact } from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
}

export default App;
