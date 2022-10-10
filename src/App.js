import { Genre } from './components/Genre/Genre';
import { Header } from './components/Header/Header';
import { Home } from './Pages/Home/Home';
import { Navigation } from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Header />
      <Genre />
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
