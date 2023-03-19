
import './App.css';
import Customerlist from './components/customerlist'
import Traininglist from './components/traininglist';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>PT App</header>
      <BrowserRouter>
        <Link to="/customerlist">Customerlist</Link>{' '}
        <Link to="/traininglist">Traininglist</Link>{' '}
    <Routes>
          <Route path="/customerlist" element={<Customerlist />} />
          <Route path="/traininglist" element={<Traininglist />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
