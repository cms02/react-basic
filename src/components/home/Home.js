import React from 'react';
import { num } from '../../Sub';

// Function 방식(👍)
// class 방식
const Home = (props) => {
  //   const boards = props.boards;
  //👇
  //구조분할 할당
  const { boards, setBoards, setNumber, number } = props;

  //                👆 함수를 자식한테 passing

  return (
    <div>
      <h1>홈 : {number} </h1>
      <button onClick={() => setNumber(number + 1)}>번호증가</button>
      <button onClick={() => setBoards([])}>전체 삭제</button>
      {boards.map((board) => (
        <h3>
          제목: {board.title} 내용: {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
