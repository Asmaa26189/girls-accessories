import React from 'react';
import styled from '@emotion/styled';
import { Box, Typography, Button } from '@mui/material';
import { customThemeProps as custom } from '../../config/theme';

const HeroContainer = styled(Box)`
  padding: ${custom.spacing.xl};
  border-radius: ${custom.borderRadius.lg};
  background: ${custom.colors.background.light};
  text-align: center;
  margin-bottom: ${custom.spacing.xl};
  box-shadow: ${custom.shadows.small};

  @media (max-width: ${custom.breakpoints.sm}) {
    padding: ${custom.spacing.lg};
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Title = styled(Typography)`
  color: ${custom.colors.text.primary};
  margin-bottom: ${custom.spacing.md};
  font-weight: ${custom.typography.fontWeight.medium};
  font-size: ${custom.typography.fontSize.xxl};

  @media (max-width: ${custom.breakpoints.sm}) {
    font-size: ${custom.typography.fontSize.xl};
  }
`;

const Subtitle = styled(Typography)`
  color: ${custom.colors.text.secondary};
  margin-bottom: ${custom.spacing.lg};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-size: ${custom.typography.fontSize.md};
  line-height: 1.6;

  @media (max-width: ${custom.breakpoints.sm}) {
    font-size: ${custom.typography.fontSize.sm};
  }
`;

const ShopButton = styled(Button)`
  background: linear-gradient(135deg,
    ${custom.colors.primary} 0%,
    ${custom.colors.accent} 100%
  );
  color: ${custom.colors.text.light};
  padding: ${custom.spacing.sm} ${custom.spacing.xl};
  border-radius: ${custom.borderRadius.bubble};
  font-family: ${custom.typography.fontFamily};
  font-weight: ${custom.typography.fontWeight.medium};
  text-transform: none;
  font-size: ${custom.typography.fontSize.md};
  box-shadow: ${custom.shadows.medium};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${custom.shadows.large};
    background: linear-gradient(135deg,
      ${custom.colors.accent} 0%,
      ${custom.colors.primary} 100%
    );
  }
`;

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <Content>
        <Title variant="h2">
          Enchanting Accessories for Modern Mermaids
        </Title>
        <Subtitle variant="body1">
          Discover our magical collection of accessories that bring out
          the mermaid in you. From shimmering hair pieces to pearl-
          inspired jewelry.
        </Subtitle>
        <ShopButton variant="contained" disableElevation>
          Explore Collection
        </ShopButton>
      </Content>
    </HeroContainer>
  );
};

export default HeroSection; 