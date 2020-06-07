import React, { Component } from 'react'
import * as S from './styled';
import { Table } from '../../components';
import { mockup } from './data.js'

const data = mockup["stats"];

class DataTable extends Component {
  render() {
    return (
      <S.Wrapper>
        <Table data={data} />
        <S.Section>
          <S.ButtonAdd>ADD</S.ButtonAdd>
        </S.Section>
      </S.Wrapper>
    )
  }
}

export default DataTable
