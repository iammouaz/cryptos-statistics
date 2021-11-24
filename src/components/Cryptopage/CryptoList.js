import React from 'react';
import Row from 'react-bootstrap/Row';
import Crypto from './Cryptos';

const CryptoList = (data) => {
  const { list } = data;
  return (
    <Row
      style={{
        display: 'flex', flexWrap: 'wrap', gap: '86px', paddingTop: '118px', marginLeft: '4%',
      }}
      xs={2}
      lg={4}
      className="g-2"
    >
      {list.map((e) => (
        <Crypto
          key={e.id}
          id={e.id}
          symbol={e.symbol}
          name={e.name}
          price={e.market_data.current_price.usd}
          img={e.image.large}
        />
      ))}
    </Row>
  );
};

export default CryptoList;
