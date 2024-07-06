import React from 'react';
import { Container, Typography } from '@mui/material';
import ProductList from './components/ProductList';

const App: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center" marginTop={2}>
        Product Inventory
      </Typography>
      <ProductList />
    </Container>
  );
};

export default App;
