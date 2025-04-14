import React from 'react';
import styled from '@emotion/styled';
import { customThemeProps as custom } from '../../config/theme';

// Styled components for the logo
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${custom.spacing.sm};
  position: relative;
`;

const LogoText = styled.h1`
  font-family: ${custom.typography.fontFamily};
  font-size: ${custom.typography.fontSize.xl};
  color: ${custom.colors.primary};
  margin: 0;
  font-weight: ${custom.typography.fontWeight.bold};
  letter-spacing: 1px;
  
  // Add dreamy effect with text shadow
  text-shadow: 
    0 0 10px ${custom.colors.mermaid.shell}80,
    0 0 20px ${custom.colors.mermaid.foam}60,
    0 0 30px ${custom.colors.mermaid.coral}40;
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

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  // Size variations for the logo
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return { fontSize: custom.typography.fontSize.lg };
      case 'large':
        return { fontSize: custom.typography.fontSize.xxl };
      default:
        return { fontSize: custom.typography.fontSize.xl };
    }
  };

  return (
    <LogoContainer>
      <ShellIcon />
      <LogoText style={getSizeStyles()}>Dreamy Accessories</LogoText>
      <StarIcon />
    </LogoContainer>
  );
};

export default Logo; 