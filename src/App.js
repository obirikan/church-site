import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ContextPage from './Context/context'
function App() {
  return (
    <BrowserRouter>
  <ContextPage>
     <Navbar/>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
     </Routes>
  </ContextPage>
    </BrowserRouter>
  );
}

export default App;
