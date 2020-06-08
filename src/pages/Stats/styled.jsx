import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  margin: auto;
  padding: 60rem 20rem;
  font-size: 16rem;
  min-height: 100vh;
  background: #fbfbfb;

  @media(max-width: 600px){
    background: #fff;
    padding: 60rem 0;
  }  
`;

export const Heading = styled.h1`
  font-size: 18rem;
  margin: 20rem 0;

  @media(max-width: 600px){
    padding: 0 20rem;
  }  
`;
