
import React from 'react'
import * as S from './styled';

const Point = ({ point }) => {
  const isNegative = point < 0
  return <S.Point negative={isNegative}>{point}</S.Point>
}

export default Point