import { Switch, Route, NavLink } from 'react-router-dom';
import GamesList from '../Games/GamesList';
import GamesID from '../Games/GamesID';
import HeaderCSS from './HeaderCSS';

function Header() {
  const nameSite = 'React Games';
  return (
    <HeaderCSS>
      <header>
        <div className='MessageWelcome'>
          <p className='Hello'>Welcome to {nameSite}!</p>
        </div>
        <ul className='Header'>
          <li className='items'>
            <NavLink exact to='/'>
              Main Page
            </NavLink>
          </li>
          <li className='items'>
            <NavLink to='/games'>Games</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Switch>
          <Route exact path='/' />
          <Route exact path='/games' component={GamesList} />
          <Route path='/games/:id' component={GamesID} />
        </Switch>
      </main>
    </HeaderCSS>
  );
}

export default Header;
