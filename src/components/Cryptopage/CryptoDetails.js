import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CryptoDetails = ({ data }) => (
  <div>
    <div className="crypto-top">
      <img src={data.image.large} alt={data.id} />
      <Typography variant="h2" gutterBottom component="div">
        {data.name}
        {` (${data.symbol})`}
        <br />
        Price: $
        {data.market_data.current_price.usd}
      </Typography>
    </div>
    <Box className="list-unstyled crypto-bottom fs-2">
      <Typography variant="h3" gutterBottom component="div">

        Rank:&nbsp;
        {data.market_data.market_cap_rank}
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        Price change in 24h:&nbsp;$
        {(Math.round(data.market_data.price_change_24h * 100) / 100).toFixed(2)}
      </Typography>
    </Box>
  </div>
);

CryptoDetails.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    symbol: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.shape({
      large: PropTypes.string,
    }).isRequired,
    market_data: PropTypes.shape({
      current_price: PropTypes.shape({
        usd: PropTypes.number,
      }).isRequired,
      price_change_24h: PropTypes.number,
      market_cap_rank: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default CryptoDetails;
