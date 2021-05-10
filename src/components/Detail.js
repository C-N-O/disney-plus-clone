import React from 'react';
import styled from 'styled-components';

function Details() {
  return (
    <Container>
      <Background>
        <img src='/images/background-img.jpeg' />
      </Background>
      <ImageTitle>
        <img src='/images/img-title.png' />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src='/images/play-icon-black.png' />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src='/images/play-icon-white.png' />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src='/images/group-icon.png' />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2021 . 7m . Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        A Chinese mom who’s sad when her grown son leaves home gets another
        chance at motherhood when one of her dumplings springs to life. But she
        finds that nothing stays cute and small forever.
      </Description>
    </Container>
  );
}

export default Details;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  padding-top: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;
  transition: 300ms ease-out;

  &:hover {
    background: rgb(198, 198, 198);
    transition: 300ms ease-in;
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    background: rgb(198, 198, 198);
    color: black;
  }
`;

const AddButton = styled.button`
  margin-right: 16px;
  width: 50px;
  height: 50px;
  border: 2px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  font-size: 26px;

  &:hover {
    color: black;
    background: rgb(249, 249, 249);
    transition: 300ms ease-in;
    cursor: pointer;
  }
`;
const GroupWatchButton = styled(AddButton)`
  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
  }
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  margin-top: 26px;
  min-height: 20px;
`;

const Description = styled.div`
  line-height: 1.4;
  color: rgb(249, 249, 249);
  font-size: 30px;
  margin-top: 16px;
  max-width: 800px;
`;
