import { useState } from 'react';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';

export default function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisable, setBtnDisable] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    let msg = e.target.value;
    if (msg === '') {
      setBtnDisable(true);
      setMessage(null);
    } else if (msg !== '' && msg.trim().length <= 10) {
      setBtnDisable(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setBtnDisable(false);
      setMessage(null);
    }
    setText(msg);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            value={text}
            type="text"
            placeholder="Write a review"
          />
          <Button type="submit" isDisable={btnDisable}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}
