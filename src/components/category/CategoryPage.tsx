import React, { useEffect } from 'react';
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
  overflow-x: hidden;
`;

const BackButton = styled(IconButton)`
  position: fixed;
  top: ${custom.spacing.lg};
  left: ${custom.spacing.lg};
  color: ${custom.colors.text.primary};
  background: ${custom.colors.background.light};
  box-shadow: ${custom.shadows.medium};
  transition: transform 0.3s ease;
  z-index: 10;

  &:hover {
    transform: translateX(-4px);
    background: ${custom.colors.background.light};
  }

  @media (max-width: ${custom.breakpoints.sm}) {
    top: ${custom.spacing.md};
    left: ${custom.spacing.md};
  }
`;

const CategoryTitle = styled.h1`
  text-align: center;
  color: ${custom.colors.text.primary};
  margin: ${custom.spacing.xl} 0;
  font-size: ${custom.typography.fontSize.xxl};
  font-weight: ${custom.typography.fontWeight.bold};
  text-shadow: ${custom.shadows.glow};
  padding-top: 60px;

  @media (max-width: ${custom.breakpoints.sm}) {
    font-size: ${custom.typography.fontSize.xl};
    margin: ${custom.spacing.lg} 0;
    padding-top: 50px;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${custom.spacing.lg};
  padding: ${custom.spacing.lg} 0;
  margin-top: ${custom.spacing.md};

  @media (max-width: ${custom.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: ${custom.spacing.md};
    padding: ${custom.spacing.md} 0;
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
    { id: 1, title: 'Starfish Hair Clip', price: '$15.99', image: '/images/products/bracelets/1.jpg' },
    { id: 2, title: 'Pearl Headband', price: '$24.99', image: '/images/products/bracelets/2.jpg' },
    { id: 3, title: 'Crystal Hair Pin Set', price: '$19.99', image: '/images/products/bracelets/3.jpg' },
    { id: 4, title: 'Floral Hair Clips', price: '$12.99', image: '/images/products/bracelets/4.jpg' }
  ],
  necklaces: [
    { id: 1, title: 'Pearl Necklace', price: '$49.99', image: '/images/products/bracelets/1.jpg' },
    { id: 2, title: 'Crystal Pendant', price: '$39.99', image: '/images/products/bracelets/2.jpg' },
    { id: 3, title: 'Gold Chain', price: '$59.99', image: '/images/products/bracelets/3.jpg' },
    { id: 4, title: 'Layered Necklace', price: '$45.99', image: '/images/products/bracelets/4.jpg' }
  ],
  earrings: [
    { id: 1, title: 'Crystal Drop Earrings', price: '$29.99', image: '/images/products/bracelets/1.jpg' },
    { id: 2, title: 'Pearl Studs', price: '$19.99', image: '/images/products/bracelets/2.jpg' },
    { id: 3, title: 'Gold Hoops', price: '$34.99', image: '/images/products/bracelets/3.jpg' },
    { id: 4, title: 'Butterfly Earrings', price: '$24.99', image: '/images/products/bracelets/4.jpg' }
  ],
  bracelets: [
    { id: 1, title: 'Crystal Tennis Bracelet', price: '$34.99', image: '/images/products/bracelets/1.jpg' },
    { id: 2, title: 'Pearl Bangle', price: '$44.99', image: '/images/products/bracelets/2.jpg' },
    { id: 3, title: 'Charm Bracelet', price: '$39.99', image: '/images/products/bracelets/3.jpg' },
    { id: 4, title: 'Gold Chain Bracelet', price: '$49.99', image: '/images/products/bracelets/4.jpg' }
  ],
  rings: [
    { id: 1, title: 'Crystal Ring', price: '$39.99', image: '/images/products/bracelets/1.jpg' },
    { id: 2, title: 'Pearl Ring', price: '$29.99', image: '/images/products/bracelets/2.jpg' },
    { id: 3, title: 'Gold Band', price: '$44.99', image: '/images/products/bracelets/3.jpg' },
    { id: 4, title: 'Statement Ring', price: '$49.99', image: '/images/products/bracelets/4.jpg' }
  ]
};

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();
  const products = categoryName ? categoryProducts[categoryName as keyof typeof categoryProducts] || [] : [];

  // Scroll to top when component mounts or category changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [categoryName]);

  const handleBackClick = () => {
    navigate('/');
  };

  if (!categoryName) {
    return <div>Category not found</div>;
  }

  const formattedCategoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return (
    <CategoryContainer>
      <BackButton onClick={handleBackClick}>
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