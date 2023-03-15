import React from "react";

export default function Meme() {
	return (
		<main>
			<form className="form">
				<input className="form__input" placeholder="Top text" />
				<input className="form__input" placeholder="Bottom text" />
				<button className="form__button">Get a new meme</button>
			</form>
		</main>
	)
}