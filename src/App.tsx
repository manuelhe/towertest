import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainContainer from './components/MainContainer/MainContainer';
import 'rsuite/dist/styles/rsuite-default.css';
import { Container, Content, FlexboxGrid, Header, Navbar } from 'rsuite';

const queryClient = new QueryClient();

function App() {
  return (
    <Container >
      <Header>
        <Navbar appearance="inverse">
          <Navbar.Header>
            <a href="./" className="headerTitle">Tower Test</a>
          </Navbar.Header>
        </Navbar>
      </Header>
      <Content>
        <FlexboxGrid justify="center">
          <QueryClientProvider client={queryClient}>
            <MainContainer />
          </QueryClientProvider>
        </FlexboxGrid>
      </Content>
    </Container>
  );
}

export default App;
