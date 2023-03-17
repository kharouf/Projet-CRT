import React, { useState } from 'react' 

import {useDispatch} from 'react-redux'
import { userRegister } from './JS/userSlice/userSlice'
import {Link} from 'react-router-dom'
import logino  from "../assets/images/login.png";
import { Icon } from '@iconify/react';

const Register = () => {
  const [register, setRegister] = useState({
    name:"",
    lastName:"",
    email:"",
    password:""
  })
const dispatch = useDispatch()
  

  return (
    <div className="wrapper">
      <div className="retour">
		<Link className='link-h' to="/"> <Icon icon="mdi:home-circle" color="red" width="50" height="50" /></Link>
	   </div>
    <form onSubmit={(e)=> e.preventDefault()} className="form-signin">
      
        <h2 className="form-signin-heading">الرجاء التسجيل</h2>
        <input onChange={(e)=> setRegister({...register,name:e.target.value}) } type="text" className="form-control"  placeholder="الإسم" required="" />
        <input onChange={(e)=> setRegister({...register,lastName:e.target.value}) } type="text" className="form-control"  placeholder="اسم العائلة" required="" />
        <input onChange={(e)=> setRegister({...register,email:e.target.value}) } type="email" className="form-control"  placeholder="البريد الإلكتروني" required="" />
        <input onChange={(e)=> setRegister({...register,password:e.target.value}) } type="password" className="form-control"  placeholder="كلمة العبور" required="" />

        <button className="btn-primary" onClick={()=> dispatch(userRegister(register))}>اشتراك</button>
        <Link to="/login" className='register'> تسجيل الدخول</Link>
    </form>
    <div className="image-login">
				<img src={logino} alt="login" />
			</div>
</div>
  )
}

export default Register