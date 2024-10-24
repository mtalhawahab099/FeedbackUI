import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
	let [text, setText] = useState('')
	let [rating, setRating] = useState(10)
	let [btnDisabled, setBtnDisabled] = useState(true)
	let [message, setMessage] = useState('')
	const { addFeedback, feedbackEdit, updateFeedback } =
		useContext(FeedbackContext)
	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setBtnDisabled(false)
			setText(feedbackEdit.item.text)
			setRating(feedbackEdit.item.rating)
		}
	}, [feedbackEdit])
	let handleTextChange = (e) => {
		if (text === '') {
			setBtnDisabled(true)
			setMessage('')
		} else if (text !== '' && text.trim().length <= 10) {
			setMessage('Text must be atleast 10 characters')
			setBtnDisabled(true)
		} else {
			setMessage('')
			setBtnDisabled(false)
		}

		setText(e.target.value)
	}

	let handleSubmit = (e) => {
		e.preventDefault()
		if (text.trim().length > 10) {
			let newFeedback = {
				text,
				rating,
			}
			if (feedbackEdit.edit === true) {
				updateFeedback(feedbackEdit.item.id, newFeedback)
			} else {
				addFeedback(newFeedback)
			}
			setText('')
		}
	}
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className='input-group'>
					<input
						onChange={handleTextChange}
						type='text'
						placeholder='write a review'
						value={text}
					/>
					<Button type='submit' isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	)
}

export default FeedbackForm
