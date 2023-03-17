import React, { useState } from 'react'
import '../style/user.css'

import { useDispatch } from 'react-redux'
import { logout, useradduser, useradd } from '../../JS/userSlice/userSlice'
import { Link, Navigate } from 'react-router-dom'
import logino from "../../../assets/images/login.png";
import { Icon } from '@iconify/react';
import loginimg from "../../../assets/images/loginimg.png";


const AddUser = ({ setPing, ping }) => {
  const [adduser, setadduser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    isAdmin: false,
    isBenevole: false,

  })
  const dispatch = useDispatch()


  return (
    <div className="updateuser1">

      <form onSubmit={(e) => e.preventDefault()} className="form-signin   adduser">
        <div className="loginimg">
          <img src={loginimg} alt="" />
        </div>
        <div className="input">
          <input value={adduser.name} onChange={(e) => setadduser({ ...adduser, name: e.target.value })} type="text" className="form-control" placeholder="الإسم" required="" />
          <input value={adduser.lastName}onChange={(e) => setadduser({ ...adduser, lastName: e.target.value })} type="text" className="form-control" placeholder="اسم العائلة" required="" />
        </div>
        <div className="input">
          <input value={adduser.email} onChange={(e) => setadduser({ ...adduser, email: e.target.value })} type="email" className="form-control" placeholder="البريد الإلكتروني" required="" />
          <input value={adduser.password} onChange={(e) => setadduser({ ...adduser, password: e.target.value })} type="password" className="form-control" placeholder="كلمة العبور" required="" />
        </div>

        <div className="input">

          <label >مسؤل</label>
         
                  <label className="rad-label">
                    <input type="radio" value={true}  className="rad-input" name="admin" onChange={(e) => setadduser({ ...adduser, isAdmin: (e.target.value === "true") })} />
                    <div className="rad-design"></div>
                    <div className="rad-text">نعم</div>
                  </label>

                  <label className="rad-label">
                    <input type="radio" value={false}  className="rad-input" name="admin" onChange={(e) => setadduser({ ...adduser, isAdmin: (e.target.value === "true") })} />
                    <div className="rad-design"></div>
                    <div className="rad-text">لا</div>
                  </label>
        
        </div>
        <div className="input">

        <label >متطوع</label>
                  <label className="rad-label">
                    <input type="radio" value={true} className="rad-input" name="benevole" onChange={(e) => setadduser({ ...adduser, isBenevole: (e.target.value === "true") })} />
                    <div className="rad-design"></div>
                    <div className="rad-text">نعم</div>
                  </label>

                  <label className="rad-label">
                    <input type="radio" value={false}  className="rad-input" name="benevole" onChange={(e) => setadduser({ ...adduser, isBenevole: (e.target.value === "true") })} />
                    <div className="rad-design"></div>
                    <div className="rad-text">لا</div>
                  </label>
        </div>

        <button className="btn-primary" onClick={() =>

          dispatch(useradd(adduser),
            setPing(!ping)

          )



        }>أظف</button>

      </form>

    </div>
  )
}

export default AddUser