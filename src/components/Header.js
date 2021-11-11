import React from 'react';
import styled from 'styled-components';

//하나의 컴포넌트를 생성(재사용)

//styled-components => js파일과  css 파일 관리 편함!!
const StyledHeaderDiv = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Header = () => {
  return (
    <StyledHeaderDiv>
      <div>
        <ul>
          <li>메뉴1</li>
          <li>메뉴2</li>
        </ul>
      </div>
    </StyledHeaderDiv>
  );
};

export default Header;
