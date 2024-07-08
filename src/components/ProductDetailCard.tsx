import { Card, CardContent ,Box, Typography, Divider } from '@mui/material'
import React from 'react'

 const ProductDetailCard: React.FC = () => {
    return(
       <Card sx={{margin:'20px 0'}}>
        <CardContent>
        <Typography variant="body1" color="initial"> Description</Typography>
        <Divider/>
            <Box sx={{display:'flex' ,justifyContent:'space-around'}}>
               
            <Box sx={{position:'relative' , left:'-10%'}}>
              <Typography color='text.secondary'>
                 color:
              </Typography>
              <Typography color='text.secondary'>
                   width:
              </Typography>
              <Typography color='text.secondary'>
                  length:
              </Typography>
              <Typography color='text.secondary'>
                material:
              </Typography>
            </Box>

            <Box sx={{position:'relative' , left:'-30%' }}>
            <Typography color='text.primary'>
                 red
              </Typography>
              <Typography color='text.primary'>
                   45cm
              </Typography>
              <Typography color='text.primary'>
                  100cm
              </Typography>
              <Typography color='text.primary'>
                 cotton
              </Typography>
            </Box>
            </Box>

        </CardContent>
       </Card>
    )
 }

 export default ProductDetailCard