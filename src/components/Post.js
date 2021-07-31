import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import {
	ChatBubbleOutline,
	FavoriteBorder,
	Publish,
	Repeat,
	VerifiedUser,
} from "@material-ui/icons";

function Post({
	displayName,
	username,
	verified,
	timestamp,
	text,
	image,
	avatar,
}) {
	return (
		<div className="post">
			<div className="post__avatar">
				<Avatar src="/images/stacie.jpg" />
			</div>

			<div className="post__body">
				<div className="post__header">
					<div className="post__headerText">
						<h3>
							Ayo Abimbola
							<span className="post__headerSpecial">
								<VerifiedUser className="post__badge" /> @ayotheinspired
							</span>
						</h3>
					</div>
					<div className="post__headerDescription">
						<p>Here's a unique Twitter clone with React.</p>
					</div>
				</div>
				<img src="/images/chris.jpg" width="350" alt="" />

				<div className="post__footer">
					<ChatBubbleOutline fontSize="small" />
					<Repeat fontSize="small" />
					<FavoriteBorder fontSize="small" />
					<Publish fontSize="small" />
				</div>
			</div>
		</div>
	);
}

export default Post;
