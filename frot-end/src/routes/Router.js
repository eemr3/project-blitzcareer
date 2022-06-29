import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import NewUser from '../pages/NewUser';

const Router = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/create-user' element={<NewUser />} />
    </Routes>
  );
};

export default Router;
