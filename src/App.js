import { Header } from './components/Header/Header';
import { Home } from './Pages/Home/Home';
import { Navigation } from './components/Navigation/Navigation';
import { Genres } from './components/Genres/Genres';

import './App.scss';
import { useState } from 'react';

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <div className="App">
      <Header navIsOpen={() => setNavIsOpen(!navIsOpen)} />

      <div className="container">
        <Navigation navIsOpen={navIsOpen} />

        <div className="main__content">
          <Genres />
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
