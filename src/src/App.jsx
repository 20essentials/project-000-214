import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';

const App = () => {
  return (
    <BrowserRouter basename='/project-000-214'>
      <Nav />
      <Wrapper />
    </BrowserRouter>
  );
};

export default App;
