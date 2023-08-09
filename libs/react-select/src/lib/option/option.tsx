import styled from 'styled-components';

/* eslint-disable-next-line */
export interface OptionProps {}

const StyledOption = styled.div`
  color: pink;
`;

export function Option(props: OptionProps) {
  return (
    <StyledOption>
      <h1>Welcome to Option!</h1>
    </StyledOption>
  );
}

export default Option;
