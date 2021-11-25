import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/StoreConfig';
import CryptoReducer from '../redux/api/CryptoData';
// Components
import Header from '../components/header';
import Cryptos from '../components/Cryptopage/Cryptos';

describe('Components Matches', () => {
  it('Mission Components Matches', () => {
    const header = renderer
      .create(<BrowserRouter><Header /></BrowserRouter>)
      .toJSON();
    expect(header).toMatchSnapshot();
  });
  it('Cryptos Components Matches', () => {
    const cryptos = renderer
      .create(<Provider store={store}><Cryptos /></Provider>)
      .toJSON();
    expect(cryptos).toMatchSnapshot();
  });
  test('Check the initialState of the reducer', () => {
    expect(CryptoReducer(undefined, {})).toEqual([]);
  });
});
