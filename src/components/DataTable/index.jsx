import React, { Component } from 'react'
import * as S from './styled';
import { Table } from '../../components';
import { mockup } from './data.js'

const data = mockup["stats"];

class DataTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data
    }
  }
  deleteUser = (id) => {
    let newList = this.state.data.filter((item) => item.id !== id)
    this.setState({ data: newList })
  }
  render() {
    return (
      <S.Wrapper>
        <Table data={this.state.data} deleteUser={this.deleteUser} />
        <S.Section>
          <S.ButtonAdd>ADD</S.ButtonAdd>
        </S.Section>
      </S.Wrapper>
    )
  }
}

export default DataTable
