import React from 'react';
import styled from 'styled-components';
import { selectMovies } from '../features/movie/movieSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Movies() {
  const movies = useSelector(selectMovies);

  console.log(movies);
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        {movies &&
          movies.map((mov) => (
            <Wrap key={mov.id}>
              <Link to={`/detail/${mov.id}`}>
                <img src={mov.cardImg} alt='' />
              </Link>
            </Wrap>
          ))}
      </Content>
      <h4>Action and Adventure</h4>

      <Content>
        {movies &&
          movies.map((mov) => (
            <Wrap key={mov.id}>
              <Link to={`/detail/${mov.id}`}>
                <img src={mov.cardImg} alt='' />
              </Link>
            </Wrap>
          ))}
      </Content>
      <h4>Drama Series</h4>
      <Content>
        {movies &&
          movies.map((mov) => (
            <Wrap key={mov.id}>
              <Link to={`/detail/${mov.id}`}>
                <img src={mov.cardImg} alt='' />
              </Link>
            </Wrap>
          ))}
      </Content>
      <h4>Thrillers</h4>
      <Content>
        {movies &&
          movies.map((mov) => (
            <Wrap key={mov.id}>
              <Link to={`/detail/${mov.id}`}>
                <img src={mov.cardImg} alt='' />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-bottom: 40px;
`;

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.3);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
