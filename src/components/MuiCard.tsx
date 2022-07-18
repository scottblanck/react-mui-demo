import React from 'react'
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from '@mui/material'
export const MuiCard = () => {
  return (
    <Box width='300px'>
      <Card>
        <CardMedia
          component='img'
          height='140'
          image='https://source.unsplash.com/random'
          // image='https://source.unsplash.com/cjmAxUOXAUk' // Can get a specific image
          alt='unsplash image'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            React
          </Typography>
          <Typography variant='body2' color='text.secondary' component='div'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            perferendis minima porro eum non animi quisquam nam in iure impedit,
            optio voluptate, id voluptas maxime ea eligendi fuga quidem cum.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  )
}
