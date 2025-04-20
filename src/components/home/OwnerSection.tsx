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

const OwnersWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${custom.spacing.xl};
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: ${custom.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    gap: ${custom.spacing.lg};
  }
`;

const OwnerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${custom.spacing.md};
  flex: 1;
  max-width: 350px;
`;

const OwnerImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: ${custom.shadows.medium};
  border: 4px solid ${custom.colors.primary};
  margin-bottom: ${custom.spacing.md};

  @media (max-width: ${custom.breakpoints.sm}) {
    width: 200px;
    height: 200px;
  }
`;

const OwnerInfo = styled.div`
  text-align: center;
`;

const OwnerName = styled(Typography)`
  color: ${custom.colors.text.primary};
  font-size: ${custom.typography.fontSize.xl};
  font-weight: ${custom.typography.fontWeight.bold};
  margin-bottom: ${custom.spacing.sm};
`;

const SharedDescription = styled(Typography)`
  color: ${custom.colors.text.secondary};
  font-size: ${custom.typography.fontSize.md};
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: ${custom.spacing.xl} auto;
  padding: 0 ${custom.spacing.md};
`;

const OwnerQuote = styled(Typography)`
  color: ${custom.colors.accent};
  font-size: ${custom.typography.fontSize.lg};
  font-style: italic;
  margin-top: ${custom.spacing.md};
`;

const OwnerSection: React.FC = () => {
  return (
    <OwnerContainer>
      <OwnerTitle>Meet Our Founders</OwnerTitle>
      <OwnersWrapper>
        <OwnerCard>
          <OwnerImage 
            src="/images/Owner.jpg" 
            alt="Founder of Girls Accessories"
          />
          <OwnerInfo>
            <OwnerName>Tia Soliman</OwnerName>
          </OwnerInfo>
        </OwnerCard>

        <OwnerCard>
          <OwnerImage 
            src="/images/Owner2.jpg" 
            alt="Founder of Girls Accessories"
          />
          <OwnerInfo>
            <OwnerName>Lili Mohamed</OwnerName>
          </OwnerInfo>
        </OwnerCard>
      </OwnersWrapper>
      <SharedDescription>
        With a passion for beautiful accessories and a keen eye for design, Tia and Lili founded Girls Accessories in 2024. 
        Today, they lead a team of talented designers who share their vision of bringing elegance and charm to every piece.
      </SharedDescription>
      <OwnerQuote>
        "Every piece tells a story. We want our customers to feel special and confident when they wear our accessories."
      </OwnerQuote>
    </OwnerContainer>
  );
};

export default OwnerSection; 