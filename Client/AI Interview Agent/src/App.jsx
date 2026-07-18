import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import axios from 'axios';
import { setUserData } from './redux/userSlice';
import { useDispatch } from 'react-redux';
import InterviewPage from './pages/InterviewPage';
import InterviewReport from './pages/InterviewReport';
import Pricing from './pages/Pricing';
import InterviewHistory from './pages/InterviewHistory';

export const ServerUrl = import.meta.env.VITE_SERVER_URL;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/user/current-user", {withCredentials: true});
        console.log(result.data);
        dispatch(setUserData(result.data));
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, [dispatch])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/interview' element={<InterviewPage />} />
      <Route path='/report/:id' element={<InterviewReport />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/history' element={<InterviewHistory />} />
    </Routes>
  )
}

export default App;
