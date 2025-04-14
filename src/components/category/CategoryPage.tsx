import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { customThemeProps as custom } from '../../config/theme';

const CategoryContainer = styled.div`
  min-height: 100vh;
  padding: ${custom.spacing.lg};
  background: ${custom.colors.background.gradient};
  position: relative;
  z-index: 1;
`;

const BackButton = styled(IconButton)`
  position: absolute;
  top: ${custom.spacing.lg};
  left: ${custom.spacing.lg};
  color: ${custom.colors.text.primary};
  background: ${custom.colors.background.light};
  box-shadow: ${custom.shadows.medium};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(-4px);
    background: ${custom.colors.background.light};
  }
`;

const CategoryTitle = styled.h1`
  text-align: center;
  color: ${custom.colors.text.primary};
  margin: ${custom.spacing.xl} 0;
  font-size: ${custom.typography.fontSize.xxl};
  font-weight: ${custom.typography.fontWeight.bold};
  text-shadow: ${custom.shadows.glow};

  @media (max-width: ${custom.breakpoints.sm}) {
    font-size: ${custom.typography.fontSize.xl};
    margin: ${custom.spacing.lg} 0;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${custom.spacing.lg};
  padding: ${custom.spacing.lg} 0;

  @media (max-width: ${custom.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: ${custom.spacing.md};
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;

  @media (max-width: ${custom.breakpoints.sm}) {
    height: 200px;
  }
`;

const ProductOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${custom.spacing.lg};
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const ProductTitle = styled.h3`
  color: ${custom.colors.text.light};
  font-size: ${custom.typography.fontSize.lg};
  font-weight: ${custom.typography.fontWeight.medium};
  margin-bottom: ${custom.spacing.sm};
  text-align: center;

  @media (max-width: ${custom.breakpoints.sm}) {
    font-size: ${custom.typography.fontSize.md};
  }
`;

const ProductPrice = styled.span`
  color: ${custom.colors.accent};
  font-size: ${custom.typography.fontSize.md};
  font-weight: ${custom.typography.fontWeight.bold};

  @media (max-width: ${custom.breakpoints.sm}) {
    font-size: ${custom.typography.fontSize.sm};
  }
`;

const ProductCard = styled.div`
  position: relative;
  border-radius: ${custom.borderRadius.md};
  overflow: hidden;
  box-shadow: ${custom.shadows.medium};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${custom.shadows.large};

    .product-overlay-target {
      opacity: 1;
    }
  }
`;

// Sample product data - replace with your actual data
const categoryProducts = {
  'hair-accessories': [
    { id: 1, title: 'Starfish Hair Clip', price: '$15.99', image: 'https://images.unsplash.com/photo-1589203943389-461e6387e1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 2, title: 'Pearl Headband', price: '$24.99', image: 'https://images.unsplash.com/photo-1606901885696-eedf5d525c10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  ],
  necklaces: [
    { id: 1, title: 'Pearl Necklace', price: '$49.99', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 2, title: 'Crystal Pendant', price: '$39.99', image: 'https://images.unsplash.com/photo-1610050080903-d49169536a08?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    // Add more products
  ],
  earrings: [
    { id: 1, title: 'Starfish Earrings', price: '$29.99', image: 'https://images.unsplash.com/photo-1616606040168-fe49770656ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 2, title: 'Shell Studs', price: '$19.99', image: 'https://images.unsplash.com/photo-1583904669804-878b0e0658c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    // Add more products
  ],
  bracelets: [
    { id: 1, title: 'Sea Glass Bracelet', price: '$34.99', image: 'https://images.unsplash.com/photo-1591811261131-2478a8d51466?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 2, title: 'Pearl Bangle', price: '$44.99', image: 'https://images.unsplash.com/photo-1600868039189-16b6191083ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    // Add more products
  ],
  rings: [
    { id: 1, title: 'Mermaid Ring', price: '$39.99', image: 'https://images.unsplash.com/photo-1605100804763-2fdd55c43870?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 2, title: 'Shell Band', price: '$29.99', image: 'https://images.unsplash.com/photo-1583876480051-54a69f46b047?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    // Add more products
  ]
};

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();
  const products = categoryName ? categoryProducts[categoryName as keyof typeof categoryProducts] || [] : [];

  if (!categoryName) {
    return <div>Category not found</div>;
  }

  const formattedCategoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return (
    <CategoryContainer>
      <BackButton onClick={() => navigate('/')}>
        <ArrowBackIcon />
      </BackButton>
      <CategoryTitle>
        {formattedCategoryName}
      </CategoryTitle>
      <ProductGrid>
        {Array.isArray(products) && products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductOverlay className="product-overlay-target">
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductOverlay>
          </ProductCard>
        ))}
      </ProductGrid>
    </CategoryContainer>
  );
};

export default CategoryPage; 