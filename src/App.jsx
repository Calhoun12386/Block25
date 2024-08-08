import { useState } from 'react'


// Write your Color component here
const Color=({color, setSelectedColor, selectedColor}) =>{
  
  let colorPicked = color;
  console.log(colorPicked)

  if(color == selectedColor){
    //adds .selected class, classes are separated by a space
    colorPicked+= " selected";
    if (color === "black") {
      colorPicked += " selec"
    }
  }


  return <div className={colorPicked} onClick={()=> setSelectedColor(color)}></div>}


const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="green" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color color="blue"  setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="black" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        
        {/* colors go here */}</div>
    </div>
  );
};

export default App;
