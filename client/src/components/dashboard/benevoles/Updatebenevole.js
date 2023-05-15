import React, { useState } from 'react'

import { BrowserRouter, Link, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';



import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '@iconify/react';
import { addBenevole,updatebenevole } from '../../JS/benevoleSlice/benevoleSlice'
import logo from "../../../assets/images/logo.png";
import { logout } from '../../JS/userSlice/userSlice';
import "../../../scss/profile.css"

const Updatebenevole = () => {
  // fuction upload

  function previewFile() {
    var preview = document.getElementsByClassName('imgup')[0];
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function () {
      preview.src = reader.result;
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }
  // const benevole = useSelector(state => state.benevoleupdate.benevole)

  // cancel button
  const [inputValue, setInputValue] = useState("");

  const handleCancel = () => {
    setInputValue("");
  };
  // 
  const isAuth = localStorage.getItem('token');
  const dispatch = useDispatch()
  // const benevole = useSelector(state => state.benevole.benevole)
  const user = useSelector(state => state.user?.user)
  const location=useLocation()
  const benevoleupdate = location.state
  console.log(benevoleupdate)
  const [update, setupdate] = useState({
    // num_dossier:benevole.num_dossier,
    nom: benevoleupdate.nom,
    prenom: benevoleupdate.prenom,
    sexe: benevoleupdate.sexe,
    nom_pere:benevoleupdate.nom_pere,
    nom_mere: benevoleupdate.nom_mere,
    prenom_mere: benevoleupdate.prenom_mere,
    num_tele_parents: benevoleupdate.num_tele_parents,
    date_n: benevoleupdate.date_n,
    lieu_n: benevoleupdate.lieu_n,
    adresse: benevoleupdate.adresse,
    cin: benevoleupdate.cin,
    Annee_volontariat: benevoleupdate.Annee_volontariat,
    profession: benevoleupdate.profession,
    num_tele: benevoleupdate.num_tele,
    email: benevoleupdate.email,
    niveau: benevoleupdate.niveau,
    diplome: benevoleupdate.diplome,
    certificat_crt: benevoleupdate.certificat_crt,
    nom_etablisement: benevoleupdate.nom_etablisement,
    loisir: benevoleupdate.loisir,
    secouriste: benevoleupdate.secouriste,
    image: benevoleupdate.image,
    commentaire: benevoleupdate.commentaire,
    nb_participation: benevoleupdate.nb_participation,
    isBenevole:benevoleupdate.isBenevole

  })

  // open and close login
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    setTimeout(() => {
      setOpen();
    }, 2000);

  };


  return (
    <div className='wrapper1 profile'>
      <div className='Navbaractive Navbar-Admin'>
        <div className='Navbar-logo'>
          <Link to="/"><img id='logocrt' src={logo} alt='logo' /></Link>
        </div>
        <div className="Navbar-links-admin">

          {/* <a className='link' href="/#programs" >برامجنا</a>
          <a className='link' href="/#contact">إتصل بنا</a> */}
        </div>
        {isAuth ?
          (<div className='Navbar-login-Admin' onClick={() => handleOpen()}>


            <h6> {benevoleupdate?.name}




              <Icon icon="mdi:user-circle-outline" width="50" height="50" color='green' />



            </h6>
            {open ?
              <div className="dropdown-Admin">


                <Link to='/' className='link-logout' >{isAuth ? <button onClick={() => {
                  dispatch(logout());
                  Navigate("/")
                }}>
                  تسجيل الخروج
                </button> : null}
                  <Icon icon="bi:box-arrow-right" width="30" height="30" />
                </Link>

              </div>
              : null}
          </div>) : null}
      </div>

      <div  className='Container-Profile'>
        {/* بيانات خاصة */}

        <div className="form-profile">
          
          <div className="title-profile">
            بيانات خاصة
          </div>
          <div className="image-profile image-profile1">
            
            <div className="avatar-upload" >
              <div className="avatar-edit" >
                <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" onChange={() => previewFile()} />
                <label for="imageUpload" ><Icon className='editbtn' icon="iconoir:edit-pencil" width="30" height="30" /></label>
              </div>
              <div className="avatar-preview">
                <img className='imgup' id="imagePreview" width={"200px"} height={"200px"} src={logo} />

              </div>

            </div>
            
            <div className="name-profile">

              <h1>{benevoleupdate?.nom}  </h1> <h1>{benevoleupdate?.prenom}</h1>

            </div>
            <h3 className='numdossier'> {user?.num_dossier}   :رقم الملف</h3>


          </div>

          <div className="input-profile">
            <div className="input">
              {/* <label>الإسم </label> */}
              <input  onChange={(e) => setupdate({ ...update, nom: e.target.value })}  type="text" className="form-control n" placeholder={benevoleupdate?.name} />
              <input  onChange={(e) => setupdate({ ...update, prenom: e.target.value })} value={benevoleupdate?.lastName} type="text" className="form-control n" placeholder={benevoleupdate?.lastName} />

            </div>

            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setupdate({ ...update, email: e.target.value })} value={benevoleupdate?.email} type="email" className="form-control n" placeholder={benevoleupdate?.email} />
              <input onChange={(e) => setupdate({ ...update, num_tele: e.target.value })} type="text" className="form-control n " placeholder="رقم الهاتف" />
            </div>

            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setupdate({ ...update, date_n: e.target.value })} type="date" className="form-control n" placeholder=" تاريخ الولادة" />
              <input onChange={(e) => setupdate({ ...update, lieu_n: e.target.value })} type="text" className="form-control n" placeholder=" مكان الولادة" />
            </div>
            <div className="input">
              <label>الجنس</label>
              <label>
                <input type="radio" value="Homme" name="radio" checked onChange={(e) => setupdate({ ...update, sexe: e.target.value })} />
                <span>ذكر</span>
              </label>
              <label>
                <input type="radio" value="Femme" name="radio" onChange={(e) => setupdate({ ...update, sexe: e.target.value })}/>
                <span>أنثى</span>
              </label>



              <input onChange={(e) => setupdate({ ...update, cin: e.target.value })} type="numero" className="form-control n cin" placeholder=" ر.ب.ت.و " />

            </div>
          </div>
        </div>
        {/* بيانات خاصة */}
        {/* بيانات عامة */}
        <div className="form-profile2 form-profile">
          <div className="title-profile">
            بيانات عامة
          </div>
          <div className="input-profile input-profile2" >
            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setupdate({ ...update, nom_pere: e.target.value })} type="text" className="form-control n" placeholder="أسم الأب" />
              <input onChange={(e) => setupdate({ ...update, nom_mere: e.target.value })} type="text" className="form-control n" placeholder="أسم الأم" />
              <input onChange={(e) => setupdate({ ...update, prenom_mere: e.target.value })} type="text" className="form-control n" placeholder="لقب الأم" />
            </div>

            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setupdate({ ...update, num_tele_parents: e.target.value })} type="text" className="form-control n" placeholder="رقم هاتف الولي" />
              <input onChange={(e) => setupdate({ ...update, adresse: e.target.value })} type="text" className="form-control n add" placeholder="  العنوان البريدي" />
            </div>

            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setupdate({ ...update, profession: e.target.value })} type="text" className="form-control n etab" placeholder="  الوظيفة" />
              <input onChange={(e) => setupdate({ ...update, niveau: e.target.value })} type="text" className="form-control n etab" placeholder="  المستوى الدراسي" />

            </div>
            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setupdate({ ...update, diplome: e.target.value })} type="text" className="form-control n" placeholder="  الشهادة" />
              <input onChange={(e) => setupdate({ ...update, nom_etablisement: e.target.value })} type="text" className="form-control n " placeholder=" المؤسسة " />
              <input onChange={(e) => setupdate({ ...update, certificat_crt: e.target.value })} type="text" className="form-control n " placeholder="  الشهائد  " />

            </div>

            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setupdate({ ...update, loisir: e.target.value })} type="text" className="form-control n etab" placeholder=" الهواية المفضلة " />
              <input onChange={(e) => setupdate({ ...update, Annee_volontariat: e.target.value })} type="text" className="form-control n etab" placeholder="  سنة التطوع  " />

            </div>
            {user?.isAdmin === true ? (
              <><div className="input">
                {/* <label>الإسم </label> */}
                <input onChange={(e) => setupdate({ ...update, commentaire: e.target.value })} type="text" className="form-control n etab" placeholder="  ملاحظات " />
                <input onChange={(e) => setupdate({ ...update, nb_participation: e.target.value })} type="text" className="form-control n etab" placeholder="  عدد المشاركة   " />

              </div>
                <div className="input">

                  <label >متطوع</label>
                  <label>
                    <input type="radio" value="true" name="radio2" checked onChange={(e) => setupdate({ ...update, isBenevole: e.target.value })}/>
                    <span>نعم</span>
                  </label>
                  <label>
                    <input type="radio" value="false" name="radio2"onChange={(e) => setupdate({ ...update, isBenevole: e.target.value })} />
                    <span>لا</span>
                  </label>
                </div>
              </>) : null
            }
            <div className="input">

              <label >مسعف</label>
              <label>
                <input type="radio" value="true" name="radio1" checked onChange={(e) => setupdate({ ...update, secouriste: e.target.value })}/>
                <span>نعم</span>
              </label>
              <label>
                <input type="radio" value="false" name="radio1" onChange={(e) => setupdate({ ...update, secouriste: e.target.value })}/>
                <span>لا</span>
              </label>
            </div>

          </div>

          
          <div className="button">
              <button className='btn-update'
                onClick={() => dispatch(updatebenevole(update))}>
                تعديل
              </button>
              <button onClick={() => handleCancel()} className='btn-annuler'>
                إلغاء
              </button>

            </div>
          
        </div>
      </div>
      {/* بيانات عامة */}

    </div>
  )
}

export default Updatebenevole