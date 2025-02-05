import React, { useContext, useEffect, useState } from 'react'
import style from "./Categories.module.scss"
import axios from 'axios'
import test from "../../assets/test.jpg"
import { NavLink, useNavigate } from 'react-router-dom'
import { MealsContext } from '../../Context/MealsContext'

export default function Categories() {
  const [minScreen, setminScreen] = useState(window.innerWidth<=778)
  const [categories, setcategories] = useState(null)
  const navigate=useNavigate();
  function getCategories(){
    axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`).then((res)=>{
      setcategories(res.data.categories);
      console.log(res.data.categories);
      
    }).catch((res)=>{})
  }

  
  let {getmeals}=useContext(MealsContext)
  useEffect(()=>{
    if(window.innerWidth<=778){
      setminScreen(true);
    }
    else{
      setminScreen(false)
    }
    getCategories()
  },[window.innerWidth])
  return (
    <>
    
    {(minScreen)?<select className="select p-5 bg-white mt-10" onChange={(e)=>{
      navigate(`/category/${e.target.value}`)
    }}>
    {categories?.map((cat)=>{
      return <option value={cat.strCategory}  >{cat.strCategory}</option>
      
    })}
      </select>:<div className={`categ flex flex-wrap gap-15`}>
      <NavLink to={'/'}><p className={ ` cat1 border-gray `} onClick={()=>{getmeals()
        
      }}>all</p></NavLink>
      
      {categories?.map((cat)=><NavLink  to={`/category/${cat.strCategory}`}><p  className={`cat1  border-gray  `}  >{cat.strCategory}</p></NavLink> )}
    </div>}
    
    
      
    </>
  )
}
