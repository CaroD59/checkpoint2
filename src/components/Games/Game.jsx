const Game = ({ name, released, background_image, rating }) => {
  return (
    <div className='Games'>
      <p>
        <strong>{name}</strong>
      </p>
      <img src={background_image} alt='' />
      <p>
        {released}, {rating}
      </p>
    </div>
  );
};

export default Game;
