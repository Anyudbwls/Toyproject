import React, { useState } from 'react';
import styled from 'styled-components';
import { InputButton } from '../style/button';
import { InputImg } from '../style/img';

const FormInput = ({
  onSubmit,
  defaultProfile,
  onNameChange,
  onIntroductionChange,
  onFileImageChange,
}) => {
  const [name, setName] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [fileImage, setFileImage] = useState(defaultProfile);
  const fileInput = React.createRef(null);

  const handleIMGButtonClick = (e) => {
    fileInput.current.click();
  };

  const saveInputFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    onFileImageChange(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = () => {
    const formData = {
      name,
      introduction,
      fileImage,
    };
    onSubmit(formData);
  };
  return (
    <>
      <FormBox>
        <InputImg src={fileImage} alt="profile" onClick={handleIMGButtonClick} />
        <NameInput id="name" type="text" placeholder="Name" onChange={onNameChange} />
        <InputBox id="introduce" placeholder="Introduction" onChange={onIntroductionChange} />
        <InputBox
          type="file"
          ref={fileInput}
          accept="image/*"
          onChange={saveInputFileImage}
          style={{ display: 'none' }}
        />
        <InputButton onClick={handleSubmit}> 저장하기</InputButton>
      </FormBox>
    </>
  );
};

export default FormInput;

const FormBox = styled.section`
  border: 1px solid #212121;
  padding: 20px;
  display: flex;
`;

const InputBox = styled.input`
  position: relative;
  width: 150px;
  height: 100px;
  font-size: 1rem;
  margin: 10px;
  border: 1px solid #ececec;
  border-radius: 5px;
`;
const NameInput = styled(InputBox)`
  height: fit-content;
  padding: 10px 0;
`;
