import React from 'react'
import './Mediaquery.css';


const Contact = () => {
 
  
  return (
    <div className="container my-5 contact">
    <div className="row">
      <div className="col-md-6">
      <img src="https://blog.sparkhire.com/wp-content/uploads/2014/08/3-Reasons-to-Always-Be-Networking-840x576.jpg" alt="" width='500px' />
      </div>
      <div className="col-md-6">
        <div className="form">
          <h2>Enter Details Here</h2>
          <form >
          <label htmlFor="">First Name:
            <input type="text" placeholder='Enter Your First Name' required />
            </label>
          <label htmlFor="">Last Name:

            <input type="text" placeholder='Enter Your Last Name' required />
            </label>
            <label htmlFor="">Email:
            <input type="email"  placeholder='Enter Your Email' required /> 
            </label><br />
            <label htmlFor="">Message: <br />
            <textarea name="" id="" cols="30" rows="5" placeholder='Enter Your Quiry' ></textarea>
            </label>
            <br />
            <input type="submit"   className='submit' 
            />
          </form>
        </div>
      </div>
    </div>
    
      </div>

  )
}

export default Contact