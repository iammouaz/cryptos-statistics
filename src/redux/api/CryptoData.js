const GET_CRYPTOS = 'cryptos/GET_CRYPTOS';
const API_URL = 'https://api.coingecko.com/api/v3/coins/';

const initialState = [];

export const ids = ['bitcoin', 'litecoin', 'chainlink', 'algorand', 'tether', 'solana', 'ethereum', 'binancecoin', 'ripple', 'polkadot', 'shiba-inu', 'dogecoin', 'cardano', 'klay-token', 'wemix-token', 'bitcoin-cash-abc-2', 'amp-token', 'maker', 'bitcoin-cash-sv', 'pancakeswap-token'];

const getCryptoById = async (id = 'bitcoin') => {
  const response = await fetch(`${API_URL}${id}`);
  return response.json();
};

export const getCryptos = () => async (dispatch) => {
  const cryptos = await Promise.all(ids.map(getCryptoById));
  dispatch({
    type: GET_CRYPTOS,
    payload: cryptos,
  });
};

const CryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CRYPTOS:
      return action.payload;
    default:
      return state;
  }
};

export default CryptoReducer;
