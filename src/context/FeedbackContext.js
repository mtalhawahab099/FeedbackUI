// import { v4 as uuidv4 } from 'uuid'
import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [feedback, setFeedback] = useState([])
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	})

	useEffect(() => {
		fetchFeedback()
	}, [])

	// Fetch feedback
	const fetchFeedback = async () => {
		const response = await fetch(
			`http://localhost:5000/feedback?_sort=id&_order=desc`
		)
		const data = await response.json()

		setFeedback(data)
		setIsLoading(false)
	}

	// Update Feedback
	const updateFeedback = (id, UptItem) => {
		setFeedback(feedback.map((item) => (item.id === id ? UptItem : item)))
	}
	// Edit function
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		})
	}
	// Delete Function
	let deleteFeedback = (id) => {
		if (window.confirm('Are you sure to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}

	// Add feedback
	const addFeedback = async (newFeedback) => {
		const response = await fetch('http://localhost:5000/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newFeedback),
		})

		const data = await response.json()

		setFeedback([data, ...feedback])
	}

	// // Add Function
	// let addFeedback = (newFeedback) => {
	// 	newFeedback.id = uuidv4()
	// 	setFeedback([newFeedback, ...feedback])
	// }
	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
