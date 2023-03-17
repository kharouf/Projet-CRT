import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userdelet,userget } from "../../JS/userSlice/userSlice";
import { Link } from 'react-router-dom';

const UserList = ({setPing ,ping}) => {
  const dispatch = useDispatch()
  const [listuser, setlistuser] = useState([])
  const [ping1, setPing1] = useState()

  

useEffect(() => {
  dispatch(userget())
}, [ping1])





const users = useSelector((state) => state.user?.usera);





  return (
    <>
    {/* <button ><Link to="/dashboard/adduser"> wala</Link></button> */}
    <div className='listuser'>
<table className="table">
<tr>
  <td className="td">جذف</td>
  <td className="td">تعديل</td>
  {/* <td className="td">الصورة</td> */}
  <td className="td"> متطوع  </td>
  <td className="td"> مسؤل  </td>
  <td className="td"> البريد الإلكتروني  </td>
  <td className="td">القب</td>
  <td className="td">الاسم</td>
  <td className="td">رقم الملف</td>

</tr>
</table>




  <div className="user" >
  <table className="table" >
  {users?.map((user,i) => 
   <tr key={i}>
   <td className="td"><button className=" btnc-userlist" 
   onClick={()=>{dispatch(userdelet(user?._id))
    setPing1(!ping1)
  }}>جذف</button></td>
   <td className="td "><Link to="/dashboard/updateuser/" state={user}><button className=" btna-userlist">تعديل</button></Link></td>
   {/* <td className="td"><img src="" alt="profile" /></td> */}
   
   <td className="td"> {user?.isBenevole? "نعم" : "لا"}</td>
   <td className="td"> {user?.isAdmin? "نعم" : "لا"}</td>
   <td className="td">{user?.email} </td>
   <td className="td">{user?.lastName}</td>

   <td className="td">{user?.name}</td>
   <td className="td">{user?.num_dossier}</td>
  </tr>
  )}
</table>
</div>


    </div>

{/* <div className="list1">
{users?.map((user, i) => 
<div key={i} className="container">
  <div class="card_box">
    <div className="container_image">
      <img src={user?.image} alt="logo" width={"200px"} height={"200px"} />
    </div>

    <div className="container_title">
      <h1> {user?.name} {user?.lastName} </h1>
    </div>
    <div className="container_poste">
      <h3>{user?.email} </h3>
    </div>
    <div className="container_poste1">
      <h3>متطوع :{user?.isBenevole? "نعم" : "لا"} </h3>
      <h3>مسؤل :{user?.isAdmin? "نعم" : "لا"} </h3>
    </div>
    <div className="card-meta--btn">
  <button className=" btnc-userlist" 
   onClick={()=>{dispatch(userdelet(user?._id))
    setPing1(!ping1)
  }}>جذف</button>

<button className=" btna-userlist"><Link to="/dashboard/updateuser/:id">تعديل</Link></button>
  </div>
  </div>
  
  
</div>
)}
</div> */}
</>
  )
}

export default UserList