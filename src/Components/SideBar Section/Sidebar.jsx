import React from 'react'
import './sidebar.css'

// Imported Images ========>
import logo from '../../Assets/Logo.png'

// imported Icons =========>
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import { GrTransaction } from "react-icons/gr";




const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      <div className='logoDiv flex'>
        <img src={logo} alt="Image Name" />
        <h2>Eavetop.</h2>
      </div>

      <div className='menuDiv'>
        <h3 className='divTitle'>
          QUICK MENU
        </h3>
        <ul className='menuLists grid'>

          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <IoMdSpeedometer className='icon' />
              <span className='smallText'>
                Dashboard
              </span>
            </a>
            <ul className='subitems'>
              <li><a href="/project">Project 1</a></li>
              <li><a href="#">Project 2</a></li>
              <li><a href="#">Project 3</a></li>
            </ul>
          </li>

          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <MdDeliveryDining className='icon' />
              <span className='smallText'>
                My Orders
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <MdOutlineExplore className='icon' />
              <span className='smallText'>
                Explore
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href="#" className='menuLink flex'>
            <GrTransaction className='icon' />
              <span className='smallText'>
                Transactions
              </span>
            </a>
          </li>

        </ul>
      </div>

      <div className='settingsDiv'>
        <h3 className='divTitle'>
          OTHER LINKS
         </h3>
        <ul className='menuLists grid'>

          {/* <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <AiOutlinePieChart className='icon' />
              <span className='smallText'>
                Charts
              </span>
            </a>
          </li> */}

          {/* <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <BiTrendingUp className='icon' />
              <span className='smallText'>
                Trends
              </span>
            </a>
          </li> */}

          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <MdOutlinePermContactCalendar className='icon' />
              <span className='smallText'>
                Contact
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href="#" className='menuLink flex'>
            <LuLogOut className='icon' />
              <span className='smallText'>
                Log Out</span>
            </a>
          </li>

        </ul>
      </div>

      <div className='sideBarCard'>
        <BsQuestionCircle className='icon' />
        <div className='cardContent'>
          <div className='circle1'></div>
          <div className='cirecle2'></div>
          <h3>Help Center</h3>
          <p>Having trouble in eavetop, please contact us from for more questions.</p>
          <button className='btn'>Go to help center</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar