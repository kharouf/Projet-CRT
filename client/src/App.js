import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
// import * as React from 'react';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './scss/App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Principes from './components/Principes';
import Programs from './components/Programs';
import Comite from './components/Comite';
import Evenements from './components/Evenements';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/dashboard/Admin';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, userCurrent } from './components/JS/userSlice/userSlice';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoutes/PrivateRoutes';
import AdminRoute from './components/PrivateRoutes/AdminRoute';
import AddEvent from './components/dashboard/AddEvent';
import AddEvenement from './components/dashboard/evenements/AddEvenement';
import NavbarDash from './components/dashboard/NavbarDash';
import InfoBenevole from './components/InfoBenevole';
import DeletUser from './components/dashboard/users/DeletUser';
import AddUser from './components/dashboard/users/AddUser';
import UpdateUser from './components/dashboard/users/UpdateUser';
import UserList from './components/dashboard/users/UserList';
import Upbenevole from './components/dashboard/benevoles/Upbenevole';
import Erreur404 from './components/Erreur404';
import GetBenevole from './components/dashboard/benevoles/GetBenevole';
import GetEvenement from './components/dashboard/evenements/GetEvenement';
import Updatebenevole from './components/dashboard/benevoles/Updatebenevole';
import UpdateEvenement from './components/dashboard/evenements/UpdateEvenement';



function App() {
  const location = useLocation()

  const user = useSelector(state => state.user.user)
  const isAuth = localStorage.getItem('token');
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [ping, setPing] = useState()

  // useEffect(() => {
  //   if (isAuth) {
  //     dispatch(userCurrent())
  //   }


  // }, [ping])


  return (
    <>
      {location.pathname.includes('dashboa') ?null: <Navbar ping={ping} setPing={setPing} />}

      <Routes>
        <Route exact path="/login" element={<Login ping={ping} setPing={setPing} />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/*" element={<Erreur404/>} />
       
        
        <Route path="/dashboard" element={<Admin ping={ping} setPing={setPing}/>}  >
          <Route exact path="/dashboard/Addevent" element={<AddEvenement />} />
          <Route exact path="/dashboard/profil" element={<Profile />} />
          <Route exact path="/dashboard/adduser" element={<AddUser ping={ping} setPing={setPing}/>} />
          <Route exact path="/dashboard/deletuser" element={<DeletUser/>} />
          <Route exact path="/dashboard/edituser" element={<UpdateUser/>} />
          <Route exact path="/dashboard/listuser" element={<UserList />} />
          <Route path='/dashboard/updateuser/' element={<UpdateUser/>} />
          <Route path='/dashboard/listbenevole' element={<GetBenevole/>} />
          <Route path='/dashboard/listevents' element={<GetEvenement/>} />
          <Route path='/dashboard/updatebenevole' element={<Updatebenevole/>} />
          <Route path='/dashboard/updateevents' element={<UpdateEvenement/>} />

          
          {/* benevole */}
          <Route exact path="/dashboard/updatebenevole" element={<Upbenevole/>} />
          
          
        </Route>
      </Routes>


    </>


  );
}

export default App;



