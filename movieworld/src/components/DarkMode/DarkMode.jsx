import React from "react";

import "./DarkMode.css";
// import { ReactComponent as Sun } from "./Sun.svg";
// import { ReactComponent as Moon } from "./Moon.svg";

import moonIcon from "./Moon.svg";
import sunIcon from "./Sun.svg";

const DarkMode = () => {

    const setDarkTheme =()=>{
        document.querySelector("body").setAttribute("data-theme","dark")
    }
    const setLightTheme =()=>{
        document.querySelector("body").setAttribute("data-theme","light")
    }

    const toggleTheme = e =>{
        if(e.target.checked)
        {
            setDarkTheme()
        }
        else{
            setLightTheme()
        }
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked ={true}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                {/* <Sun /> */}
                {/* <Moon /> */}
                <img src={sunIcon} alt="sun icon" className="icon-sun" />
                <img  src={moonIcon} alt="moon icon" className="icon-moon"/>
                
            </label>
        </div>
    );
};

export default DarkMode;
