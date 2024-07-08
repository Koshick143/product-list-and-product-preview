import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

 const ProductTopBar: React.FC = () => {
  return (
   <Container sx={{margin:'10px 0' , display:'flex' ,justifyContent:'space-between'}}>
    <Box>
    {/* Change the button type according to the needs and style preference  */}
    <Button variant="outlined" size='small' color="success" sx={{ color:'green'}}> 
    General Infomation
       </Button>
       <Button variant="outlined" size='small' color="success" sx={{ color:'green'}}> 
         Variant
        </Button>
        <Button variant="outlined" size='small' color="success" sx={{ color:'green'}}> 
        Notes
        </Button>
    </Box>
    <Box sx={{display:'flex'}}>
     <Typography variant="body1" color='text.secondary'>
      Total:
     </Typography>
     <Typography variant="body1" color='text.primary'>
        1234
     </Typography> 
    </Box>
   </Container>
  )
}

export default ProductTopBar
