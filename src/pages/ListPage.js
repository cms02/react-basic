import React, { useState } from 'react';
import styled from 'styled-components';

const StyledItemBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 3px solid black;
  padding: 10px;
  height: 50px;
  margin: 20px;
  align-items: center;
`;

const ListPage = () => {
  const [post, setPost] = useState({
    id: 5,
    title: '',
    content: '',
  });

  const [posts, setPosts] = useState([
    { id: 1, title: '제목1', content: '내용1' },
    { id: 2, title: '제목2', content: '내용2' },
    { id: 3, title: '제목3', content: '내용3' },
    { id: 4, title: '제목4', content: '내용4' },
    { id: 5, title: '제목5', content: '내용5' },
  ]);

  const handleWrite = (e) => {
    e.preventDefault(); //form태그가 하려는 액션을 중지시켜야 함
    console.log(1, post.id);

    setPosts([...posts, { ...post, id: post.id + 1 }]);
    console.log(2, post.id);
    setPost({ ...post, id: post.id + 1 });
    console.log(3, post.id);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  // const handleChangeTitle = (e) => {
  //   console.log(e);
  //   setPost({ title: e.target.value });
  // };
  // const handleChangeContent = (e) => {
  //   console.log(e);
  //   setPost({ content: e.target.value });
  // };

  //👆 인터페이스가 여러개면 다 만들어줘야함 한번에 !! 👇👇👇👇👇

  const handleForm = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    //computed property names 문법 ( key값 동적 할당 )
    setPost({
      ...post, //없으면 title 사라지고 내용만 들어감(기존값 유지하면서 덮어쓰기)
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>리스트 페이지</h1>
      <form onSubmit={handleWrite}>
        <input
          type="text"
          placeholder="제목을 입력하세요."
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="내용을 입력하세요."
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="submit">글쓰기</button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv>
          <div>
            번호: {post.id} /제목: {post.title} /내용: {post.content}
          </div>
          <button onClick={() => handleDelete(post.id)}>삭제</button>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
