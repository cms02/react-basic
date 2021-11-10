import React from 'react';
import styled from 'styled-components';

//하나의 컴포넌트를 생성(재사용)

//styled-components => js파일과  css 파일 관리 편함!!
const FooterList = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Footer = () => {
  return (
    <FooterList>
      <div>
        <ul>
          <li>오시는 길 : 서울 강남구..</li>
          <li>전화번호 : 01100202</li>
        </ul>
      </div>
    </FooterList>
  );
};

export default Footer;
