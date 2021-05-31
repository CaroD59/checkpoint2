import { useEffect, useState } from 'react';
import axios from 'axios';
import Game from './Game';
import GamesCSS from './GamesCSS';

function GamesList() {
  const initGame = [
    {
      id: 3498,
      name: 'Grand Theft Auto V',
      released: '2013-09-17',
      background_image:
        'https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg',
      rating: 4.47,
    },
  ];
  const [games, setGames] = useState(initGame);
  const [allGames, setAllGames] = useState(true);

  useEffect(() => {
    axios
      .get('https://wild-games.jsrover.wilders.dev/games')
      .then(({ data }) => {
        setGames(data);
      });
  }, []);

  return (
    <>
      <GamesCSS>
        {/* BOUTON TOUS JEUX OU MEILLEURS ? */}
        <button
          type='button'
          onClick={() => {
            setAllGames(!allGames);
          }}
        >
          {allGames ? 'Best Games' : 'All Games'}
        </button>
        {/* BOUTON TOUS JEUX OU MEILLEURS ? */}
        <ul>
          {allGames
            ? games.map((game) => (
                <Game
                  key={game.id}
                  games={games}
                  setGames={setGames}
                  {...game}
                />
              ))
            : games
                .filter((game) => game.rating > 4.5)
                .map((game) => (
                  <Game
                    key={game.id}
                    games={games}
                    setGames={setGames}
                    {...game}
                  />
                ))}
        </ul>
      </GamesCSS>
    </>
  );
}

export default GamesList;
