import React, { useState } from 'react';
import db from '../db.json';
import photo from '../assets/유디닝.jpeg';

export default function IntroduceCard() {
  const [infoUserIndex, setInfoUserIndex] = useState(0);

  const DB = db.info[infoUserIndex];

  const handleClickEvent = () => {
    setInfoUserIndex((index) => index + 1);
  };

  return (
    <section>
      <h1>Introduce Card</h1>

      <div>{DB.name}</div>
      <img src={DB.url} alt={DB.name} width={250} />
      <button onClick={handleClickEvent}>M</button>
    </section>
  );
}
