import React from 'react';
import "./Topbar.css"
import { Link } from 'react-router-dom';

function Topbar() {
    const user = false;
    return (
        <div className='col-md-12 col-sm-6'>
            <div className='top'>
                <div className="topLeft">
                    <a href="https://www.facebook.com/home.php"><i className="topIcon fa-brands fa-facebook"></i></a>
                    <a href="https://in.linkedin.com/"><i className="topIcon fa-brands fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/accounts/login/"><i className="topIcon fa-brands fa-instagram"></i></a>
                    <a href="https://twitter.com/i/flow/login"><i class="topIcon fa-brands fa-x-twitter"></i></a>
                </div>
                <div className="topCenter">

                    <li className='topListItem'>
                        <Link className='link' to="/">HOME</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to="/about">ABOUT</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to="/contact">CONTACT</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to="/write">WRITE</Link>
                    </li>
                    <li className='topListItem'>
                        {user && "LOGOUT"}
                    </li>

                </div>
                <div className="topRight">
                    {
                        user ? (
                            <img className='topImg' src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg" alt="" />
                        ) : (
                            <>

                                <li className='topListItem'>
                                    <Link className='link' to="/login">LOGIN</Link>
                                </li>
                                <li className='topListItem'>
                                    <Link className='link' to="/register">REGISTER</Link>
                                </li>

                            </>
                        )
                    }

                    <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
    );
}

export default Topbar;