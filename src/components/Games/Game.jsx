import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Game = ({ id, name, background_image, games, setGames }) => {
  const deleteThisGame = () => {
    setGames(games.filter((game) => game.id !== id));
  };
  return (
    <div className='Games'>
      <div>
        <p>
          <strong>{name}</strong>
        </p>
      </div>
      <div className='Details'>
        <Link to={`/games/${id}`}>
          <img src={background_image} alt='' className='pic' />
        </Link>
        <button type='button' className='delete' onClick={deleteThisGame}>
          <img src='/Images/bin.png' alt='' className='bin' />
        </button>
      </div>
    </div>
  );
};

Game.propTypes = {
  name: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Game;
