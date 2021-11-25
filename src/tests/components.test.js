import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/StoreConfig';
import CryptoReducer from '../redux/api/CryptoData';
// Components
import Header from '../components/header';
import Cryptos from '../components/Cryptopage/Cryptos';
import CryptoDetails from '../components/Cryptopage/CryptoDetails';

const objTest = {
  id: '42',
  symbol: 'li',
  name: 'Lorem Ipsum',
  price: 42,
  image: {
    large: 'lorem',
  },
  market_data: {
    current_price: {
      usd: '10',
    },
  },
  img: 'Ipsum',
};

const FakeData = [{
  id: '123',
  symbol: 'tst',
  name: 'test',
  price: 0,
  img: 'image',
}];

const action = {
  type: 'GET_CRYPTOS',
  payload: [],
};

describe('Components Matches', () => {
  test('Mission Components Matches', () => {
    const header = renderer
      .create(<BrowserRouter><Header /></BrowserRouter>)
      .toJSON();
    expect(header).toMatchSnapshot();
  });
  test('Cryptos Components Matches', () => {
    const cryptos = renderer
      .create(<Provider store={store}><Cryptos /></Provider>)
      .toJSON();
    expect(cryptos).toMatchSnapshot();
  });
  test('Check the initialState of the reducer', () => {
    expect(CryptoReducer(undefined, {})).toEqual([]);
  });
});

describe('Test CryptoDetails component', () => {
  test('Compare Crypto component with snapshot', () => {
    const tree = renderer
      .create(<CryptoDetails
        data={objTest}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Test redux', () => {
  test('Check if gets empty', () => {
    expect(CryptoReducer([], action)).toEqual([]);
  });
  test('Check if gets the mock fetched data', () => {
    expect(CryptoReducer(FakeData, action)).toEqual(FakeData);
  });
});
