import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainContainer from './components/MainContainer/MainContainer';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tower Test</h1>
      </header>
      <QueryClientProvider client={queryClient}>
        <MainContainer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
