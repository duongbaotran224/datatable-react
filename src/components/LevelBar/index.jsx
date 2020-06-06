
import React, { Component } from 'react'
import * as S from './styled';

const LevelBar = ({ max, value }) => {
  const completed = (value / max) * 100
  return (
    <S.LevelContainer>
      <S.LevelComplete value={completed} />
    </S.LevelContainer>
  )
}

export default LevelBar