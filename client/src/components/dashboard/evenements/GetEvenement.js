import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { evenementdelet, evenementget } from '../../JS/evenementSlice/eventSlice';
import { Link } from 'react-router-dom';
import Carousel from 'react-grid-carousel';
import gofa from "../../../assets/images/gofa.jpg";
import '../../../scss/event.css'

const GetEvenement = () => {
  const dispatch = useDispatch()
  const [pingE, setPingE] = useState()
  useEffect(() => {
    dispatch(evenementget())
  }, [pingE])
  const evenements = useSelector((state) => state.evenement?.evenement);
  // const date=evenements?.startDate.split('')
  // console.log(date)
  return (
    <>
      <div className='listevent'>
       




        {evenements?.map((evenement, i) =>
          <div key={i} className="events">
            <div className="cardimg">
              <img src={gofa} alt="" />
            </div>
            <div className="discription">

              <h1>{evenement?.name}</h1>
              <h4>{evenement?.description}</h4>

            </div>

            <div class="card-meta--date">
              <h1>{evenement?.startDate}</h1>
              <h1>{evenement?.endDate}</h1>
            </div>

            <div className="card-meta--btn">
            <button className=" btnc-userlist" 
   onClick={()=>{dispatch(evenementdelet(evenement?._id))
    setPingE(!pingE)
  }}>جذف</button>
<button className=" btna-userlist"> <Link to="/dashboard/updateevents" state={evenements}> تعديل</Link></button>
            </div>
          </div>)}

      </div>
    </>
  )
}

export default GetEvenement