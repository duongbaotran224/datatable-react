import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPen, faEye, faStar } from '@fortawesome/free-solid-svg-icons'
import * as S from './styled';
import * as mockup from './data.json'
import { Rating, LevelBar } from '../../components'

const data = mockup["stats"];
const headers = ["#", "Name", "Point", "Level", "Star", "Action"]

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

  handleClick = () => {
    console.log('chooai')
  }

  render() {
    return (
      <S.Table>
        <S.TableHeader>
          <S.TableRow>
            {
              headers.map((item, index) => (
                <S.HeaderCell key={item} w={index === 0 && 20}>
                  {item}
                </S.HeaderCell>
              ))
            }
          </S.TableRow>
        </S.TableHeader>
        <S.TableBody>
          {
            data.map((item, index) => {
              return (
                <S.TableRow key={item.id}>
                  <S.TableCell w={20}>{index + 1}</S.TableCell>
                  <S.TableCell>{item.name}</S.TableCell>
                  <S.TableCell>
                    <Point point={item.point} />
                  </S.TableCell>
                  <S.TableCell>
                    <LevelBar max={100} value={item.level} />
                  </S.TableCell>
                  <S.TableCell>
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