import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {QueryClient, QueryClientProvider} from 'react-query';
import {UserContextProvider} from './contexts/UserContext';

const queryList = new QueryClient();

function App() {
  return (
    <UserContextProvider>
      <QueryClientProvider client={queryList}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </QueryClientProvider>
    </UserContextProvider>
  );
}

export default App;
