// import { Link } from 'react-router-dom'
// This link component is not used because it is not working in my laptop.
// This "link" component is used to link routes without the refresh of the page and "a" tag is avoid because the page refreshes when we use this tag.
import Card from '../Components/shared/Card'
function AboutPage() {
	return (
		<div className='about'>
			<Card>
				<h1>About this project</h1>
				<p>This is a react app to leave feedback for product or service</p>
				<p>Version: 1.0.0</p>
				<a href='/'>Back to Home page</a>
			</Card>
		</div>
	)
}

export default AboutPage
