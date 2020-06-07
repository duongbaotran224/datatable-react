import styled, { css } from 'styled-components'

export const LevelContainer = styled.div`
  width: 100%;
  max-width: 150px;
  margin: auto;
  height: 2px;
  border-radius: 2px;
  background: #eee;
  display: flex;
  align-items: center;
`;

export const LevelComplete = styled.div`
  width: ${({ value }) => css`${value}%`};
  height: 4px;
  background: ${({ value }) => css`
    ${value > 50 ? "#4caac8" : value < 50 ? "#ff9800" : "#65c5a6"}
  `};
  border-radius: 4px
`;