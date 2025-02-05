import React, { useContext } from 'react'
import style from "./AllMeals.module.scss"
import { MealsContext } from '../../Context/MealsContext'
import { Link } from 'react-router-dom'
import Categories from '../Categories/Categories'
export default function AllMeals() {
 let {Allmeals}= useContext(MealsContext)
  return (
    <>
    <h1>Learn, Cook, Eat Your Food</h1>
    <Categories/>
    {(Allmeals)?<div className="flex flex-wrap gap-20 mt-50 justify-center">
     { Allmeals?.map((meal)=><div key={meal.idMeal} className="container bg-white">
      <div className="par">
        <img src={meal.strMealThumb} className='img' alt="" />
      </div>
      
     <div className="text">
     <h4>{meal.strMeal}</h4>
      <p className='text-green '><i className="fa-solid fa-earth-americas"></i> {meal.strArea}</p>
      <Link to={`/recipe/${meal.idMeal}`}><button className='bg-green text-white'>view recipe</button></Link>
      
     </div>
    </div>)}
    </div>:<div class="spinner">
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>
</div>}
      
    
    </>
  )
}
