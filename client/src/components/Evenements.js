import React, { useEffect, useState } from 'react'

import '../scss/event.css'

import Carousel from 'react-grid-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import gofa from '../assets/images/gofa.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';


// images
import jour from "../assets/images/jourhilal/1.jpg"
import jour1 from "../assets/images/jourhilal/0.jpg"
import jour2 from "../assets/images/jourhilal/2.jpg"
import jour3 from "../assets/images/jourhilal/3.jpg"
import Descriptionevent from './Descriptionevent'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useDispatch, useSelector } from 'react-redux'
import { evenementdelet, evenementget } from './JS/evenementSlice/eventSlice'
import { Link } from 'react-router-dom'

const Evenements = () => {
  const dispatch = useDispatch()
  const [pingE, setPingE] = useState()
  useEffect(() => {
    dispatch(evenementget())
  }, [pingE])
  const evenements = useSelector((state) => state.evenement?.evenement);
  console.log(evenements)
  const [show, setShow] = useState(false);
  return (
    <section id='evenement'>
   <div className="list-evenements">
   <Swiper className='swiper-container'  loop={true} navigation
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={70}
      slidesPerView={3}
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {evenements?.map((evenement, i) =><SwiperSlide>
      
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
           
            </div>
          </div>
      </SwiperSlide>)}
     
      
      
      </Swiper>
     {show? <Descriptionevent setShow={setShow}/> : null} 

     

   </div>

  
    </section>



  )
}

export default Evenements



