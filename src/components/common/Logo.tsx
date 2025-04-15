import React from 'react';
import styled from '@emotion/styled';
import { customThemeProps as custom } from '../../config/theme';

// Styled components for the logo
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: ${custom.spacing.sm};

  @media (max-width: ${custom.breakpoints.sm}) {
    padding: ${custom.spacing.xs};
  }
`;

const LogoText = styled.h1`
  color: ${custom.colors.text.primary};
  text-shadow: 
    2px 2px 4px ${custom.colors.mermaid.shell},
    -2px -2px 4px ${custom.colors.mermaid.foam},
    2px -2px 4px ${custom.colors.mermaid.coral};
  margin: 0;
  padding: 0;
  text-align: center;
  width: 100%;
  font-family: ${custom.typography.fontFamily};
  transition: all 0.3s ease;

  @media (max-width: ${custom.breakpoints.sm}) {
    font-size: 2rem !important; // Override size styles for mobile
    line-height: 1.2;
    text-shadow: 
      1px 1px 2px ${custom.colors.mermaid.shell},
      -1px -1px 2px ${custom.colors.mermaid.foam},
      1px -1px 2px ${custom.colors.mermaid.coral};
  }
`;

const ShellIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(
    135deg,
    ${custom.colors.mermaid.shell} 0%,
    ${custom.colors.mermaid.coral} 100%
  );
  border-radius: ${custom.borderRadius.round};
  position: relative;
  transform: rotate(-45deg);
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background: ${custom.colors.mermaid.pearl};
    border-radius: ${custom.borderRadius.round};
    opacity: 0.8;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 20%;
    left: 20%;
    width: 16px;
    height: 16px;
    background: ${custom.colors.mermaid.foam};
    border-radius: ${custom.borderRadius.round};
    opacity: 0.6;
  }
`;

const StarIcon = styled.div`
  width: 24px;
  height: 24px;
  background: linear-gradient(
    135deg,
    ${custom.colors.mermaid.foam} 0%,
    ${custom.colors.secondary} 100%
  );
  border-radius: ${custom.borderRadius.round};
  position: relative;
  box-shadow: ${custom.shadows.glow};
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: ${custom.colors.mermaid.pearl};
    border-radius: ${custom.borderRadius.round};
    opacity: 0.8;
  }
  
  &:after {
    content: '✦';
    position: absolute;
    color: ${custom.colors.mermaid.pearl};
    animation: sparkle 1.5s infinite ease-in-out alternate;
  }
  
  @keyframes sparkle {
    0% {
      transform: scale(1) rotate(0deg);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.2) rotate(180deg);
      opacity: 1;
    }
    100% {
      transform: scale(1) rotate(360deg);
      opacity: 0.8;
    }
  }
`;

const getSizeStyles = (size?: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return {
        fontSize: '2rem',
      };
    case 'medium':
      return {
        fontSize: '3rem',
      };
    case 'large':
      return {
        fontSize: '4rem',
      };
    default:
      return {
        fontSize: '3rem',
      };
  }
};

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  return (
    <LogoContainer>
      <LogoText style={getSizeStyles(size)}>
        Dreamy Accessories
      </LogoText>
    </LogoContainer>
  );
};

export default Logo; 