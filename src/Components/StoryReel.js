import React from 'react';
import '../Styles/StoryReel.css';
import Story from './Story';

function StoryReel() {
	return (
		<div className="storyReel">
			<Story
				image="https://scontent.fscl1-1.fna.fbcdn.net/v/t1.0-9/13344607_10153869455279775_1735884074249157202_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=8qdWmlL8zBYAX9maPpJ&_nc_ht=scontent.fscl1-1.fna&oh=c426607b17bced837835c4df56ada9a0&oe=5F72B1C9"
				profileSrc="https://docs.atlassian.com/aui/9.0.0/docs/images/avatar-person.svg"
				title="JohnplexU4P"
			/>
			<Story
				image="https://scontent.fscl1-1.fna.fbcdn.net/v/t1.0-9/13344607_10153869455279775_1735884074249157202_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=8qdWmlL8zBYAX9maPpJ&_nc_ht=scontent.fscl1-1.fna&oh=c426607b17bced837835c4df56ada9a0&oe=5F72B1C9"
				profileSrc="https://docs.atlassian.com/aui/9.0.0/docs/images/avatar-person.svg"
				title="Johnplex U4P"
			/>
		</div>
	);
}

export default StoryReel;
