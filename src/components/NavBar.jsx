import "../styles/NavBar.css"
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import { FaGithub } from "react-icons/fa6";

export default function NavBar(){

  const [menuActive, setMenuActive] = useState(false);

  const menu_btn = ()=>{
    setMenuActive(!menuActive)
  }
  const menu_btn_down = ()=>{
    if(menuActive){
      setMenuActive(!menuActive)
    }
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
            <a href="#home" onClick={menu_btn_down}>
              <i class='bx bx-home' ></i>
              <span className="links_name">Home</span>
            </a>
            <span className="tooltip">Home</span>
          </li>
          <li>
            <a href="#about" onClick={menu_btn_down}>
              <i class='bx bx-help-circle' ></i>
              <span className="nav-desktop links_name">About</span>
            </a>
            <span className="tooltip">About</span>
          </li>
          <li>
            <a href="#services" onClick={menu_btn_down}>
              <i class='bx bx-command' ></i>
              <span className="links_name">Services</span>
            </a>
            <span className="tooltip">Services</span>
          </li>
          <li>
            <a href="#skills" onClick={menu_btn_down}>
              <i class='bx bx-pie-chart-alt-2' ></i>
              <span className="nav-desktop links_name">Skills</span>
            </a>
            <span className="tooltip">Skills</span>
          </li>
          <li>
            <a href="#projects" onClick={menu_btn_down}>
              <i class='bx bx-desktop' ></i>
              <span className="links_name">Projects</span>
            </a>
            <span className="tooltip">Projects</span>
          </li>
          <li>
            <a href="#contact" onClick={menu_btn_down}>
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
              <div className="name_job">
                <div className="name">Robel Wondimu</div>
                <div className="job">Web Developer</div>
              </div>
              
            </div>
            <a href="https://github.com" id="log_out" target="_blank">
              <FaGithub className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="nav-Content">
        <Outlet />
      </div>
    </>
    )
}