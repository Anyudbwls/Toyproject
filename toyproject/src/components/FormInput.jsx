import React, { useState } from 'react';
import styled from 'styled-components';
import { InputImg } from '../style/img';
import { InputButton } from '../style/button';
const FormInput = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [fileImage, setFileImage] = useState('');
  const fileInput = React.createRef(null);

  const handleIMGButtonClick = (e) => {
    fileInput.current.click();
  };

  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = () => {
    onSubmit({
      name,
      introduction,
      fileImage,
    });
  };

  return (
    <FormBox>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Introduction"
        value={introduction}
        onChange={(e) => setIntroduction(e.target.value)}
      />
      <InputButton onClick={handleIMGButtonClick}>프로필 업로드</InputButton>
      {fileImage && <InputImg src={fileImage} alt="profile" />}
      <input
        type="file"
        ref={fileInput}
        accept="image/*"
        onChange={saveFileImage}
        style={{ display: 'none' }}
      />
      <InputButton onClick={handleSubmit}> 저장하기</InputButton>
    </FormBox>
  );
};

export default FormInput;

const FormBox = styled.section`
  border: 1px solid #212121;
  padding: 10px;
`;
