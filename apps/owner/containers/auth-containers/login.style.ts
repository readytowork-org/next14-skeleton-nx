import styled from 'styled-components';

export const StyledLoginFormWrapper = styled.section`
  width: 400px;
  height: 100%;
  margin: auto;
  border: 1px solid #1677ff;
  border-radius: 8px;
  padding: 1em;
  label {
    color: ${(props) => (props?.theme?.mode === 'dark' ? 'white' : 'black')};
  }
`;
