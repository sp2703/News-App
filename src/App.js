import './App.css';
import Home from './pages/home';
import GlobalStyle from './globalStyles';
import { useState } from 'react';


function App() {

  const [nav, setnav] = useState('bar');

  return (
    <div className="App">
      <GlobalStyle />
      <Home nav={nav} setnav={setnav}/>
    </div>
  );
}

export default App;
