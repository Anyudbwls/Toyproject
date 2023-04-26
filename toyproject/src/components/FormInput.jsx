import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { InputImg } from '../style/img';
import { InputButton } from '../style/button';

const FormInput = ({ onSubmit, defaultProfile }) => {
  const [name, setName] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [fileImage, setFileImage] = useState(defaultProfile);
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
      <InputImg src={fileImage} alt="profile" onClick={handleIMGButtonClick} />

      <NameInput
        id="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputBox
        id="introduce"
        placeholder="Introduction"
        value={introduction}
        onChange={(e) => setIntroduction(e.target.value)}
      />
      <InputBox
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
  display: flex;
`;

const InputBox = styled.input`
  position:relative;
  width: 100px
  height: fit-content;
  padding: 10px;
  border: 1px solid #ececec;
  border-radius: 5px;
`;
const NameInput = styled(InputBox)`
  width: 50px;
  height: fit-content;
`;
