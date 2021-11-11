import React from 'react';
import styled from 'styled-components';
import { num } from '../../Sub';

// Function 방식(👍)
// class 방식

let StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;

//부모로부터 받아온 어떤 데이터를 가지고 스타일링을 동적으로 할것이라면?
const Home = (props) => {
  //   const boards = props.boards;
  //👇
  //구조분할 할당
  const { boards, setBoards, setNumber, number, user } = props;

  //                👆 함수를 자식한테 passing

  return (
    <div>
      <h1>홈 : {number} </h1>
      <button onClick={() => setNumber(number + 1)}>번호증가</button>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체 삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3>
          제목: {board.title} 내용: {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
