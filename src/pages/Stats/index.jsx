import React, { Component } from 'react'
import * as S from './styled';
import { Table } from '../../components';
import Fade from 'react-reveal/Fade';


const Stats = () => (
  <S.Wrapper>
    <Fade>
      <S.Heading>Stats</S.Heading>
      <Table />
    </Fade>
  </S.Wrapper>
)

export default Stats
