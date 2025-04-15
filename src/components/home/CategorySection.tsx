import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Typography, Grid } from '@mui/material';
import { customThemeProps as custom } from '../../config/theme';

// Icons using emojis
const HairIcon = () => <span>🎀</span>;
const NecklaceIcon = () => <span>💎</span>;
const BraceletIcon = () => <span>🦄</span>;
const EarringIcon = () => <span>✨</span>;

const SectionContainer = styled.section`
  padding: ${custom.spacing.lg} ${custom.spacing.md};
  max-width: 1200px;
  margin: ${custom.spacing.xl} auto;

  @media (max-width: ${custom.breakpoints.sm}) {
    padding: ${custom.spacing.md} ${custom.spacing.sm};
    margin: ${custom.spacing.lg} auto;
  }
`;

const SectionTitle = styled(Typography)`
  color: ${custom.colors.text.secondary};
  margin-bottom: ${custom.spacing.lg};
  text-align: center;
  font-weight: ${custom.typography.fontWeight.regular};
  font-size: ${custom.typography.fontSize.lg};

  @media (max-width: ${custom.breakpoints.sm}) {
    font-size: ${custom.typography.fontSize.md};
    margin-bottom: ${custom.spacing.md};
  }
`;

const CategoryCard = styled.div`
  padding: ${custom.spacing.lg};
  border-radius: ${custom.borderRadius.lg};
  background: ${custom.colors.background.light};
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${custom.shadows.small};
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${custom.colors.background.dark};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${custom.shadows.medium};
    border-color: ${custom.colors.primary};
  }

  @media (max-width: ${custom.breakpoints.sm}) {
    padding: ${custom.spacing.md};
    height: 150px;
  }
`;

const CategoryIcon = styled.div`
  margin-bottom: ${custom.spacing.md};
  color: ${custom.colors.primary};
  font-size: 48px;
  line-height: 1;

  img {
    display: block;
    width: 48px;
    height: 48px;
  }
`;

const CategoryTitle = styled(Typography)`
  margin-bottom: ${custom.spacing.xs};
  color: ${custom.colors.text.primary};
  font-weight: ${custom.typography.fontWeight.medium};
  font-size: ${custom.typography.fontSize.md};

  @media (max-width: ${custom.breakpoints.sm}) {
    font-size: ${custom.typography.fontSize.sm};
  }
`;

const CategoryDescription = styled(Typography)`
  color: ${custom.colors.text.secondary};
  font-size: ${custom.typography.fontSize.sm};
  line-height: 1.4;

  @media (max-width: ${custom.breakpoints.sm}) {
    font-size: ${custom.typography.fontSize.xs};
  }
`;

const categories = [
  {
    name: 'hair-accessories',
    title: 'Hair Accessories',
    description: 'Hairpins',
    icon: HairIcon,
    bgcolor: '#FFF0F5'
  },
  {
    name: 'necklaces',
    title: 'Necklaces',
    description: 'necklaces',
    icon: NecklaceIcon,
    bgcolor: '#E0FFFF'
  },
  {
    name: 'bracelets',
    title: 'Bracelets',
    description: 'Bracelets',
    icon: BraceletIcon,
    bgcolor: '#F0FFF0'
  },
  {
    name: 'earrings',
    title: 'Earrings',
    description: 'Earrings',
    icon: EarringIcon,
    bgcolor: '#F5FFFA'
  }
];

const CategorySection: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    // First scroll to top
    window.scrollTo(0, 0);
    // Then navigate to the category page
    navigate(`/category/${categoryName}`);
  };

  return (
    <SectionContainer>
      <SectionTitle variant="h4">Explore Our Collections</SectionTitle>
      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={3} key={category.name}>
            <CategoryCard
              style={{ backgroundColor: category.bgcolor }}
              onClick={() => handleCategoryClick(category.name)}
            >
              <CategoryIcon><category.icon /></CategoryIcon>
              <CategoryTitle variant="h6">{category.title}</CategoryTitle>
              <CategoryDescription variant="body2">
                {category.description}
              </CategoryDescription>
            </CategoryCard>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default CategorySection; 