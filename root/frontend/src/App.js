import { Header } from './components/Header/Header';
import { Home } from './Pages/Home/Home';
import { Navigation } from './components/Navigation/Navigation';
import { Genres } from './components/Genres/Genres';

import './App.scss';
import { useState } from 'react';

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const videos = [
    {
      id: 1,
      title: 'Владислав',
      image: 'assets/poster_for_video/poster_youtube.png',
      owner: {
        id: 2,
        username: 'vlad',
        logo: 'assets/svg__header/user.png',
      },
    },
    {
      id: 2,
      title: 'Данил',
      image: 'assets/poster_for_video/poster_youtube.png',
      owner: {
        id: 2,
        username: 'vlad',
        logo: 'assets/svg__header/user.png',
      },
    },
    {
      id: 3,
      title: 'Данил Семёнов',
      image: 'assets/poster_for_video/poster_youtube.png',
      owner: {
        id: 2,
        username: 'vlad',
        logo: 'assets/svg__header/user.png',
      },
    },
    {
      id: 4,
      title: 'Полевских 4',
      image: 'assets/poster_for_video/poster_youtube.png',
      owner: {
        id: 2,
        username: 'vlad',
        logo: 'assets/svg__header/user.png',
      },
    },
    {
      id: 5,
      title: 'Семёнов Данил',
      image: 'assets/poster_for_video/poster_youtube.png',
      owner: {
        id: 2,
        username: 'vlad',
        logo: 'assets/svg__header/user.png',
      },
    },
    {
      id: 6,
      title: 'Иван',
      image: 'assets/poster_for_video/poster_youtube.png',
      owner: {
        id: 2,
        username: 'vlad',
        logo: 'assets/svg__header/user.png',
      },
    },
    {
      id: 7,
      title: 'Залупа бомжа 7',
      image: 'assets/poster_for_video/poster_youtube.png',
      owner: {
        id: 2,
        username: 'vlad',
        logo: 'assets/svg__header/user.png',
      },
    },
    {
      id: 8,
      title: 'Юфу **** 8',
      image: 'assets/poster_for_video/poster_youtube.png',
      owner: {
        id: 2,
        username: 'vlad',
        logo: 'assets/svg__header/user.png',
      },
    },
  ];

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onChangeFiltered = (value) => {
    console.log('value: ', value);
  };

  return (
    <div className="App">
      <Header
        onChangeSearchInput={onChangeSearchInput}
        searchValue={searchValue}
        navIsOpen={() => setNavIsOpen(!navIsOpen)}
      />

      <div className="container">
        <Navigation navIsOpen={navIsOpen} />

        <div className="main__content">
          <Genres />
          <Home
            videos={videos}
            onChangeFiltered={onChangeFiltered}
            onChangeSearchInput={onChangeSearchInput}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
