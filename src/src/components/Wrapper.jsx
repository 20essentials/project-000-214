import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import LedHomeDecore from '../pages/LedHomeDecore';
import Accessories from '../pages/Accessories';
import LedPaintings from '../pages/LedPaintings';
import Posters from '../pages/Posters';

const Wrapper = () => {
  return (
    <main className='n2-main'>
    <Routes>
      {window.innerWidth >= 1000 ? (
        <Route path='/' element={<Home />}></Route>
      ) : (
        <Route path='/' element={<Navigate to='/led-paintings' replace />}></Route>
      )}
{/*       {window.innerWidth >= 1000 ? (
        <Route path='/index.html' element={<Home />}></Route>
      ) : (
        <Route path='/index.html' element={<Navigate to='/led-paintings' replace />}></Route>
      )}
      {window.innerWidth >= 1000 ? (
        <Route path='/project-000-214' element={<Home />}></Route>
      ) : (
        <Route path='/project-000-214' element={<Navigate to='/led-paintings' replace />}></Route>
      )} */}
      {window.innerWidth >= 1000 ? (
        <Route path='/project-000-214/' element={<Home />}></Route>
      ) : (
        <Route path='/project-000-214/' element={<Navigate to='/led-paintings' replace />}></Route>
      )}
      <Route path='/led-home-decore' element={<LedHomeDecore />}></Route>
      <Route path='/led-paintings' element={<LedPaintings />}></Route>
      <Route path='/posters' element={<Posters />}></Route>
      <Route path='/accessories' element={<Accessories />}></Route>
      <Route path='*' element={<LedPaintings />}></Route>
    </Routes>
  </main>
  );
};

export default Wrapper;
