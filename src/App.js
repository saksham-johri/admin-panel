import logo from './logo.svg';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
