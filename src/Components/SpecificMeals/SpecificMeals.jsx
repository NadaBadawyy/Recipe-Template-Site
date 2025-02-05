import React, { useContext, useEffect } from "react";
import style from "./SpecificMeals.module.scss";
import { MealsContext } from "../../Context/MealsContext";
import { Link, useParams } from "react-router-dom";
import Categories from "../Categories/Categories";
export default function SpecificMeals() {
  let { meals ,getSpecificMeals} = useContext(MealsContext);
  const {cat}=useParams();
  useEffect(()=>{
    getSpecificMeals(cat);
  },[cat])
  return (
    <>
    <h1>Learn, Cook, Eat Your Food</h1>
    <Categories/>
    {(meals)?  <div className="flex flex-wrap gap-20 mt-50">
        {meals?.map((meal) => (
          <div key={meal.idMeal} className="container bg-white">
            <div className="par">
              <img src={meal.strMealThumb} className="img" alt="" />
            </div>

            <div className="text">
              <h4>{meal.strMeal.split(" ").slice(0,2).join(" ")}</h4>
             
              <Link to={`/recipe/${meal.idMeal}`}><button className="bg-green text-white">view recipe</button></Link>
              
            </div>
          </div>
        ))}
      </div>:<div class="spinner">
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>
</div>}
    
    </>
  );
}
