import React, { useContext, useEffect } from 'react'
import style from "./Navbar.module.scss"
import logo from "../../assets/logo.png"
import { MealsContext } from '../../Context/MealsContext'
import { Link } from 'react-router-dom'
import { use } from 'react'
import { NavContext } from '../../Context/NavContext'
export default function Navbar() {
  const {getmeals}=useContext(MealsContext)
  const {nav}=useContext(NavContext);
  useEffect(()=>{
   
  },[])
  return (
    <>
      <nav  >
        <img src={logo} className='' alt="" />
        <Link to={'/'}><button className={`${style.btn} bg-orange ${style.btn1}`} onClick={getmeals()}><i className="fa-solid fa-utensils"></i> Meals</button></Link>
        <button className={`${style.btn} ${style.btn2} border-black`}><i className="fa-solid fa-utensils"></i> ingrediants</button>
        <button className={`${style.btn} ${style.btn2} border-black`}><i className="fa-solid fa-utensils"></i> area</button>
      </nav>
    </>
  )
}
