import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconLink from './Components/AboutIconLink'
import FeedbackList from './Components/FeedbackList'
import FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/FeedbackForm'

function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Route exact path='/'>
						<FeedbackForm />
						<FeedbackStats />
						<FeedbackList />
					</Route>
					<Route path='/about' component={AboutPage} />
					<AboutIconLink />
				</div>
			</Router>
		</FeedbackProvider>
	)
}

export default App
