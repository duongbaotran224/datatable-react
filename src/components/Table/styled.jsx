import styled, { css } from 'styled-components'

export const Table = styled.table`
  font-size: 14rem;
  width: 100%;
  border-collapse: collapse;
  // border: 1px solid #2224261a;
`;

export const TableRow = styled.tr`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #2224261a;
  :hover{
    background: #f9fafb;
  };
`;

export const TableHeader = styled.thead`
  width: 100%;
  display: block;
  ${TableRow} {
    :hover {
      background: white
    }
  }
`;

export const HeaderCell = styled.th`
  font-weight: 700;
  padding: 15rem 20rem;

  flex-basis: ${(props) => css`${props.w ? props.w : 100}%`};;
  flex-grow: 1;
  display: block;
  text-align: ${(props) => css`${props.align ? props.align : "left"}`};
`;



export const TableBody = styled.tbody`
  display: block;
  width: 100%;
  // overflow: auto;
  // max-height: 380px;
  //  position:relative;
`;

export const TableCell = styled.td`
  padding: 15rem 20rem;

  flex-basis: ${(props) => css`${props.w ? props.w : 100}%`};;
  flex-grow: 1;
  display: block;
  text-align: ${(props) => css`${props.align ? props.align : "left"}`};
`;

export const WrapIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  > * {
    padding: 0 10rem;
    margin: 0 5rem;
  }
`;

export const Point = styled.div`
  color: ${(props => props.negative ? "red" : "black")}
`;








