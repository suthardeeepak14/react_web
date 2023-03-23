import React from "react";
import MemeData from "../Data";

export default function Meme() {
  // const [memeImages, setMemeImage] = React.useState("https://i.imgflip.com/1bij.jpg");
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomIamge: "https://i.imgflip.com/1bij.jpg",
  });
  const [allNewImages, setAllNewImages] = React.useState(MemeData);
  // let url;
  function getMemeImage() {
    // const memeArray = MemeData.data.memes;
    const memeArray = allNewImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    // url = memeArray[randomNumber].url;
    // setMemeImage(memeArray[randomNumber].url);
    const url = memeArray[randomNumber].url;
    setMeme((preMeme) => ({
      ...preMeme,
      randomIamge: url,
    }));
    // console.log(url);

    // function memeImg() {
    //   return url;
  }
  // }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          id="line-1"
          className="form-input"
        />
        <input
          type="text"
          placeholder="Bottom text"
          id="line-2"
          className="form-input"
        />
        <button onClick={getMemeImage} className="form-btn">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="memeRandom">
        <img src={meme.randomIamge} alt="Not Found" className="meme-image" />
      </div>
    </main>
  );
}
