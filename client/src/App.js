import React, { useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Hideloading, Showloading, ReloadData } from './redux/rootSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { SetportfolioData } from './redux/rootSlice';
import Loader from './components/Loader';
import Admin from './pages/Admin/Admin';
import AdminLogin from './pages/Admin/AdminLogin';

const App = () => {
  const { loading, portfolioData, reloadData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  // Wrap getportfolioData in useCallback
  const getportfolioData = useCallback(async () => {
    try {
      dispatch(Showloading(true));
      const response = await axios.get('/api/portfolio/get-port-folio-data');
      dispatch(SetportfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(Hideloading());
    } catch (error) {
      dispatch(Hideloading());
    }
  }, [dispatch]);

  // Use async function inside useEffect
  useEffect(() => {
    const fetchData = async () => {
      if (!portfolioData) {
        await getportfolioData();
      }
    };

    fetchData();

  }, [portfolioData, getportfolioData]);

  useEffect(() => {
    const fetchData = async () => {
      if (reloadData) {
        await getportfolioData();
      }
    };

    fetchData();

  }, [reloadData, getportfolioData]);

  return (
    <Router>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin-login' element={<AdminLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
