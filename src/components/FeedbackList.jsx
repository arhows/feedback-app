import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

export default function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) return <p>There is no feedback</p>;

  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
