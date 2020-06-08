import styled, { css } from 'styled-components'


export const Point = styled.div`
  color: ${(props => props.negative ? "red" : "black")}
`;