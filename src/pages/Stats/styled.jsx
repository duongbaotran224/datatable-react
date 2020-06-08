import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  margin: 60rem auto;
  padding: 20rem;
  font-size: 16rem;
  min-height: calc(100vh - 120rem);
  background: #fbfbfb;
  // overflow: hidden;

  @media(max-width: 600px){
    background: #fff;
    padding: 0;
  }  
`;

export const Heading = styled.h1`
  font-size: 18rem;
  margin-bottom: 20rem;

  @media(max-width: 600px){
    padding: 0 20rem;
  }  
`;
