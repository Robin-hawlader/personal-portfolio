import './App.css';
import MainPage from './Pages/MainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Motor from './Pages/Details/Motor/Motor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage></MainPage>}></Route>
          <Route path='/home' element={<MainPage></MainPage>}></Route>
          <Route path='/details' element={<Motor></Motor>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
