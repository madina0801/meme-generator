import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
	const [meme, setMeme] = React.useState({
		topText: '',
		bottomText: '',
		randomImage: "http://i.imgflip.com/1bij.jpg"
	});

	const [allMemeImages, setAllMemeImages] = React.useState(memesData);

	function getMemeImage(e) {
		e.preventDefault();
		const memesArray = allMemeImages.data.memes;
		const randomNum = Math.floor(Math.random() * memesArray.length);
		const url = memesData.data.memes[randomNum].url;
		setMeme(prevMeme => {
			return {
				...prevMeme,
				randomImage: url
			}
		});
	}

	return (
		<main>
			<form className="form">
				<input className="form__input" placeholder="Top text" />
				<input className="form__input" placeholder="Bottom text" />
				<button onClick={getMemeImage} className="form__button">Get a new meme</button>
			</form>
			<div className="meme__img--container">
				<img className="meme__img" src={meme.randomImage} />
			</div>
		</main>
	)
}