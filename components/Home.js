import React from 'react'

const Home = ({posts}) => {
	return (
		<div>
			<h2>hoge</h2>
			<ul>
				{posts.map(post =>
					<li key={post._id}>{post.title}</li>
				)}
			</ul>
		</div>
	)
}

export default Home