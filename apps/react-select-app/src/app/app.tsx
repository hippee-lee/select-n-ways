import styled from 'styled-components';

import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
  border: 12px solid deeppink;
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="react-select-app" />
    </StyledApp>
  );
}

export default App;
