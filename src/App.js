import "./App.css"
import Animalshow from "./AnimalShow";
import { useState } from "react";
const getRandomAnimal = () => {
  const animals = ["cow", "bird", "dog", "horse", "gator", "cat"];
  return animals[Math.floor(Math.random(0, 1) * animals.length)];
};
function App() {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };
  const renderedAnimals = animals.map((animal, index) => {
    console.log(animal);
    console.log(index);
    return <Animalshow type={`./images/${animal}.svg`} key={index}/>;
  });
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      {/* <img src="animal-app\src\images\bird.svg"/> */}
      {/* <div>{renderedAnimals}</div> */}
      <Animalshow type={`./images/cow.svg`}/>
    </div>
   
  );
}

export default App;
