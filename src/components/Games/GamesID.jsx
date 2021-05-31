import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GamesIDCSS from './GamesIDCSS';
import axios from 'axios';

function GamesID() {
  const [game, setGame] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://wild-games.jsrover.wilders.dev/games/${id}`)
      .then(({ data }) => setGame(data))
      .catch(() => {
        setError('Sorry I did not find the game geuh...');
      });
  }, []);

  if (error) {
    return <p>Sorry I did not find the game geuh...</p>;
  }

  if (!game) {
    return <p>Wait a second, I&apos;m searching !!</p>;
  }

  return (
    <>
      <GamesIDCSS>
        <div className='ID'>
          <div className='IDdetails'>
            <h2>{game.name.toUpperCase()}</h2>
            <p> Release Date : {game.released}</p>
            <p>Rating: {game.rating}</p>
          </div>
          <div className='IDimg'>
            <img src={game.background_image} alt='' className='IDpic' />
          </div>
        </div>
      </GamesIDCSS>
    </>
  );
}

export default GamesID;
