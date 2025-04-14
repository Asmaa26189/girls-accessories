import React from 'react';
import styled from '@emotion/styled';
import { customThemeProps as custom } from '../../config/theme';
import Logo from '../common/Logo';
import HeroSection from './HeroSection';
import CategorySection from './CategorySection';

const LogoWrapper = styled.div`
  padding: ${custom.spacing.lg};
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;

  @media (max-width: ${custom.breakpoints.sm}) {
    padding: ${custom.spacing.md};
  }
`;

const MainContent = styled.main`
  position: relative;
  z-index: 1;
  padding: 0 ${custom.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${custom.breakpoints.sm}) {
    padding: 0 ${custom.spacing.md};
  }
`;

const HomePage: React.FC = () => {
  return (
    <>
      <LogoWrapper>
        <Logo size="large" />
      </LogoWrapper>
      <MainContent>
        <HeroSection />
        <CategorySection />
      </MainContent>
    </>
  );
};

export default HomePage; 