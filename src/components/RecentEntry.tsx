import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import './RecentEntry.css';

const RecentEntry: React.FC = () => {
  const recentEntry = useSelector((state: RootState) => state.leaderboard.recentEntry);

  if (!recentEntry) {
    return null;
  }

  return (
    <div className="recent-entry">
      <h2>Recent Entry</h2>
      <div className="recent-entry-details">
        <span>{recentEntry.username}</span>
        <span>{recentEntry.score}</span>
      </div>
    </div>
  );
};

export default RecentEntry;
