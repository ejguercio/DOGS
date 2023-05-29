import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Home, Landing, Form, Detail} from "./views";
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/"
          element={<Landing />} />
        <Route path="/home"
          element={<Home />} />
        <Route path="/detail"
          element={<Detail />} />
        <Route path="/form"
          element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
