import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar';import ContextPage from './Context/context'

import AnimatedRoutes from './components/AnimatedRoutes';
function App() {
  return (
    <ContextPage>
    <BrowserRouter>
      <AnimatedRoutes/>
    </BrowserRouter>
    </ContextPage>
  );
}

export default App;
