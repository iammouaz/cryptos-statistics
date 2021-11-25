import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Crypto = (data) => {
  const {
    id, name, price, img,
  } = data;
  return (
    <Card
      variant="outlined"
      key={name}
      sx={{ minWidth: 275 }}
      className="scard flex"
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" x={{ mb: 1.5 }} color="text.secondary">
          Price: $
          {price}
        </Typography>
      </CardContent>
      <CardActions style={{ flexDirection: 'column' }}>
        <img src={img} className="icons" alt="icon" />
        <Button style={{ width: '100%' }} variant="contained" href={`/${id}`}>See Details</Button>
      </CardActions>
    </Card>
  );
};

export default Crypto;
