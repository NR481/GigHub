
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoginFormModal from '../auth/LoginFormModal';
import LogoutButton from '../auth/LogoutButton';
import SignupFormModal from '../auth/SignupFormModal';

const NavBar = () => {
  const user = useSelector(state => state.session.user)
  return (
    <nav>
      <NavLink to='/' exact={true}>
        GigHub
      </NavLink>
      <ul>
        {!user &&
          <li>
            <LoginFormModal />
          </li>
        }
        {!user &&
          <li>
            <SignupFormModal />
          </li>
        }
        {/* <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li> */}
        {user &&
          <li>
            <LogoutButton />
          </li>
        }
      </ul>
    </nav>
  );
}

export default NavBar;
