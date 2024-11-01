import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    width: 300,
    margin: 20,
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  artist: {
    border: '2px solid #ff6f61',
  },
  customer: {
    border: '2px solid #009688',
  },
});

// Render Login cards
const LoginCards = () => {
  const classes = useStyles();

  const handleLogin = (role) => {
    alert(`Logging in as ${role}`);
    // Add login functionality here
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Card className={`${classes.card} ${classes.artist}`} onClick={() => handleLogin('Artist')}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Login as Artist
          </Typography>
          <Typography variant="body2" component="p">
            Login as an artist to showcase your talent and artworks.
          </Typography>
        </CardContent>
      </Card>

      <Card className={`${classes.card} ${classes.customer}`} onClick={() => handleLogin('Customer')}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Login as Customer
          </Typography>
          <Typography variant="body2" component="p">
            Login as a customer to explore and purchase artworks.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

// Render LoginCards component
ReactDOM.render(<LoginCards />, document.getElementById('root'));
