import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let MealsContext=createContext();
export default function MealsContextProvider(props){
      const [Allmeals, setAllmeals] = useState(null)
      const [meals, setmeals] = useState(null)
      function getmeals(){
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`).then((res)=>{
          
          
          setAllmeals(res.data.meals)
          
        }).catch((res)=>{})
      }
      function getSpecificMeals(cat){
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`).then((res)=>{
          console.log(res.data.meals);
          
          setmeals(res.data.meals)
          
        }).catch((res)=>{})
      }
      useEffect(()=>{
        getmeals();
      },[])
    return <MealsContext.Provider value={{meals,setmeals,getmeals,getSpecificMeals,Allmeals,setAllmeals}}>
        {props.children}
    </MealsContext.Provider>
}