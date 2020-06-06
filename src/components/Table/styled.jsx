import styled, { css } from 'styled-components'

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #2224261a;
`;

export const TableHeader = styled.thead`
  width: 100%;
  display: block;
   position:relative;
`;

export const HeaderCell = styled.th`
  background: #f9fafb;
  padding: 15rem 20rem;

  flex-basis: ${(props) => css`${props.w ? props.w : 100}%`};;
  flex-grow: 1;
  display: block;
  text-align:left;
`;

export const TableRow = styled.tr`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #2224261a;
  :hover {
    background: #f9fafb;
  }
`;

export const TableBody = styled.tbody`
  display: block;
  width: 100%;
  overflow: auto;
  max-height: 380px;
   position:relative;
`;

export const TableCell = styled.td`
  padding: 15rem 20rem;

  flex-basis: ${(props) => css`${props.w ? props.w : 100}%`};;
  flex-grow: 1;
  display: block;
  text-align:left;
`;

export const WrapIcons = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

export const Point = styled.div`
  color: ${(props => props.negative ? "red" : "black")}
`;








