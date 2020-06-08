import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  padding: 20rem;
  font-size: 16rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 1px -4px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  background: #fff;

  @media(max-width: 600px){
    padding: 0;
    max-height: 100vh;
    box-shadow: none
  }  
`;

export const Section = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30rem;
`;

export const ButtonAdd = styled.button`
  font-size: 12rem;
  letter-spacing: 0.2em;
  width: 120rem;
  border-radius: 5px;
  min-height: 40px;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  background: #000;
  padding: 4rem 20rem 6rem 20rem ;
  transition: all 0.3s ease;

  &:hover {
    background: #65c5a6;
  };


  @media(max-width: 600px){
    margin-right: 20rem
  }
`
