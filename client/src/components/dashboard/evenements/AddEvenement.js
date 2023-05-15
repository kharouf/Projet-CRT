
import React, { useState } from 'react' 


import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { addEvenement } from '../../JS/evenementSlice/eventSlice'
import axios from 'axios'

const AddEvenement = () => {
  const [image, setImage ] = useState("");
  const [ url, setUrl ] = useState("");

  const uploadImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "walakh")
    data.append("cloud_name","dwfo7j8ic")
 

      	
     
         fetch(" https://api.cloudinary.com/v1_1/dwfo7j8ic/image/upload",{
          method:"post",
          body: data
          })
          .then(resp => resp.json())
          .then(data => {
            console.log(data)
          setUrl(data.url)
          })
          .catch(err => console.log(err))
          }


    const [AddEvent, setAddEvent] = useState({
        name:"",
        description:"",
        image:"",
        startDate:"",
        endDate:"",
      })
    const dispatch = useDispatch()
  return (
    <div>
       
    <div className="updateuser1" >
    <form onSubmit={(e)=> e.preventDefault()} className="form-signin11 form-signin">
        <h2 className="form-signin-heading"> أضف نشاط</h2>
        <div className="fff">
        <input onChange={(e)=> setAddEvent({...AddEvent,description:e.target.value}) } type="text" className="form-control"  placeholder=" وصف النشاط"  required="" />

           <input onChange={(e)=> setAddEvent({...AddEvent,name:e.target.value}) } type="text" className="form-control"  placeholder="عنوان النشاط" required="" />
        </div>
       
        
        {/* <input onChange={(e)=> setImage(e.target.files[0])} type="file"  name="file" className="form-control"  placeholder="image" required="" /> */}
        <div className="fff">
          
          <input onChange={(e)=> setAddEvent({...AddEvent,startDate:e.target.value}) } type="date" className="form-control"  placeholder=" تاريخ البداية" required="" />
          <label>تاريخ بداية النشاط</label>
        </div>
        <div className="fff">
           <input onChange={(e)=> setAddEvent({...AddEvent,endDate:e.target.value}) } type="date" className="form-control"  placeholder="تاريخ النهاية " required="" />
           <label>تاريخ نهاية النشاط</label>
        </div>
       

        <input onChange={(e)=> {setAddEvent({...AddEvent,image:setImage(e.target.files[0])}) }} type="file" 
        name="file"
       className="form-control"  placeholder="image" required="" />
        <button className="btn-primary" onClick={()=> {dispatch(addEvenement(AddEvent)) 
        uploadImage()} 

        }>أضف</button>

{/* {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={url} style={{ width: '300px' }} />
      )} */}
    
{/* <img src={url}/> */}
        
    </form>
    
    </div>
    
    
</div>





    
  )
}

export default AddEvenement