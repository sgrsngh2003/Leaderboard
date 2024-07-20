import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import './Leaderboard.css';

const Leaderboard: React.FC = () => {
  const scores = useSelector((state: RootState) => state.leaderboard.scores);

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <ul>
        {scores.map((score, index) => (
          <li key={index} className={`score-entry ${score.isNew ? 'new-score' : ''}`}>
            <span>{index + 1}. {score.username}</span>
            <span>{score.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
