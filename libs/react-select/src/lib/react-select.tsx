import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReactSelectProps {}

const StyledReactSelect = styled.div`
  color: pink;
`;

export function ReactSelect(props: ReactSelectProps) {
  return (
    <StyledReactSelect>
      <h1>Welcome to ReactSelect!</h1>
    </StyledReactSelect>
  );
}

export default ReactSelect;
