import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar';import ContextPage from './Context/context'

import AnimatedRoutes from './components/AnimatedRoutes';
function App() {
  return (
    <BrowserRouter>
  <ContextPage>
     <Navbar/>
      <AnimatedRoutes/>
  </ContextPage>
    </BrowserRouter>
  );
}

export default App;
