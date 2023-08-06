import "./AnimalShow.css";
import { useState } from "react";
import bird from "./images/bird.svg";
import cat from "./images/cat.svg";
import dog from "./images/dog.svg";
import cow from "./images/cow.svg";
import gator from "./images/gator.svg";
import horse from "./images/horse.svg";
import heart from "./images/heart.svg";

const svgMap=[
  bird,cat,cow,dog,gator,horse,
];


function Animalshow({type}){
    console.log(type);
    return(
      <div>
        <img alt="image" src={type}/>
      </div>
      
    );
}
export default Animalshow;