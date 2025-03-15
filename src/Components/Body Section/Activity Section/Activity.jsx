import React from 'react'
import './activity.css'

//Imported Icons===========>
import { BsArrowRightShort } from "react-icons/bs";

//Imported Images============>
  import img from '../../../Assets/cedric.jpg'
  import img2 from '../../../Assets/kampus1.jpg'
   import img3 from '../../../Assets/karolina.jpg'
   import img4 from '../../../Assets/girl.jpg'
   import img5 from '../../../Assets/nilov.jpg'



const Activity = () => {
  return (
    <div className='activitySection'>
      <div className='heading flex'>
        <h1>Resent Activity</h1>
        <button className='btn flex'>
          See All
          <BsArrowRightShort className='icon'/>
        </button>
      </div>
      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={img2} alt="Customer Image" />
          <div className="customerDetails">
          <span className='name'>Ola Martha</span>
          <small>Order in Eavetop</small>
          </div>
          <div className="duration">
          2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={img3} alt="Customer Image" />
          <div className="customerDetails">
          <span className='name'>Ola Martha</span>
          <small>Order in Eavetop</small>
          </div>
          <div className="duration">
          2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={img4} alt="Customer Image" />
          <div className="customerDetails">
          <span className='name'>Ola Martha</span>
          <small>Order in Eavetop</small>
          </div>
          <div className="duration">
          2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={img5} alt="Customer Image" />
          <div className="customerDetails">
          <span className='name'>Ola Martha</span>
          <small>Order in Eavetop</small>
          </div>
          <div className="duration">
          2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={img} alt="Customer Image" />
          <div className="customerDetails">
          <span className='name'>Ola Martha</span>
          <small>Order in Eavetop</small>
          </div>
          <div className="duration">
          2 min ago
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity