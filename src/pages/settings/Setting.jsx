import React from 'react'
import "./setting.css"
import Sidebar from "../../component/sidebar/Sidebar"
import profileimg from "../../assets/Img/post1.jpg"

export default function Setting() {
  return (
    <div className='settings d-flex'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className='settingsUpdateTitle'>Update Your Account</span>
                <span className='settingsDeleteTitle'>Delete Account</span>
            </div>
            <form className='settingsForm '>
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src={profileimg} alt="" />
                    <label htmlFor="fileInput">
                    <i class="settingsPPIcon fa-solid fa-user"></i>
                    </label>
                    <input type="file" name="" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder='Hello'/>
                <label>Email</label>
                <input type="email" placeholder='hello@gmail.com'/>
                <label>Password</label>
                <input type="password"/>
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
