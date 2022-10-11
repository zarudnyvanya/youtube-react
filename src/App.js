import { Header } from './components/Header/Header';
import { Home } from './Pages/Home/Home';
import { Navigation } from './components/Navigation/Navigation';
import { Genres } from './components/Genres/Genres';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Navigation />
        <Genres />
      </div>
    </div>
  );
}

export default App;
