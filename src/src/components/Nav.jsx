import { NavLink } from 'react-router-dom';

const Nav = () => {
  const isActive = ({ isActive }) => (isActive ? 'navLinkActive' : '');

  return (
    <nav className='n1-nav'>
      <NavLink className={`${isActive} left`} to='/'>
        <img src='assets/logo.webp' alt='logo of the page' />
      </NavLink>
      <aside className='right'>
        <NavLink className={isActive} to='/led-home-decore'>
          Led Home Decore
        </NavLink>
        <NavLink className={isActive} to='/led-paintings'>
          Led Paintings
        </NavLink>
        <NavLink className={isActive} to='/posters'>
          Posters
        </NavLink>
        <NavLink className={isActive} to='/accessories'>
          Accessories
        </NavLink>
      </aside>
    </nav>
  );
};

export default Nav;
