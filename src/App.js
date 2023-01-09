import Navbar from './NavBar/Navbar';
import { Prednasky } from './Prednasky/Prednasky';
import { Cvicenia } from './Cvicenia/Cvicenia';
import { Zadania } from './Zadania/Zadania';
import { Kalendar } from './Kalendar/Kalendar';
import { Tutorialy } from './Tutorialy/Tutorialy';
import { Route, Routes } from 'react-router-dom';
import { Content } from './Content/Content';
import {
  Tyzden1, Tyzden2, Tyzden3, Tyzden4, Tyzden5, Tyzden6, Tyzden7, Tyzden8, Tyzden9, Tyzden10, Tyzden11, Tyzden12, Tyzden13
} from './Cvicenia/Tyzden'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        {/* <Route index element={<Content />} /> */}
        <Route path="/prednasky" element={<Prednasky />} />
        <Route path="/cvicenia" element={<Cvicenia />} />
        <Route path="/zadania" element={<Zadania />} />
        <Route path="/tutorialy" element={<Tutorialy />} />
        <Route path="/kalendar" element={<Kalendar />} />
        
        <Route path="/tyzden1" element={<Tyzden1 />} />
        <Route path="/tyzden2" element={<Tyzden2 />} />
        <Route path="/tyzden3" element={<Tyzden3 />} />
        <Route path="/tyzden4" element={<Tyzden4 />} />
        <Route path="/tyzden5" element={<Tyzden5 />} />
        <Route path="/tyzden6" element={<Tyzden6 />} />
        <Route path="/tyzden7" element={<Tyzden7 />} />
        <Route path="/tyzden8" element={<Tyzden8 />} />
        <Route path="/tyzden9" element={<Tyzden9 />} />
        <Route path="/tyzden10" element={<Tyzden10 />} />
        <Route path="/tyzden11" element={<Tyzden11 />} />
        <Route path="/tyzden12" element={<Tyzden12 />} />
        <Route path="/tyzden13" element={<Tyzden13 />} />


      </Routes>
    </div>
  );
}

export default App;
