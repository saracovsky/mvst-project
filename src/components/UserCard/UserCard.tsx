import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type UserProps = {
  img : string | undefined
  name : string | undefined
}

export default function UserCard(props: UserProps) {
  return (
    <Card sx={{ maxWidth: 350, maxHeight: 500}}>
      <CardMedia
        component="img"
        height="350"
        image= {props.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
