import React from "react";
import Header from "./Components/Header";
import Meme from "./Components/Meme";

export default function App() {
  // const [isImportant, setIsImportant] = React.useState("Yes");
  // console.log(isImportant);
  // function handleClick() {
  //   setIsImportant("No");
  // }
  return (
    <div>
      <Header />
      <Meme />
      {/* <div className="state">
        <h1 className="state-title">Is State important to know</h1>
        <div className="state-value" onClick={handleClick}>
          <h1>{isImportant} </h1>
        </div>
      </div> */}
    </div>
  );
}
