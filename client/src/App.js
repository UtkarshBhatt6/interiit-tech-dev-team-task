import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import { Route,Routes} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
function App() {
  return (
      <>
      <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
