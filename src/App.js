/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptos } from './redux/api/CryptoData';
import Header from './components/header';
import CryptoList from './components/Cryptopage/CryptoList';
import LinearIndeterminate from './components/Cryptopage/loading';
import CryptoDetails from './components/Cryptopage/CryptoDetails';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const cryptoList = useSelector((store) => store.CryptoReducer);
  const [data, setData] = useState('');
  const [filteredList, setFilter] = useState(cryptoList);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    if (cryptoList.length === 0) {
      dispatch(getCryptos());
      setloading(true);
    }
  }, [cryptoList.length, dispatch]);

  useEffect(() => {
    setFilter(() => cryptoList.filter(
      (e) => e.name.toLowerCase().includes(data) || e.name.includes(data),
    ));
  }, [data, cryptoList]);
  return (
    <div className="app">
      <BrowserRouter>
        <Header sendData={setData} />
        <Routes>
          {filteredList.length === 0 && data === '' ? (
            <Route exact path="/" element={<CryptoList list={cryptoList} />} />
          ) : (
            <Route
              exact
              path="/"
              element={<CryptoList list={filteredList} />}
            />
          )}
          {loading ? (
            cryptoList.map((e) => (
              <Route
                key={e.id}
                path={`/${e.id}`}
                element={<CryptoDetails data={e} />}
              />
            ))
          ) : (
            <Route path="/" element={<LinearIndeterminate />} />
          )}
          {}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
