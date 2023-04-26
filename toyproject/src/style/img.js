import styled from 'styled-components';
import defaultProfile from '../assets/default_profile.png';

export const ProfileImg = styled.img`
  margin-top: 10px;
  border: 1px solid #d1d1d1;
  border-radius: 100%;
  width: 200px;
`;
export const InputImg = styled.img`
  margin-top: 10px;
  border: 1px solid #d1d1d1;
  border-radius: 100%;
  width: 100px;
  object-fit: cover;
  background-image: url(${(props) => props.src || defaultProfile});
`;
