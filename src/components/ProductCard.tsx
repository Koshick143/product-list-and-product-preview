import React from "react";
import { Card, CardContent, CardMedia, Typography, Box ,Divider } from "@mui/material";

import { BsThreeDotsVertical } from "react-icons/bs";

export interface Product {
  name: string;
  category: string;
  type: string;
  in_stock: number;
  stock_status: string;
  retail_price: string;
  wholesale_price: string;
  variants: number;
  img_url: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card
      sx={{
        minWidth: "80vw",
        maxHeight: "15vh",
        margin: "auto",
        marginBottom: 2,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <CardMedia
        component="img"
        height="90"
        image={product.img_url}
        alt={product.name}
        sx={{
          maxWidth: 100,
          borderRadius: "5px",
          margin: "5px",
          position: "relative",
          left: "-80px",
        }}
      />
      <CardContent>
        <Box sx={{ display: "flex", minWidth: "50vw" }}>
          <Box
            sx={{
              position: "relative",
              left: "-240px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography component="div">
                <span>{product.name}</span>
              </Typography>
            </Box>

            <Box
              sx={{ display: "flex", position: "relative", bottom: "-20px" }}
            >
              <Typography sx={{marginLeft:"10px"}} variant="body2" color="text.secondary">
                <span> Variants:{product.variants}</span>
              </Typography>
              <Typography sx={{marginLeft:"10px"}} variant="body2" color="text.secondary">
                <span>Category: {product.category}</span>
              </Typography>
              <Typography sx={{marginLeft:"10px"}} variant="body2" color="text.secondary">
                <span>Stock Status: {product.stock_status}</span>
              </Typography>
            </Box>
          </Box>
                    
         
          
          {/* i tried to make the text align the self so it show in a straing line but it didnt worked out hope you can figure it out */}
          {/* never mind i figiured it out some how */}

          <Box
            sx={{
              display: "flex",
              position: "absolute",
              left: "60vw",
              textAlign: "left",
            }}
          >
            <Box>
              <Typography variant="body2">
                <span>Retail Price</span>
              </Typography>
              <Typography sx={{position:'relative' ,bottom:'-20px'}}  variant="body2" color="text.secondary">
                <span> {product.retail_price}</span>
              </Typography>
            </Box>
            <Box sx={{ marginLeft: "20px"  ,position:'absolute' ,left:"8vw"}}>
              <Typography variant="body2" width={300}>
                <span>Wholesale Price</span>
              </Typography>
              <Typography sx={{position:'relative' ,bottom:'-20px'}} variant="body2" color="text.secondary">
                <span>{product.wholesale_price}</span>
              </Typography>
            </Box>
             <BsThreeDotsVertical style={{position:'absolute', left:'25vw' ,bottom:'-5px'}} size={25 }/>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
