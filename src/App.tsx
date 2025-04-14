import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme, customThemeProps as custom } from './config/theme';
import styled from '@emotion/styled';
import HomePage from './components/home/HomePage';
import CategoryPage from './components/category/CategoryPage';

const AppContainer = styled('div')`
  min-height: 100vh;
  background-color: ${custom.colors.background.main};
  background-image: ${custom.colors.background.gradient};
  overflow-x: hidden;

  @media (max-width: ${custom.breakpoints.sm}) {
    background-attachment: fixed;
  }
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
          </Routes>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
