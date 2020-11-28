import React from 'react';
import LoginForm from "./pages/LoginForm";
import { ChakraProvider, theme } from '@chakra-ui/react';
import ThemeToggler from "./components/ThemeToggler";


export default function App() {
  return (
      <ChakraProvider theme={theme}>
          <ThemeToggler/>
          <LoginForm/>
      </ChakraProvider>
  );
}