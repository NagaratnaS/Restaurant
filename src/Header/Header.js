import React from "react";
import '../Header/Header.css';
import RestaurantIcon from '../Images/RestaurantIcon.png';


export default function Header() {


    return(
        <div className="header">
            <nav className="buttons">
                <button className="homeButton"> Home </button>
                <button className="homeButton"> Menu </button>
                <button className="homeButton"> About </button>
                <button className="homeButton"> Contact </button>
            </nav>
        </div>
    );
}