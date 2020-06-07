import React, { Component } from 'react'
import * as S from './styled';
import { DataTable } from '../../components';
import Fade from 'react-reveal/Fade';


const Stats = () => (
  <S.Wrapper>
    <Fade>
      {/* <S.Heading>Stats</S.Heading> */}
      <DataTable />
    </Fade>
  </S.Wrapper>
)

export default Stats
