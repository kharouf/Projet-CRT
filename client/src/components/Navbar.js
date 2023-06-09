import React, { useEffect, useRef, useState } from 'react'


import { Link, Route, Redirect, Routes, Navigate, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import '../scss/navbar.css'
import '../scss/footer.css'
import { FaBars, FaHamburger, FaRegUserCircle } from "react-icons/fa";
import Home from './Home';
import About from './About'
import { links } from './data'
import Login from './Login'
import { logout, userCurrent } from './JS/userSlice/userSlice'
// import { benevoleget } from './JS/benevoleSlice/benevoleSlice'

import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '@iconify/react'

// import { Link } from 'react-scroll'

const Navbar = ({ping ,setPing}) => {
  // is auth
  const user = useSelector(state => state.user.user)
  const benevole = useSelector((state) => state.benevole?.benevole);
  
  const isAuth = localStorage.getItem('token');
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent())
    }


  }, [])

  
  // sow navabr after media query change

  const [isMobile, setIsMobile] = useState(false)

  const handleIsMobile = () => setIsMobile(!isMobile)
  // //////////////////////////////////////////

  //  change font and color icon

  // /////////////////////////////////////////////

  // open and close login
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(!open);
   
    
  };
  // //////////////////////////////////

  // chnage bacground navbar
  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => {
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);

  }
  window.addEventListener('scroll', changeNavbar)

  // ///////////////////////////////////////////////////////////

  return (

    <>



      <div className={navbar ? 'Navbaractive Navbar' : 'Navbar'} >
        <div className='Navbar-logo'>
          <Link to="/"><img id='logocrt' src={logo}  /></Link>
        </div>
        <div className={isMobile ? "Navbar-links-active" : "Navbar-links"}>
          <a className='link' href="/#" >الرئيسية</a>
          <a className='link' href="/#about" >من نحن</a>
          <a className='link' href="/#evenement">الأخبار و النشاطات</a>
          <a className='link' href="/#comite">أعضاء الجمعية</a>
          <a className='link' href="/#principes">مبادئنا</a>
          <a className='link' href="/#programs" >برامجنا</a>
          <a className='link' href="/#contact">إتصل بنا</a>
        </div>
        {/* if benevole add this */}
        {isAuth && user?.isAdmin === true ? (
          <>

            <div className='Navbar-links-admin'>
              <Link className='link' to="/dashboard"> لوحة الإعدادات
                <Icon icon="bi:boxes" width="30" height="30" />
              </Link>
              
            </div>


          </>

        ) : (null)
        }

        <>
          {/* if benevole add this */}
          {isAuth && user?.isBenevole === true ? (
            <>
              <div className="Navbar-links-admin">

                <Link className='link' to="/profile"> {benevole?.nom}  إستمارة التطوع 

                </Link>


              </div>
              

            </>


          ) : (
            benevole?.isBenevole === true ?(
              <>
              <div className="Navbar-links-admin">

                <Link className='link' to="/profile">    تعديل البيانات

                </Link>


              </div>
              

            </>
            ): null

          )}
        </>
        {isAuth ?
          (<div className='Navbar-login' onClick={() => handleOpen()}>


            <h6> {user?.name}
              


              <Icon icon="mdi:user-circle-outline" width="50" height="50" color='green' />



            </h6>
            {open ?
              <div className="dropdown">


                <Link to='/' className='link-logout' >{isAuth ? <button onClick={() => {
                  dispatch(logout());
                  Navigate("/")
                }}>
                  تسجيل الخروج
                </button> : null}
                  <Icon icon="bi:box-arrow-right" width="30" height="30"  />
                </Link>

              </div>
              : null}
          </div>) : (
            <div className='Navbar-login' onClick={() => handleOpen()}>


              <h6>تسجيل الدخول
                <Icon icon="mdi:user-circle-outline" width="50" height="50" />
              </h6>
              {open ?
                <div className="dropdown">

                  <Link to='/login' className='link-logout' >تسجيل الدخول
                    <Icon icon="bi:box-arrow-in-right" width="30" height="30" />
                  </Link >
                  <Link to='/register' className='link-logout'>تسجيل
                    <Icon icon="mdi:account-plus" width="30" height="30" />
                  </Link >


                </div>
                : null}
            </div>
          )
        }
      </div>

    </>
  )
}

export default Navbar