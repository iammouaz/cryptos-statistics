import React from 'react';
import PropTypes from 'prop-types';

const CryptoDetails = ({ data }) => (
  <div>
    <div className="crypto-top">
      <img src={data.image.large} alt={data.id} />
      <p className="fs-1">
        {data.name}
        {` (${data.symbol})`}
        <br />
        Price: $
        {data.market_data.current_price.usd}
      </p>
    </div>
    <ul className="list-unstyled crypto-bottom fs-2">
      <li>
        Rank:&nbsp;
        {data.market_data.market_cap_rank}
      </li>
      <li>
        Price change in 24h:&nbsp;$
        {(Math.round(data.market_data.price_change_24h * 100) / 100).toFixed(2)}
      </li>
    </ul>
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
