import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPen, faEye, faStar } from '@fortawesome/free-solid-svg-icons'
import * as S from './styled';
import { Rating, LevelBar } from '../../components'

const columns = [
  { id: 'number', label: '#', width: 20 },
  { id: 'name', label: 'Name', align: "left" },
  { id: 'point', label: 'Point', width: 50, align: 'right' },
  { id: 'level', label: 'Level', width: 50 },
  { id: 'star', label: 'Star', width: 50 },
];

const ButtonIcon = ({ action, ...res }) => {
  return (
    <S.ButtonIcon onClick={action}>
      <FontAwesomeIcon {...res} color="#bdbdbd" />
    </S.ButtonIcon>
  )
}

const Point = ({ point }) => {
  const isNegative = point < 0
  return <S.Point negative={isNegative}>{point}</S.Point>
}

const MobBody = ({ item, index, show }) => (
  <S.TableRow key={item.id} index={index} show={show}>
    <S.TableCell w={20}>{index + 1}</S.TableCell>
    <S.TableCell align="left">{item.name}</S.TableCell>
    <S.TableCell w={50} align="right">
      <Point point={item.point} />
    </S.TableCell>
    <S.TableCell w={50}>
      {item.level}
    </S.TableCell>
    <S.TableCell w={50}>
      <span>
        {item.star}
        <FontAwesomeIcon icon={faStar} color="rgb(254, 234, 130)" style={{ marginLeft: '5rem' }} />
      </span>
    </S.TableCell>
    <S.TableCell w={50}>...</S.TableCell>
  </S.TableRow>
)

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      screenWidth: 0
    }
  }

  triggerAnim = () => {
    this.setState({
      show: true
    })
  }

  componentDidMount() {
    setTimeout(this.triggerAnim, 100)

    this.getScreenWidth();
    window.addEventListener('resize', this.getScreenWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getScreenWidth);
  }
  getScreenWidth = () => {
    this.setState({
      screenWidth: window.innerWidth
    })
  }

  render() {
    const { show, screenWidth } = this.state
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
            <S.HeaderCell w={50} align="center">Actions</S.HeaderCell>
          </S.TableRow>
        </S.TableHeader>
        <S.TableBody>
          {
            data.map((item, index) => {
              if (screenWidth < 600) {
                return <MobBody key={item.id} item={item} index={index} show={show} />
              }
              else return (
                <S.TableRow key={item.id} index={index} show={show}>
                  <S.TableCell w={20}>{index + 1}</S.TableCell>
                  <S.TableCell align="left">{item.name}</S.TableCell>
                  <S.TableCell w={50} align="right">
                    <Point point={item.point} />
                  </S.TableCell>
                  <S.TableCell w={50}>
                    <LevelBar max={100} value={item.level} />
                  </S.TableCell>
                  <S.TableCell w={50}>
                    <Rating
                      max={5}
                      value={item.star}
                      activeColor="rgb(254, 234, 130)"
                      icon={faStar}
                    />
                  </S.TableCell>
                  <S.TableCell w={50}>
                    <S.WrapIcons>
                      <ButtonIcon icon={faEye} />
                      <ButtonIcon icon={faPen} />
                      <ButtonIcon icon={faTimes} />
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