import React from 'react';
import '../Styles/Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
	return (
		<div className="feed">
			<StoryReel />
			<MessageSender />

			<Post
				key="001"
				profilePic="https://avatars.services.sap.com/images/john.liberal2.png"
				message="Cool, estamos funcionando"
				timestamp="Aquí va el timestamp"
				username="johnplex"
				image="https://3.bp.blogspot.com/_AnUh46tmTrA/R2glq-f1bpI/AAAAAAAAAB0/f-FjJKwyvlI/w1200-h630-p-k-no-nu/Blog+Zip+Compress.JPG"
			/>
			<Post
				key="002"
				profilePic="https://avatars.services.sap.com/images/john.liberal2.png"
				message="F*ck 2020"
				timestamp="Aquí va el timestamp"
				username="johnplex"
				image="https://pbs.twimg.com/media/EVT4J7VXYAE6olm.jpg"
			/>
			<Post
				key="003"
				profilePic="https://avatars.services.sap.com/images/john.liberal2.png"
				message="Hello World"
				timestamp="Aquí va el timestamp"
				username="johnplex"
			/>
		</div>
	);
}

export default Feed;
