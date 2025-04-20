import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { customThemeProps as custom } from '../../config/theme';

const OwnerContainer = styled.section`
  padding: ${custom.spacing.xl};
  background: ${custom.colors.background.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${custom.spacing.lg};
  margin: ${custom.spacing.xl} auto;
  max-width: 1200px;

  @media (max-width: ${custom.breakpoints.sm}) {
    padding: ${custom.spacing.lg};
    margin: ${custom.spacing.lg} auto;
  }
`;

const OwnerTitle = styled(Typography)`
  color: ${custom.colors.text.primary};
  font-size: ${custom.typography.fontSize.xxl};
  font-weight: ${custom.typography.fontWeight.bold};
  text-align: center;
  text-shadow: ${custom.shadows.glow};
  margin-bottom: ${custom.spacing.lg};
`;

const OwnerContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${custom.spacing.xl};
  width: 100%;

  @media (max-width: ${custom.breakpoints.sm}) {
    flex-direction: column;
    gap: ${custom.spacing.lg};
  }
`;

const OwnerImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: ${custom.shadows.medium};
  border: 4px solid ${custom.colors.primary};

  @media (max-width: ${custom.breakpoints.sm}) {
    width: 200px;
    height: 200px;
  }
`;

const OwnerInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${custom.spacing.md};
`;

const OwnerName = styled(Typography)`
  color: ${custom.colors.text.primary};
  font-size: ${custom.typography.fontSize.xl};
  font-weight: ${custom.typography.fontWeight.bold};
`;

const OwnerDescription = styled(Typography)`
  color: ${custom.colors.text.secondary};
  font-size: ${custom.typography.fontSize.md};
  line-height: 1.6;
`;

const OwnerQuote = styled(Typography)`
  color: ${custom.colors.accent};
  font-size: ${custom.typography.fontSize.lg};
  font-style: italic;
  margin-top: ${custom.spacing.md};
  text-align: center;
`;

const OwnerSection: React.FC = () => {
  return (
    <OwnerContainer>
      <OwnerTitle>Meet Our Founders</OwnerTitle>
      <OwnerContent>
        <OwnerImage 
          src="/images/Owner.jpg" 
          alt="Founder of Girls Accessories"
        />
        <OwnerInfo>
          <OwnerName>Tia Soliman</OwnerName>
          <OwnerDescription>
            With a passion for beautiful accessories and a keen eye for design, Tia founded Girls Accessories in 2024. 
            What started as a small boutique has grown into a beloved destination for unique and stylish jewelry pieces.
          </OwnerDescription>
          <OwnerDescription>
            Tia's journey began when she discovered her love for creating custom pieces for friends and family. 
            Today, she leads a team of talented designers who share her vision of bringing elegance and charm to every piece.
          </OwnerDescription>
        </OwnerInfo>
      </OwnerContent>
      <OwnerContent>
        <OwnerImage 
          src="/images/Owner2.jpg" 
          alt="Founder of Girls Accessories"
        />
        <OwnerInfo>
          <OwnerName>Lili Mohamed</OwnerName>
          <OwnerDescription>
            With a passion for beautiful accessories and a keen eye for design, Lili founded Girls Accessories in 2024. 
            What started as a small boutique has grown into a beloved destination for unique and stylish jewelry pieces.
          </OwnerDescription>
          <OwnerDescription>
            Lili's journey began when she discovered her love for creating custom pieces for friends and family. 
            Today, she leads a team of talented designers who share her vision of bringing elegance and charm to every piece.
          </OwnerDescription>
          <OwnerQuote>
            "Every piece tells a story. I want our customers to feel special and confident when they wear our accessories."
          </OwnerQuote>
        </OwnerInfo>
      </OwnerContent>
    </OwnerContainer>
  );
};

export default OwnerSection; 