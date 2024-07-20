import React, { useState } from 'react';
import Leaderboard from './components/Leaderboard';
import AddScorePopup from './components/AddScorePopup';
import RecentEntry from './components/RecentEntry';
import './App.css';

const App: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setIsPopupOpen(true)}>Add Score</button>
      </header>
      <Leaderboard />
      <RecentEntry />
      {isPopupOpen && <AddScorePopup onClose={() => setIsPopupOpen(false)} />}
      <footer className="App-footer">
        <div className="scrolling-footer">
          <p>Footer:Disclaimers/Annoucements/etc</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
