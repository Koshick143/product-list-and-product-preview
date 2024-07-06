import React from "react";
import { Container, Typography, Box } from "@mui/material";
import ProductList from "./components/ProductList";
import SideFilter from "./components/SideFilter";
import TopBar from "./components/TopBar";

const App: React.FC = () => {
  return (
    <Container>
     <TopBar/>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ position: "relative", left: "-10vw" }}>
          <SideFilter />
        </Box>
        <Box sx={{position:'relative' ,left:'-10vw'}}>
        <ProductList />
        </Box>
      </Box>
    </Container>
  );
};

export default App;
