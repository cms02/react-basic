import { useState } from 'react';
import './App.css';

//0. React엔진 - 데이터변경감지에서 UI그려주는 엔진!
//1. 실행과정 (index.html) - SPA
//2. JSX문법 (Javascript 에 html 사용)

//(1) return시에 하나의 Dom만 리턴할 수 있다.
//(2) 변수선언은 let 혹은 const로만 해야함.
//(3) if사용 불가능 -> 삼항 연산자
//(4) 조건부 렌더링(조건 && 값(true))
//(5) css디자인
// - 내부에 적는 방법
// - 외부 파일에 적는 방법
// - 라이브러리 사용(부트스트랩, component-styled)

function App() {
  console.log('App 실행됨');

  const [num, setNum] = useState(5);

  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '김길동' },
    { id: 3, name: '황길동' },
    { id: 4, name: '박길동' },
  ];

  //다운로드 받음
  const [users, setUsers] = useState(sample); //레퍼런스 변경되어야 동장!!
  const download = () => {
    //fetch().then().then();
    //기존 데이터 세팅

    //기존 데이터 세팅
    // sample.push({ id: 5, name: '조자룡' });
    // console.log(sample);
    // setUsers(sample);

    // const a = sample.concat({ id: 5, name: '조자룡' });
    console.log(sample);
    setUsers([...sample, { id: num, name: '조자룡' }]);
    setNum(num + 1);
  };

  //랜더링 시점 = 상태값 변경
  return (
    <div>
      <div>
        <button onClick={download}>다운로드</button>
        {users.map((u) => (
          <h1>
            {u.id},{u.name}
          </h1>
        ))}
      </div>
    </div>
  );
}

export default App;
