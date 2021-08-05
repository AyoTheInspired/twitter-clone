import Search from "@material-ui/icons/Search";
import React from "react";
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
	return (
		<div className="widgets">
			<div className="widgets__input">
				<Search className="widgets__searchIcon" />
				<input type="text" placeholder="Search Twitter" />
			</div>

			<div className="widgets__widged">
				<h2>What's Happening Here</h2>

				<TwitterTweetEmbed tweetId={"858551177860055040"} />

				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="ayotheinspired"
					options={{ height: 400 }}
				/>

				<TwitterShareButton
					url={"https://www.facebook.com/ayotheinspired"}
					options={{
						text: "always keep going",
						via: "ayotheinspired",
					}}
				/>
			</div>
		</div>
	);
}

export default Widgets;
