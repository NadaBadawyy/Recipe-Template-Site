import React, { useEffect, useState } from "react";
import style from "./Recipe.module.scss";
import { useParams } from "react-router-dom";
import test from "../../assets/test.jpg";
import axios from "axios";

export default function Recipe() {
  const [recipe, setrecipe] = useState(null);
  let { id } = useParams();
  const ingredients = Array.from({ length: 20 }, (_, i) => {
    const ingredient = recipe?.[0]?.[`strIngredient${i + 1}`]?.trim();
    const measure = recipe?.[0]?.[`strMeasure${i + 1}`]?.trim();

    return ingredient && measure ? { ingredient, measure } : null;
  }).filter(Boolean);

  function getRecipe() {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        console.log(res.data.meals);

        setrecipe(res.data.meals);
      })
      .catch((res) => {});
  }

  useEffect(() => {
    getRecipe();
  }, []);
  return (
    <>
      {recipe?.map((r) => (
        <>
          <h3>{r.strMeal}</h3>
          <div className={`${style.con} flex flex-wrap mt-20 `}>
            <div className="mb-50">
              <img src={r.strMealThumb} className="mr-20 mb-20  " alt="" />
              <a href={r.strYoutube} target="_plank">
                <button className={`${style.btn1}`}>
                  <i class="fa-brands fa-youtube"></i> Youtube
                </button>
              </a>
              <a href={r.strSource} target="_plank">
                <button className={`${style.btn2}`}>
                  <i class="fa-solid fa-globe"></i> Source
                </button>
              </a>
            </div>
            <div className={`${style.des}`}>
              <p>{r.strInstructions}</p>
            </div>
            <div className={`${style.content}  `}>
              <div className={style.c }>
              <div className={`${style.line} mb-10 `}>
                <h4 className="mb-15">ingredients</h4>
              </div>
              {ingredients?.map((ing) => {
                console.log(ing);

                return ing.ingredient && ing.measure ? (
                  <div
                    className={`${style.lightline} flex justify-between p-7`}
                  >
                    <p className="mr-30">{ing.ingredient}</p>
                    <p>{ing.measure}</p>
                  </div>
                ) : null;
              })}
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
