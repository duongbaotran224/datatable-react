
import React, { useState, useEffect } from 'react'
import * as S from './styled';

const LevelBar = ({ max, value }) => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setCompleted(value / max * 100)
  });

  return (
    <S.LevelContainer>
      <S.LevelComplete value={completed} />
    </S.LevelContainer>
  )
}

export default LevelBar