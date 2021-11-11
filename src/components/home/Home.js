import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

// Function 방식(👍)
// class 방식

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;

//스타일 상속
const StyledAddButton = styled(StyledDeleteButton)`
  background-color: green;
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
      <Button variant="primary">Primary</Button>{' '}
      <StyledAddButton user={user}>더하기</StyledAddButton>
      <h1>홈 : {number} </h1>
      <button onClick={() => setNumber(number + 1)}>번호증가</button>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체 삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3 key={board.id}>
          제목: {board.title} 내용: {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
