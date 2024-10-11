import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {
    return (
        <div className='col-12 col-md-12 col-sm-3'>
            <div className='sidebar '>
                <div className="sidebarItem">
                    <span className="sidebarTitle">
                        ABOUT ME
                    </span>
                    <img src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia voluptas nemo rem hic vel assumenda totam eaque similique, accusantium maxime eveniet molestias in aliquid id reiciendis ab quam neque.</p>
                </div>
                <div className="sidebarItem">
                    <span className='sidebarTitle'>CATEGORIES</span>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>Life</li>
                        <li className='sidebarListItem'>Music</li>
                        <li className='sidebarListItem'>Style</li>
                        <li className='sidebarListItem'>Sport</li>
                        <li className='sidebarListItem'>Tech</li>
                        <li className='sidebarListItem'>Cinema</li>
                    </ul>
                </div>
                <div className="sidebarItem">
                    <span className='sidebarTitle'>FOLLOW US</span>
                    <div className="sidebarSocial">
                        <i className="sidebarIcon fa-brands fa-facebook"></i>
                        <i className="sidebarIcon fa-brands fa-linkedin"></i>
                        <i className="sidebarIcon fa-brands fa-instagram"></i>
                        <i className="sidebarIcon fa-brands fa-twitter"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
