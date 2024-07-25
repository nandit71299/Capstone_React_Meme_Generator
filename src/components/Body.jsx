import React from "react"
import "../assets/styles/Body.css"
import meme from "../memesData";

export default function Body() {

    const [memeUrl, setMemeUrl] = React.useState("");

    function getMemeImage() {
        const randomMemeNo = Math.floor(Math.random(meme.length) * 100);
        setMemeUrl(meme.data.memes[randomMemeNo].url);
    }

    return (
        <main>
            <div className="form">
                <label htmlFor="top_text">Top Text:  &nbsp;
                    <input type="text" name="" className="form--input" id="top_text" placeholder="Top Text" />
                </label>
                <label htmlFor="bottom_text">Bottom Text:  &nbsp;
                    <input type="text" name="" className="form--input" id="bottom_text" placeholder="Bottom text" />
                </label>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <img src={memeUrl} alt="" className="meme--image" />
        </main>
    )
}

