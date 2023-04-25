import React, { useState } from 'react';
import db from '../db.json';
import styled from 'styled-components';
import FormInput from './FormInput';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import { NextButton } from '../style/button';
import { ProfileImg } from '../style/img';
export default function IntroduceCard() {
  const [infoUserIndex, setInfoUserIndex] = useState(0);
  const [fileImage, setFileImage] = useState('');
  const [showFormInput, setShowFormInput] = useState(false);

  const DB = db.info[infoUserIndex];
  const fileInput = React.createRef(null);

  const handleIMGButtonClick = (e) => {
    fileInput.current.click();
  };
  const saveFileImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64Image = reader.result;
      setFileImage(base64Image);
      addImageToJSON(base64Image);
    };

    reader.readAsDataURL(file);
  };

  const addImageToJSON = (base64Image) => {
    db.info[infoUserIndex].profileImage = base64Image;
  };

  const handleChange = () => {
    setInfoUserIndex((index) => {
      //인덱스 증가
      const incrementData = index + 1;

      if (incrementData < db.info.length && Object.entries(db.info[incrementData]).length !== 0) {
        return incrementData;
      } else {
        setShowFormInput(true);
        return index;
      }
    });
  };
  return (
    <UserCard>
      <h1>Introduce Card</h1>
      <div>{DB.name}</div>
      <button onClick={handleIMGButtonClick}>프로필 업로드</button>
      {fileImage && <ProfileImg src={fileImage} alt="프로필사진" />}
      <input
        type="file"
        ref={fileInput}
        accept="image/*"
        onChange={saveFileImage}
        style={{ display: 'none' }}
      />
      <div>{DB.introduce}</div>
      <NextButton onClick={handleChange}>눌러유</NextButton>
      {showFormInput && <FormInput onSubmit={hasFormSubmit} />}
    </UserCard>
  );
}
const UserCard = styled.section`
  margin: 0 auto;
  text-align: center;
  font-size: 25px;
  border: 2px solid #d1d1d1;
  border-radius: 12px;
  background-color: #f8f8f8;
  width: 280px;
  height: fit-content;
  padding: 10px 50px 50px 50px;
`;
