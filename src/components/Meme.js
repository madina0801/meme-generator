import React from "react";
import memesData from "../memesData.js";

/**
* Challenge: Save the random meme URL in state
* - Create new state called `memeImage` with an
*   empty string as default
* - When the getMemeImage function is called, update
*   the `memeImage` state to be the random chosen
*   image URL
* - Below the div.form, add an <img /> and set the
*   src to the new `memeImage` state you created
*/

export default function Meme() {
	const [memeUrl, setMemeUrl] = React.useState('');

	function getMemeImage(e) {
		e.preventDefault();
		const memesArray = memesData.data.memes
		const randomNum = Math.floor(Math.random() * memesArray.length)
		setMemeUrl(memesData.data.memes[randomNum].url);
	}
	return (
		<main>
			<form className="form">
				<input className="form__input" placeholder="Top text" />
				<input className="form__input" placeholder="Bottom text" />
				<button onClick={getMemeImage} className="form__button">Get a new meme</button>
			</form>
			<div className="meme__img--container">
				<img className="meme__img" src={memeUrl} />
			</div>
		</main>
	)
}