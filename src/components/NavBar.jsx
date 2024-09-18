import "../styles/NavBar.css"
import ProfileImg from '../assets/kakashi.jpg';
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import ThemeSwitcher from './ThemeSwitcher'

export default function NavBar(){

  const [menuActive, setMenuActive] = useState(false);

  const menu_btn = ()=>{
    setMenuActive(!menuActive)
  }

  return (
      <>
      <div className={`sidebar ${menuActive ? 'active' : ''}`}>

        <div className="logo_content">

          <div className="logo">
            <i class='bx bx-user-circle' ></i>
            <div className="logo_name">Robel</div>
          </div>

        </div>

        <i class='bx bx-menu' id="btn" onClick={menu_btn} ></i>

        <ul class="nav_list">
          <li>
            <a href="#home">
              <i class='bx bx-home' ></i>
              <span className="links_name">Home</span>
            </a>
            <span className="tooltip">Home</span>
          </li>
          <li>
            <a href="#about">
              <span className="nav-mobile links_name">About</span>
              <i class='bx bx-help-circle' ></i>
              <span className="nav-desktop links_name">About</span>
            </a>
            <span className="tooltip">About</span>
          </li>
          <li>
            <a href="#services">
              <i class='bx bx-command' ></i>
              <span className="links_name">Services</span>
            </a>
            <span className="tooltip">Services</span>
          </li>
          <li>
            <a href="#skills">
              <span className="nav-mobile links_name">Skills</span>
              <i class='bx bx-pie-chart-alt-2' ></i>
              <span className="nav-desktop links_name">Skills</span>
            </a>
            <span className="tooltip">Skills</span>
          </li>
          <li>
            <a href="#projects">
              <i class='bx bx-desktop' ></i>
              <span className="links_name">Projects</span>
            </a>
            <span className="tooltip">Projects</span>
          </li>
          <li>
            <a href="#contact">
              <span className="nav-mobile links_name">Contact</span>
              <i class='bx bxs-contact' ></i>
              <span className="nav-desktop links_name">Contact</span>
              

            </a>
            <span className="tooltip">Contact</span>
          </li>

          <ThemeSwitcher />

        </ul>

        <div className="profile_content">
          <div className="profile">
            <div className="profile_details">
              <img src={ProfileImg} alt="" />
              <div className="name_job">
                <div className="name">Robel Wondimu</div>
                <div className="job">Web Developer</div>
              </div>
              
            </div>
            <i className="bx bx-log-out" id="log_out"></i>
          </div>
        </div>
      </div>
      <div className="nav-Content">
        <Outlet />
      </div>
    </>
    )
}