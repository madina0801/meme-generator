import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
	let url;

	function getMemeImage(e) {
		e.preventDefault();
		let randomNum = Math.trunc(Math.random() * memesData.length);
		url = memesData.data.memes[randomNum].url
		console.log(url);
	}
	return (
		<main>
			<form className="form">
				<input className="form__input" placeholder="Top text" />
				<input className="form__input" placeholder="Bottom text" />
				<button onClick={getMemeImage} className="form__button">Get a new meme</button>
			</form>
		</main>
	)
}