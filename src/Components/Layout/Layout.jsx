import React, { useContext, useEffect, useState } from "react";
import style from "./Layout.module.scss";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Categories from "../Categories/Categories";
import { NavContext } from "../../Context/NavContext";
import Footer from "../Footer/Footer";
export default function Layout() {
  let { nav,setnav } = useContext(NavContext);
  const [mdSreen , setmdScreen] = useState(window.innerWidth<=778);
  useEffect(()=>{
    window.addEventListener('load',()=>{
      if(window.innerWidth<=778){
        setmdScreen(true)
      }else{
        setmdScreen(false)

      }
    })
    window.addEventListener("resize" , ()=>{
      if(window.innerWidth<=778){
        setmdScreen(true)
      }else{
        setmdScreen(false)

      }
    })
  },[])
  return (
    <>
      <div className="flex">
        {mdSreen? nav? <div className="layer" onClick={()=>{setnav(false)}}> <div className="bg-white" onClick={(e)=>{e.stopPropagation()}} >
          <Navbar />
        </div></div> :<></>: <div className="bg-white" >
          <Navbar />
        </div>}
        
        <div className=" bg-beig back p-20 " >
          <i
            class="fa-solid fa-bars-staggered i "
            onClick={() => {
              setnav(prev=>!prev);
              
            }}
          ></i>
          <Outlet />
          
        </div>
       
      </div>
      <Footer/>
    </>
  );
}
