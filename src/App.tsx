import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ProductList from './components/ProductList';
import SideFilter from './components/SideFilter';

const App: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center" marginTop={2}>
        Product Inventory
      </Typography>
        <Box sx={{display:'flex' }}>
          <Box sx={{position:'relative',left:'0'}}>

          <SideFilter/>
          </Box>
         <ProductList />
        </Box>
    </Container>
  );
};

export default App;
