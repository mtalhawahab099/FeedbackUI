import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from './shared/Card'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import PropTypes from 'prop-types'

function FeedbackItem({ item }) {
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
	return (
		<div>
			<Card>
				<div className='num-display'>{item.rating}</div>
				<button onClick={() => deleteFeedback(item.id)} className='close'>
					<FaTimes color='purple' />
				</button>
				<button
					onClick={() => {
						editFeedback(item)
					}}
					className='edit'>
					<FaEdit color='purple' />
				</button>
				<div className='text-display'>{item.text}</div>
			</Card>
		</div>
	)
}

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
}

export default FeedbackItem
