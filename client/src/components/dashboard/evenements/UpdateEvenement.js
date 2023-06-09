import React, { useState } from 'react'
import { evenementupdate } from '../../JS/evenementSlice/eventSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const UpdateEvenement = () => {
  const dispatch = useDispatch();
  // const events = useSelector((state) => state.evenement?.evenement);
  const locationn=useLocation()
  const eventsupd = locationn.state
  console.log(eventsupd)

  const [upEvent, setupEvent] = useState({
    name:eventsupd.name,
    description:eventsupd.description,
    image:eventsupd.image,
    startDate:eventsupd.startDate,
    endtDate:eventsupd.endDate
  })
  return (
    <div>
       
    <div className="updateuser1" >
    <form onSubmit={(e)=> e.preventDefault()} className="form-signin11 form-signin">
        <h2 className="form-signin-heading">تعديل النشاط</h2>
        <div className="fff">
        <input onChange={(e)=> setupEvent({...upEvent,description:e.target.value}) } type="text" className="form-control"  placeholder=" وصف النشاط" required="" />
        <input onChange={(e)=> setupEvent({...upEvent,name:e.target.value}) } type="text" className="form-control"  placeholder="عنوان النشاط" required="" />
       
        </div>
        
        
        {/* <input onChange={(e)=> setImage(e.target.files[0])} type="file"  name="file" className="form-control"  placeholder="image" required="" /> */}
     <div className="fff">
     <input onChange={(e)=> setupEvent({...upEvent,startDate:e.target.value}) } type="date" className="form-control"  placeholder="start date" required="" />
     <label>تاريخ بداية النشاط</label>
     </div>
     <div className="fff">
           <input onChange={(e)=> setupEvent({...upEvent,endDate:e.target.value}) } type="date" className="form-control"  placeholder="end date" required="" />
           <label>تاريخ نهاية النشاط</label>
     </div>
     <input onChange={(e)=> {setupEvent({...upEvent,image:e.target.value}) }} type="file" 
        name="file"
       className="form-control"  placeholder="image" required="" />
        

        <button className="btn-primary" onClick={()=>{dispatch(evenementupdate({id: eventsupd._id, evenement:upEvent }))
         }
        
        }>تعديل</button>

{/* {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={url} style={{ width: '300px' }} />
      )} */}
     
        
    </form>
    
    </div>
    
    
</div>
  )
}

export default UpdateEvenement