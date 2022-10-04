import { Routes, Route } from "react-router-dom";
import Plotly from './page/plotly/Plotly'
import Vis from './page/vis/Vis'
import Home from './page/home/Home'
import Navbar from '../src/components/navbar/Navbar'
import './App.css';

const App = () => {
  return(
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plotly" element={<Plotly />} />
          <Route path="/vis" element={<Vis />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
