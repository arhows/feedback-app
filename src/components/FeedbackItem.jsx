import { FaTimes } from 'react-icons/fa';

import Card from './shared/Card';
import PropTypes from 'prop-types';

export default function FeedbackItem({ item, handleDelete }) {
  const { id, rating, text } = item;

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button onClick={() => handleDelete(id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
