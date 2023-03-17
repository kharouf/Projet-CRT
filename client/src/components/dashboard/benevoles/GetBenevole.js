import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { benevoledelet, benevoleget } from '../../JS/benevoleSlice/benevoleSlice'
import { Link } from 'react-router-dom'

const GetBenevole = () => {
  const dispatch = useDispatch()
  const [pingB, setPingB] = useState()
  const benevoles = useSelector((state) => state.benevole?.benevole);
  const users = useSelector((state) => state.user?.usera);


  useEffect(() => {
    dispatch(benevoleget())
  }, [pingB])
  return (
    <div className='listuser'>
      <table className="table">
        <tr>
          <td className="td">جذف</td>
          <td className="td">تعديل</td>
          <td className="td">الاسم</td>
          <td className="td">القب</td>
          <td className="td"> البريد الإلكتروني  </td>
          <td className="td"> مسؤل  </td>
          <td className="td"> متطوع  </td>
          <td className="td">الصورة</td>
        </tr>
      </table>




      <div className="user" >
        <table className="table" >
          {benevoles?.map((benevole, i) =>
            <tr key={i}>
              <td className="td"><button className=" btnc-userlist"
                onClick={() => {
                  dispatch(benevoledelet(benevole?._id)
                  )
                  setPingB(!pingB)
                }}
              >جذف</button></td>
              <td className="td "><Link to="/dashboard/updatebenevole" state={benevoles}><button  className=" btna-userlist">تعديل</button></Link></td>
              <td className="td">{benevole?.nom}</td>
              <td className="td">{benevole?.prenom}</td>
              <td className="td">{benevole?.email} </td>
              {/* <td className="td"> {user?.password}</td> */}

              <td className="td"><img src="" alt="profile" /></td>
            </tr>
          )}
        </table>
      </div>

      
</div>
    
  )
}

export default GetBenevole