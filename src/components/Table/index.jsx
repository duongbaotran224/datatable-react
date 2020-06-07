import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPen, faEye, faStar } from '@fortawesome/free-solid-svg-icons'
import * as S from './styled';
import { Rating, LevelBar } from '../../components'

const columns = [
  { id: 'number', label: '#', width: 10 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'point', label: 'Point', minWidth: 170, align: 'right' },
  { id: 'level', label: 'Level\u00a0(100)', minWidth: 170, align: 'center' },
  { id: 'star', label: 'Star', minWidth: 170, align: 'center' },
];

const ButtonIcon = ({ action, ...res }) => {
  return (
    <button onClick={action}>
      <FontAwesomeIcon {...res} />
    </button>
  )
}

const Point = ({ point }) => {
  const isNegative = point < 0
  return <S.Point negative={isNegative}>{point}</S.Point>
}

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = { //base css
      show: false,
    }
  }

  handleClick = () => {
    console.log('chooai')
  }

  triggerAnim = () => {
    this.setState({
      show: true
    })
  }

  componentDidMount() {
    setTimeout(this.triggerAnim, 100)
  }

  render() {
    const { show } = this.state
    const data = this.props.data || []
    return (
      <S.Table>
        <S.TableHeader>
          <S.TableRow>
            {
              columns.map((item, index) => (
                <S.HeaderCell key={item.id} align={item.align} w={item.width}>
                  {item.label}
                </S.HeaderCell>
              ))
            }
            <S.HeaderCell align="center">Actions</S.HeaderCell>
          </S.TableRow>
        </S.TableHeader>
        <S.TableBody>
          {
            data.map((item, index) => {
              return (
                <S.TableRow key={item.id} index={index} show={show}>
                  <S.TableCell w={10}>{index + 1}</S.TableCell>
                  <S.TableCell>{item.name}</S.TableCell>
                  <S.TableCell align="right">
                    <Point point={item.point} />
                  </S.TableCell>
                  <S.TableCell align="center">
                    <LevelBar max={100} value={item.level} />
                  </S.TableCell>
                  <S.TableCell align="center">
                    <Rating
                      max={5}
                      value={item.star}
                      activeColor="rgb(254, 234, 130)"
                      icon={faStar}
                    />
                  </S.TableCell>
                  <S.TableCell>
                    <S.WrapIcons>
                      <ButtonIcon icon={faEye} color="gray" action={this.handleClick} />
                      <ButtonIcon icon={faPen} color="gray" action={this.handleClick} />
                      <ButtonIcon icon={faTimes} color="gray" action={this.handleClick} />
                    </S.WrapIcons>
                  </S.TableCell>
                </S.TableRow>
              )
            })
          }
        </S.TableBody>

      </S.Table>
    )
  }
}
export default Table