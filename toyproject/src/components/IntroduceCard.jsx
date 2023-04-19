import React, { useState } from 'react';
import db from '../db.json';
import styled from 'styled-components';

export default function IntroduceCard() {
  const [infoUserIndex, setInfoUserIndex] = useState(0);
  const [fileImage, setFileImage] = useState('');

  const DB = db.info[infoUserIndex];
  const fileInput = React.createRef(null);

  const handleIMGButtonClick = (e) => {
    fileInput.current.click();
  };
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = () => {
    setInfoUserIndex((index) => index + 1);
  };
  return (
    <UserCard>
      <h1>Introduce Card</h1>

      <div>{DB.name}</div>
      <button onClick={handleIMGButtonClick}>프로필 업로드</button>
      {fileImage && <Profile src={fileImage} alt="프로필사진" />}
      <input
        type="file"
        ref={fileInput}
        accept="image/*"
        onChange={saveFileImage}
        style={{ display: 'none' }}
      />
      <div>{DB.introduce}</div>
      <NextButton onClick={handleChange}>눌러유</NextButton>
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
  height: 500px;
  padding: 10px 50px;
`;
const Profile = styled.img`
  margin-top: 10px;
  border: 1px solid #d1d1d1;
  border-radius: 100%;
  width: 200px;
`;

const NextButton = styled.button`
  border: none;
  width: 250px;
`;
