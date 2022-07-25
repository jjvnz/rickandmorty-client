import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
      <ApolloProvider client={client}>    
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
    </ApolloProvider>
  </BrowserRouter>
);

