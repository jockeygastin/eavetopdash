import React from 'react'
import './top.css'

//imported Icons =========>
import { BiSearchAlt } from "react-icons/bi";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsArrowRightShort, BsSearch } from "react-icons/bs";


//Imported Images ========>
  import img from '../../../Assets/information.png'
  import img2 from '../../../Assets/image62.jpg'
  import video from '../../../Assets/Reales.mp4'


const Top = () => {
  return (
    <div className='topSection'>
      <div className='headerSection flex'>
        <div className='title'>
        <h1>
          Welcome to Eavetop.
        </h1>
        <p>Hello, Welcome back!</p>
        </div>

        <div className="searchBar flex">
           <input type="text"  placeholder='Search Dashboard'/>
           <BsSearch className='icon'/>
        </div>

        <div className="adminDiv flex">
        <LuMessageCircleMore className='icon'/>
        <IoNotificationsOutline  className='icon'/>
         <div className="adminImage">
          <img src={img} alt="Admin Image" />
         </div>
        </div>


      </div>

      <div className="cardSection flex">
         <div className="rightCard flex">
          <h1>Create and sell extraordinary prodcuts</h1>
          <p>The world's fast growing industry today are natural made products!</p>
          <div className="button flex">
            <button className='btn'>Explore More</button>
            <button className='btn transparent'>Top Sellers</button>
          </div>

            <div className="videoDiv">
              <video src={video} autoplay loop muted></video>
            </div>
         </div>

         <div className="leftCard flex">
          <div className="main flex">

              <div className="textDiv">
                <h1>My Stat</h1>

                <div className='flex'>
                  <span>
                    Today <br /> <small>4 Orders</small>
                  </span>
                    <span>
                    This Month <br /> <small>127 Orders</small>
                  </span>
                </div>
               
                <span className='flex link'>
                  Go to my Orders  <BsArrowRightShort className='icon' />
                </span>
              </div>

              <div className="imgDiv">
                <img src={img2} alt="Admin Image" />
              </div>

                {/* we shall use this care later.... */}
               {/* <div className='sideBarCard'>
                      <BsQuestionCircle className='icon'/>
                      <div className='cardContent'>
                        <div className='circle1'></div>
                        <div className='cirecle2'></div>
                        <h3>Help Center</h3>
                         <p>Having trouble in eavetop, please contact us from for more questions.</p>
                         <button className='btn'>Go to help center</button>
                      </div>
                      </div> */}
          </div>
         </div>
      </div>
    </div>
  )
}

export default Top