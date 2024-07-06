// src/components/ProductList.tsx
import React from 'react';
import { Box } from '@mui/material';
import ProductCard, { Product } from './ProductCard';
import { products } from '../assets/products'; // Assuming products are imported here

interface ProductListProps {
  cardWidth: string;
  left:string 
}

const ProductList: React.FC<ProductListProps> = ({ cardWidth ,left }) => {
  return (
    <Box container spacing={2} padding={2}>
      {products.map((product: Product, index: number) => (
        <Box item xs={12} sm={6} md={4} lg={3} key={index}>
          <ProductCard product={product} cardWidth={cardWidth} left ={left} />
        </Box>
      ))}
    </Box>
  );
};

export default ProductList;
