import React from 'react';
import styled from 'styled-components';

export default function FormInput() {
  return (
    <FromInput>
      <div>파일이랑 그런거 넣어주세요</div>
    </FromInput>
  );
}

const FromInput = styled.section`
  border: 1px solid #212121;
  padding: 10px;
`;
