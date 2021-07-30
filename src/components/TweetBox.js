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
				<Button>Tweet</Button>
			</form>
		</div>
	);
}

export default TweetBox;
