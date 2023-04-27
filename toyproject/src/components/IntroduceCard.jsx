import React, { useState } from 'react';
import db from '../db.json';
import styled from 'styled-components';
import FormInput from './FormInput';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import { NextButton } from '../style/button';
import { ProfileImg } from '../style/img';
import defaultProfile from '../assets/default_profile.png';
import { InputButton } from '../style/button';

export default function IntroduceCard() {
  const [infoUserIndex, setInfoUserIndex] = useState(0);
  const [fileImage, setFileImage] = useState('');
  const [showFormInput, setShowFormInput] = useState(false);
  const [name, setName] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    introduction: '',
    fileImage: '',
  });

  const DB = db.info[infoUserIndex];
  const fileInput = React.createRef(null);

  const saveFileImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const baseImage = reader.result;
      setFileImage(baseImage);
      onFileImageChange(baseImage);
    };

    reader.readAsDataURL(file);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleIntroductionChange = (e) => {
    setIntroduction(e.target.value);
  };

  const onFileImageChange = (baseImage) => {
    setFileImage(baseImage);

    db.info[infoUserIndex].profileImage = baseImage;
  };

  const handleChange = () => {
    setInfoUserIndex((index) => {
      const incrementData = index + 1;

      if (incrementData < db.info.length && Object.entries(db.info[incrementData]).length !== 0) {
        return incrementData;
      } else {
        setShowFormInput(true);
        return index;
      }
    });
  };

  const handleSubmit = () => {
    setFormData({
      name,
      introduction,
      fileImage,
    });
    console.log('Submitted form data:', formData);
    db.info.push(formData);
  };

  return (
    <UserCard>
      <h1>Introduce Card</h1>

      <ProfileImg src={formData.fileImage || defaultProfile} alt="프로필사진" />
      <input
        type="file"
        ref={fileInput}
        accept="image/*"
        onChange={saveFileImage}
        style={{ display: 'none' }}
      />
      <div>{DB.name || formData.name}</div>
      <div>{DB.introduce || formData.introduction}</div>
      <NextButton onClick={handleChange}>눌러유</NextButton>
      {showFormInput && (
        <FormInput
          onSubmit={handleSubmit}
          defaultProfile={defaultProfile}
          onNameChange={handleNameChange}
          onIntroductionChange={handleIntroductionChange}
          onFileImageChange={onFileImageChange}
        />
      )}
      <InputButton onClick={handleSubmit}>Save</InputButton>
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
