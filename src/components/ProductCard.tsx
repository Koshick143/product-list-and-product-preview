import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
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
  cardWidth: string | number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, cardWidth }) => {
  return (
    <Card
      sx={{
        width: cardWidth,
        maxHeight: "15vh",
        margin: "auto",
        marginBottom: 2,
        display: "flex",
       
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
        }}
      />
      <CardContent>
        <Box sx={{ display: "flex", minWidth: "50%" }}>
          <Box
            sx={{
              position: "relative",
              left: "-10px",
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
              <Typography sx={{ marginLeft: "10px" }} variant="body2" color="text.secondary">
                <span> Variants:{product.variants}</span>
              </Typography>
              <Typography sx={{ marginLeft: "10px" }} variant="body2" color="text.secondary">
                <span>Category: {product.category}</span>
              </Typography>
              <Typography sx={{ marginLeft: "10px" }} variant="body2" color="text.secondary">
                <span>Stock Status: {product.stock_status}</span>
              </Typography>
            </Box>
          </Box>

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
              <Typography sx={{ position: 'relative', bottom: '-20px' }} variant="body2" color="text.secondary">
                <span> {product.retail_price}</span>
              </Typography>
            </Box>
            <Box sx={{ marginLeft: "20px", position: 'absolute', left: "8vw" }}>
              <Typography variant="body2" width={150}>
                <span>Wholesale Price</span>
              </Typography>
              <Typography sx={{ position: 'relative', bottom: '-20px' }} variant="body2" color="text.secondary">
                <span>{product.wholesale_price}</span>
              </Typography>
            </Box>
            <BsThreeDotsVertical style={{ position: 'absolute', left: '17vw', bottom: '-5px' }} size={25} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
