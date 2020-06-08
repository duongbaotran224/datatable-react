import styled, { css, keyframes } from 'styled-components'
const fadeIn = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`

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
  background: #fff;
  transition: all 0.3s ease;
  opacity: 0;
  :hover{
    background: #f9fafb;
  };

  ${({ show, index }) => show && css`
  animation-name: ${fadeIn};
  animation-delay: ${index * 0.1}s;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;`
  };

`;

export const TableHeader = styled.thead`
  width: 100%;
  display: block;
  ${TableRow} {
    opacity: 1;
    :hover {
      background: white
    }
  }
`;

export const HeaderCell = styled.th`
  font-size: 12rem;
  font-weight: 700;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: #bdbdbd;
  padding: 15rem 20rem;

  flex-basis: ${(props) => css`${props.w ? props.w : 100}%`};
  flex-grow: 1;
  display: block;
  text-align: ${(props) => css`${props.align ? props.align : "center"}`};

  @media(max-width: 600px){
    padding: 15rem 5rem;
  }  
`;

export const TableBody = styled.tbody`
  display: block;
  width: 100%;
  overflow: auto;
  max-height: 260px;

  @media(max-width: 600px){
    max-height: 300px;
    border-bottom: 1px solid #eee;
  }  

`;

export const TableCell = styled.td`
  padding: 15rem 20rem;
  flex-basis: ${(props) => css`${props.w ? props.w : 100}%`};;
  flex-grow: 1;
  display: block;
  text-align: ${(props) => css`${props.align ? props.align : "center"}`};

  @media(max-width: 600px){
    padding: 15rem 5rem;
  }  
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

export const ButtonIcon = styled.button`
  :hover {
    > * {
      transition: all 0.5s ease;
      color: #000
    }
  }
`;

export const Point = styled.div`
  color: ${(props => props.negative ? "red" : "black")}
`;









