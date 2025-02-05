import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import Categories from './Components/Categories/Categories'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import MealsContextProvider, { MealsContext } from './Context/MealsContext'
import AllMeals from './Components/AllMeals/AllMeals'
import SpecificMeals from './Components/SpecificMeals/SpecificMeals'
import Recipe from './Components/Recipe/Recipe'
import NavContextProvider from './Context/NavContext'

function App() {
  
    let routes=createBrowserRouter([
      {path:"", element:<Layout/> , children:[
        {index:true ,element:<AllMeals/>},
        {path:"category/:cat",element:<SpecificMeals/>},
        {path:"recipe/:id",element:<Recipe/>},
      ]}
    ])
    
  return (
    <>
    
    <MealsContextProvider>
      <NavContextProvider>
        <RouterProvider router={routes}>

      </RouterProvider>
      </NavContextProvider>
      
    </MealsContextProvider>

    
    
      
      
      
    </>
  )
}

export default App
