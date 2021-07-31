import { Button, Avatar } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";

function TweetBox() {
	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox__input">
					<Avatar src="/images/user.jpg" />
					<input placeholder="What's happening?" />
				</div>
				<input
					placeholder="Optional: Enter an Image URL"
					className="tweetBox__imageInput"
				/>
				<Button className="tweetBox__tweetButton">Tweet</Button>
			</form>
		</div>
	);
}

export default TweetBox;
