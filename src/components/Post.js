import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import {
	ChatBubbleOutline,
	FavoriteBorder,
	Publish,
	Repeat,
	VerifiedUser,
} from "@material-ui/icons";

const Post = forwardRef(
	(
		{ displayName, username, verified, timestamp, text, image, avatar },
		ref
	) => {
		return (
			<div className="post" ref={ref}>
				<div className="post__avatar">
					<Avatar src={avatar} />
				</div>

				<div className="post__body">
					<div className="post__header">
						<div className="post__headerText">
							<h3>
								{displayName}&nbsp;
								<span className="post__headerSpecial">
									{verified && <VerifiedUser className="post__badge" />} @
									{username}
								</span>
							</h3>
						</div>
						<div className="post__headerDescription">
							<p> {text} </p>
						</div>
					</div>
					<img src={image} width="400" alt="" />

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
);

export default Post;
