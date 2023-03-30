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

	function handleChange(event) {
		const { name, value } = event.target;
		setMeme(prevMeme => {
			return {
				...prevMeme,
				[name]: value,
			}
		});
	}

	return (
		<main>
			<div className="form">
				<input
					type="text"
					placeholder="Top text"
					className="form__input"
					name="topText"
					value={meme.topText}
					onChange={handleChange}
				/>
				<input
					type="text"
					placeholder="Bottom text"
					className="form__input"
					name="bottomText"
					value={meme.bottomText}
					onChange={handleChange}
				/>
				<button
					className="form__button"
					onClick={getMemeImage}
				>
					Get a new meme image
				</button>
			</div>
			<div className="meme">
				<div className="image__container">
					<img src={meme.randomImage} className="meme__image" />

				</div>
				<h2 className="meme__text top">{meme.topText}</h2>
				<h2 className="meme__text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	)
}