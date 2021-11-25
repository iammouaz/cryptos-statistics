import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function HomeIcon() {
  return (
    <SvgIcon>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Header = (data) => {
  function titleCase(string) {
    return (
      string.substring(1).charAt(0).toUpperCase()
      + string.slice(2).toLowerCase()
    );
  }

  const { sendData } = data;
  const location = useLocation().pathname;

  return (
    <AppBar className="flex row" style={{ justifyContent: 'space-around' }}>
      <div className="flex home">
        <div className="flex home">
          <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
            {location === '/' ? (
              <HomeIcon className="icon" color="primary" />
            ) : (
              <HomeIcon fontSize="large" color="primary" />
            )}
          </NavLink>
          <Typography variant="h2" gutterBottom component="div">
            {location === '/' ? 'Home' : titleCase(location)}
          </Typography>
        </div>
      </div>
      {location === '/' ? (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          onChange={(e) => {
            sendData(e.target.value);
          }}
          noValidate
          autoComplete="off"
          placeholder="Search"
          id="search"
        >
          <TextField id="standard-basic" label="Search" variant="standard" />
        </Box>
      ) : (
        <Typography variant="h2" gutterBottom component="div">
          Crypto Details
        </Typography>
      )}
    </AppBar>
  );
};

export default Header;
