import { Card, CardMedia } from '@mui/material'
import React from 'react'

export default function ImgCard() {
  return (
    <Card>
       <CardMedia   component="img"
        height="90"
        image={`https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        alt={'image'}
        sx={{
          maxWidth: 100,
          borderRadius: "5px",
          margin: "5px",
          position: "relative",
          left: "-80px",
        }}/>
        
      
    </Card>
  )
}
