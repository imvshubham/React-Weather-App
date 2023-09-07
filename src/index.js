import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from "react-dom/client" instead of "react-dom"
import { ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);

reportWebVitals();
