import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  selectUserName,
  // selectUserPhoto,
  setUserLogin,
  setSignOut,
} from '../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { auth, provider } from '../firebase';
import { useHistory } from 'react-router-dom';

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const username = useSelector(selectUserName);
  //const userphoto = useSelector(selectUserPhoto);

  //restore the user state change on refresh
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push('/');
      }
    });
  }, []);

  //sign in with firebase auth
  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      // console.log(result);
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history.push('/');
    });
  };

  //signout with firebase auth
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push('/login');
    });
  };

  return (
    <Nav>
      <Logo src='/images/logo.svg' />

      {!username ? (
        <LoginContainer>
          <Login onClick={signIn}>LOGIN</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a href='/'>
              <img alt='' src='/images/home-icon.svg' />
              <span>HOME</span>
            </a>
            <a href='/'>
              <img alt='' src='/images/search-icon.svg' />
              <span>SEARCH</span>
            </a>
            <a href='/'>
              <img alt='' src='/images/watchlist-icon.svg' />
              <span>WATCHLIST</span>
            </a>
            <a href='/'>
              <img alt='' src='/images/original-icon.svg' />
              <span>ORIGINALS</span>
            </a>
            <a href='/'>
              <img alt='' src='/images/movie-icon.svg' />
              <span>MOVIES</span>
            </a>
            <a href='/'>
              <img alt='' src='/images/series-icon.svg' />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg src='/images/code.jpg' onClick={signOut} />
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    margin: 0 10px;
    cursor: pointer;
    color: white;
    text-decoration: none;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        background: #ffffff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scale(0);
      }
    }

    &:hover {
      span:after {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  border: 1px solid #ffffff;
  padding: 5px;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: white;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;
