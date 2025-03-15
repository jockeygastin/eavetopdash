import React from 'react'
import './listing.css'

//Imported Icons===========>
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

//Imported Images===========>
  import img from '../../../Assets/r3.png'
  import img1 from '../../../Assets/homepng2.png'
  import img2 from '../../../Assets/house.png'
  import img3 from '../../../Assets/r1.png'
  import user1 from '../../../Assets/img (2).jpg'
  import user2 from '../../../Assets/it.jpg'
  import user3 from '../../../Assets/girl.jpg'
  import user4 from '../../../Assets/karolina.jpg'




const Listing = () => {
  return (
    <div className='listingSection'>

      <div className="heading flex">
        <h1>My Listings</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer flex">
        <div className='singleItem'>
        <AiOutlineHeart className='icon'/>
        <img src={img} alt="Image Name" />
        <h3>Annual Vince</h3>
        </div>

        <div className='singleItem'>
        <AiFillHeart className='icon'/>
        <img src={img1} alt="Image Name" />
        <h3>Annual Vince</h3>
        </div>

        <div className='singleItem'>
        <AiOutlineHeart className='icon'/>
        <img src={img2} alt="Image Name" />
        <h3>Annual Vince</h3>
        </div>

        <div className='singleItem'>
        <AiFillHeart className='icon'/>
        <img src={img3} alt="Image Name" />
        <h3>Annual Vince</h3>
        </div>
       </div>

       <div className="sellers flex">
          <div className="topSellers">
            <div className='heading flex'>
            <h3>Top Sellers</h3>
            <button className='btn flex'>
             See All <BsArrowRightShort className='icon'/>
             </button>
          </div>

          <div className="card flex">
            <div className='users'>
            <img src={user1} alt="User Image" />
            <img src={user2} alt="User Image" />
            <img src={user3} alt="User Image" />
            <img src={user4} alt="User Image" />

          </div>
          <div className='cardText'>
             <span>
              14.556 Flats sold <br />
              <small>
                21 Sellers <span className='date'>7 Days</span>
              </small>
             </span>
          </div>
       </div>
    </div>

    <div className="featuredSellers">
            <div className='heading flex'>
            <h3>Featured Sellers</h3>
            <button className='btn flex'>
             See All <BsArrowRightShort className='icon'/>
             </button>
          </div>

          <div className="card flex">
            <div className='users'>
            <img src={user1} alt="User Image" />
            <img src={user2} alt="User Image" />
            <img src={user3} alt="User Image" />
            <img src={user4} alt="User Image" />

          </div>
          <div className='cardText'>
             <span>
              28.556 Flats sold <br />
              <small>
                26 Sellers <span className='date'>31 Days</span>
              </small>
             </span>
          </div>
       </div>
    </div>
    </div>
    </div>

  )
}

export default Listing;