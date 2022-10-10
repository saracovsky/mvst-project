import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type CardProps = {
    repoName : string
    repoDesc : string
    repoLang : string
  }

export default function BasicCard(props : CardProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.repoName}
        </Typography>
        <Typography  sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.repoDesc}
        </Typography>
        <Typography variant="body2">
          {props.repoLang}
        </Typography>
      </CardContent>
    </Card>
  );
}
