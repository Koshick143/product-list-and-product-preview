import React from "react";
import { Container, Typography, Box } from "@mui/material";
import ProductList from "./components/ProductList";
import SideFilter from "./components/SideFilter";
import TopBar from "./components/TopBar";
import ImgCard from "./components/ImgCard";

const App: React.FC = () => {
  const cardWidth = '80vw'; 
  const cardWidth2 = '57vw'
  const left ="60vw"
  const left2 ="77vw"

  return (
    // <Container>
    //   <TopBar />
    //   <Box sx={{ display: 'flex' }}>
    //     <Box sx={{ position: 'relative', left: '-10vw' }}>
    //       <SideFilter />
    //     </Box>
    //     <Box sx={{ position: 'relative', left: '-10vw' }}>
    //       <ProductList cardWidth={cardWidth} left={left} />
    //     </Box>
    //   </Box>
    // </Container>
    <>
    <Box sx={{display:"flex"}}>
      <Box sx={{width:'40vw'}}>
         <ImgCard/>
      </Box>
      <Box sx={{width:'40vw'}}>

      <ProductList cardWidth={cardWidth2} left={left2}/>
      </Box>
    </Box>
    </>
  );
};

export default App;
