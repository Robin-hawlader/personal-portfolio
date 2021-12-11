import './App.css';
import MainPage from './Pages/MainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Motor from './Pages/Details/Motor/Motor';
import Doctor from './Pages/Details/Doctor/Doctor';
import Travel from './Pages/Details/Travel/Travel';
import Header from './Pages/Home/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<MainPage></MainPage>}></Route>
          <Route path='/home' element={<MainPage></MainPage>}></Route>
          <Route path='/motorDetails' element={<Motor></Motor>}></Route>
          <Route path='/doctorDetails' element={<Doctor></Doctor>}></Route>
          <Route path='/travelDetails' element={<Travel></Travel>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
