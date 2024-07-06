import { Box, Typography,TextField ,Button } from '@mui/material';
import React from 'react';

import GridViewIcon from '@mui/icons-material/GridView';
import ListIcon from '@mui/icons-material/List';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';






const TopBar: React.FC = () => {
  return (
   <Box sx={{display:'flex', margin:"10px 0 "}}>
    <Box sx={{display:'flex' , position:'relative', left:'-10vw'}}>
        <Typography variant="h5" color="initial">
            Product
        </Typography>
        <Box>
           <Typography sx={{marginLeft:'30px', marginTop:'7px', border:'0.1px solid' ,padding:'3px' ,borderRadius:'10px' ,}} variant="body2" color="secondary">
           1377  product
            </Typography>
        </Box>
    </Box>
    <Box sx={{display:'flex'}}>
        {/* i am unable to set the height of the text field , hope you can figure it out good luck */}
        <Box><TextField sx={{height:'2vh' , width:'30vw'}}  id="outlined-basic" label="Search" variant="outlined" /></Box>
        <Box sx={{display:'flex', alignItems:'center', margin:"10px 0 0 10px "}}>
        <Button variant="outlined"><GridViewIcon/></Button>
           
           <Button  variant="outlined"> <ListIcon /></Button>
          
        </Box>
    </Box>
    <Box sx={{display:'flex' ,alignItems:'center', position:'relative' ,left:'20vw'}}>
    <Button   color='success'  variant="outlined"> <MoreHorizIcon /></Button>
    <Button color='success' variant="contained">Add product</Button>
    </Box>
   </Box>
  );
};

export default TopBar;
