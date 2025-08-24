import styled from 'styled-components'

export const Box = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${ (props) => props.borderColor };
  margin: 20px;
`;
