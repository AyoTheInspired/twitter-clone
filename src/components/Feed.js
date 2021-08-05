import React from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

function Feed() {
	return (
		<div className="feed">
			<div className="feed__header">
				<h2>HOME</h2>
			</div>
			<TweetBox />
			<Post
				displayName="Ayo Abimbola"
				username="ayotheinspired"
				verified
				text="The Very First Test Tweet"
				avatar="/images/user.jpg"
				image="/images/stacie.jpg"
			/>
			{/* <Post />
			<Post />
			<Post /> */}
		</div>
	);
}

export default Feed;
