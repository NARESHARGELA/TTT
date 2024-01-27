import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Hideloading, Showloading, ReloadData } from './redux/rootSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { SetportfolioData } from './redux/rootSlice';
import Loader from './components/Loader'
import Admin from './pages/Admin/Admin';
import AdminLogin from './pages/Admin/AdminLogin';

const App = () => {
  const {loading,portfolioData,reloadData} = useSelector((state)=> state.root)
  const dispatch = useDispatch();

  const getportfolioData = async () => {
    try {
      dispatch(Showloading(true))
      const response = await axios.get('/api/portfolio/get-port-folio-data');
      dispatch(SetportfolioData(response.data));
      dispatch(ReloadData(false))
      dispatch(Hideloading())
    } catch (error) {
      dispatch(Hideloading())
    }
  };

  useEffect(() => {
    if(!portfolioData){
      getportfolioData();
    }
  }, [portfolioData]);

  useEffect(()=>{
    if(reloadData){
      getportfolioData();
    }
  },[reloadData])
  return (
    <Router>
      {loading ? <Loader/> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/admin-login' element={<AdminLogin/>} />
      </Routes>
    </Router>
  );
};

export default App;
