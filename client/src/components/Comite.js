import React from 'react'

import "../scss/comite.css"
import logo from '../assets/images/logo.png'
import president from '../assets/images/comite/med.png'
import vis_president from '../assets/images/comite/mohsen.jpg'
import secretair from '../assets/images/comite/salah.JPG'
import teresorie from '../assets/images/comite/najeh.JPG'
import diffusion from '../assets/images/comite/wala.jpg'


const Comite = () => {
  return (
    <section id="comite">
      <div className="comite">

        {/* <div className='comite-title'>

          <img src={logo} alt="logo" width={"150px"} />

          <h1> الهلال الأحمر التونسي الهيئة المحلية بغنوش</h1>

          <img src={logo} alt="logo" width={"150px"} />


        </div> */}
        <div className="list_comite">
          <div className="list1">
            
            <div className="container">
            <div class="card_box">
              <div className="container_image">
                <img src={teresorie} alt="logo" width={"200px"} height={"200px"} />
              </div>

              <div className="container_title">
                <h1> ناجح منصور</h1>
              </div>
              <div className="container_poste">
                <h3>أمين مال</h3>
              </div>
              </div>
            </div>
            <div className="container">
            <div class="card_box">

              <div className="container_image">
                <img src={secretair} alt="logo" width={"200px"} height={"200px"} />
              </div>

              <div className="container_title">
                <h1>   صالح الغودي</h1>
              </div>
              <div className="container_poste">
                <h3>كاتب عام </h3>
              </div>
              </div>
            </div>
            <div className="container">
            <div class="card_box">

              <div className="container_image">
                <img src={vis_president} alt="logo" width={"200px"} height={"200px"} />
              </div>

              <div className="container_title">
                <h1>  محسن راجح</h1>
              </div>
              <div className="container_poste">
                <h3>نائب الرئيس</h3>
              </div>
              </div>
            </div>
            <div className="container">
            <div class="card_box">

              <div className="container_image">
                <img src={president} alt="logo" width={"200px"} height={"200px"} />
              </div>

              <div className="container_title">
                <h1> محمد سوايسة</h1>
              </div>
              <div className="container_poste">
                <h3>رئيس الجمعية</h3>
              </div>
            </div>
            </div>
          </div>
          <div className="list2">
            <div className="container">
            <div class="card_box">

              <div className="container_image">
                <img src={diffusion} alt="logo" width={"200px"} height={"200px"} />
              </div>

              <div className="container_title">
                <h1> ولاء الخروف</h1>
              </div>
              <div className="container_poste">
                <h3>عضو مكلف بالنشر </h3>
              </div>
              </div>
            </div>
            <div className="container">
            <div class="card_box">

              <div className="container_image">
                <img src={president} alt="logo" width={"200px"} height={"200px"} />
              </div>

              <div className="container_title">
                <h1> محمد عبار</h1>
              </div>
              <div className="container_poste">
                <h3>عضو مكلف بالعمل الإجتماعي  </h3>
              </div>
              </div>
            </div>
            <div className="container">
            <div class="card_box">
              <div className="container_image">
                <img src={president} alt="logo" width={"200px"} height={"200px"} />
              </div>

              <div className="container_title">
                <h1> محمد سوايسة</h1>
              </div>
              <div className="container_poste">
                <h3>عضو مكلف بالاسعاف  </h3>
              </div>
            </div>
            </div>
          </div>
          <div className="list3">
            <div className="container">
            <div class="card_box">

              <div className="container_image">
                <img src={president} alt="logo" width={"200px"} height={"200px"} />
              </div>

              <div className="container_title">
                <h1>  رمزي خروف</h1>
              </div>
              <div className="container_poste">
                <h3>عضو مكلف بإغاثة </h3>
              </div>
              </div>
            </div>
            <div className="container">
            <div class="card_box">

              <div className="container_image">
                <img src={president} alt="logo" width={"200px"} height={"200px"} />
              </div>

              <div className="container_title">
                <h1> أسامة رجب</h1>
              </div>
              <div className="container_poste">
                <h3>عضو مكلف بالصحة </h3>
              </div>
              </div>
            </div>
            <div className="container">
            <div class="card_box">

              <div className="container_image">
                <img src={president} alt="logo" width={"200px"} height={"200px"} />
              </div>

              <div className="container_title">
                <h1>  زينب الباجي</h1>
              </div>
              <div className="container_poste">
                <h3> عضو مكلف بالشباب</h3>
              </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </section>
  )
}

export default Comite