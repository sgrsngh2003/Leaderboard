import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScore } from '../features/leaderboardSlice';
import './AddScorePopup.css';

const AddScorePopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addScore({ username, score }));
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Add Score</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="MM:SS:MMM"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            pattern="\d{2}:\d{2}:\d{3}"
            required
          />
          <button type="submit">Add</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddScorePopup;
