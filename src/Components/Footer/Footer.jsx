import React from "react";
import style from "./Footer.module.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="pt-20 pb-20">
        <div className={`${style.content}`}>
          <div className={style.con}>
            <img src={logo} alt="" />
            <Link to={"/"}>
              <h4 className={`${style.title}`}>Recipe</h4>
            </Link>
          </div>
          <h5>Route</h5>
        </div>
        <div className={`${style.lightline}`}></div>
        <p>Made by Nada Badawy</p>
      </footer>
    </>
  );
}
