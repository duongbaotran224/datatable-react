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
  width: 0;
  height: 4px;
  border-radius: 4px;
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s;
  background: ${({ value }) => css`
    ${value > 50 ? "#4caac8" : value < 50 ? "#ff9800" : "#65c5a6"}
  `};
  ${({ value }) => value && css`width: ${value}%`};
`;