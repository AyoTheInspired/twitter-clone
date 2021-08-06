import React, { useState } from "react";
import { Button, Avatar } from "@material-ui/core";
import "./TweetBox.css";
import db from "../firebase";

function TweetBox() {
	const [tweetMessage, setTweetMessage] = useState("");
	const [tweetImage, setTweetImage] = useState("");

	const sendTweet = (e) => {
		e.preventDefault();

		db.collection("posts").add({
			displayName: "Ayo Abimbola",
			username: "ayotheinspired",
			verified: true,
			text: tweetMessage,
			avatar:
				"https://res.cloudinary.com/ayotheinspired/image/upload/v1620704711/inspired-global-media/images/Team%20Members/The_Inspired_qo4e4p.jpg",
			image: "/images/chris.jpg",
		});

		setTweetMessage("");
		setTweetImage("");
	};

	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox__input">
					<Avatar src="/images/user.jpg" />
					<input
						value={tweetMessage}
						onChange={(e) => setTweetMessage(e.target.value)}
						placeholder="What's happening?"
					/>
				</div>
				<input
					value={tweetImage}
					onChange={(e) => setTweetImage(e.target.value)}
					placeholder="NB: All tweets will render with static images."
					className="tweetBox__imageInput"
				/>
				<Button onClick={sendTweet} className="tweetBox__tweetButton">
					Tweet
				</Button>
			</form>
		</div>
	);
}

export default TweetBox;
