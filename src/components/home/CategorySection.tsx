import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Typography, Grid } from '@mui/material';
import { customThemeProps as custom } from '../../config/theme';

// Icons using emojis
const HairIcon = () => <span>🎀</span>; // Use Ribbon Emoji
const NecklaceIcon = () => <span>💎</span>; // Use Diamond Emoji
const BraceletIcon = () => <span>🦄</span>; // Use Unicorn Emoji
const EarringIcon = () => <span>✨</span>; // Use Sparkles Emoji

const SectionContainer = styled.section`
  padding: ${custom.spacing.lg} ${custom.spacing.md};
  max-width: 1200px;
  margin: ${custom.spacing.xl} auto; // Add top margin

  @media (max-width: ${custom.breakpoints.sm}) {
    padding: ${custom.spacing.md} ${custom.spacing.sm};
    margin: ${custom.spacing.lg} auto;
  }
`;

const SectionTitle = styled(Typography)`
  color: ${custom.colors.text.secondary}; // Softer color
  margin-bottom: ${custom.spacing.lg};
  text-align: center;
  font-weight: ${custom.typography.fontWeight.regular};
  font-size: ${custom.typography.fontSize.lg}; // Smaller size

  @media (max-width: ${custom.breakpoints.sm}) {
    font-size: ${custom.typography.fontSize.md};
    margin-bottom: ${custom.spacing.md};
  }
`;

const CategoryCard = styled.div`
  padding: ${custom.spacing.lg};
  border-radius: ${custom.borderRadius.lg};
  background: ${custom.colors.background.light}; // White/Light background
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${custom.shadows.small}; // Softer shadow
  height: 180px; // Fixed height for consistency
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${custom.colors.background.dark}; // Subtle border

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
  font-size: 48px; // Set font size for emojis
  line-height: 1; // Ensure emojis align well if wrapped in span

  // Style for images within the icon container
  img {
    display: block; // Prevent extra space below image
    width: 48px;
    height: 48px;
  }
`;

const CategoryTitle = styled(Typography)`
  margin-bottom: ${custom.spacing.xs}; // Less space
  color: ${custom.colors.text.primary}; // Darker text
  font-weight: ${custom.typography.fontWeight.medium};
  font-size: ${custom.typography.fontSize.md};

  @media (max-width: ${custom.breakpoints.sm}) {
    font-size: ${custom.typography.fontSize.sm};
  }
`;

const CategoryDescription = styled(Typography)`
  color: ${custom.colors.text.secondary}; // Secondary text color
  font-size: ${custom.typography.fontSize.sm};
  line-height: 1.4;

  @media (max-width: ${custom.breakpoints.sm}) {
    font-size: ${custom.typography.fontSize.xs};
  }
`;

// Updated categories based on the image
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