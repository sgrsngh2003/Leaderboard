import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Score {
  username: string;
  score: string; // MM:SS:MMM
  isNew?: boolean; // Flag to indicate a new score
}

export interface LeaderboardState {
  scores: Score[];
  recentEntry: Score | null; // Track the most recent entry
}

const initialState: LeaderboardState = {
  scores: [],
  recentEntry: null,
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    addScore: (state, action: PayloadAction<Score>) => {
      state.scores.push(action.payload);
      state.scores.sort((a, b) => {
        const [aMin, aSec, aMSec] = a.score.split(':').map(Number);
        const [bMin, bSec, bMSec] = b.score.split(':').map(Number);
        const aTotal = aMin * 60000 + aSec * 1000 + aMSec;
        const bTotal = bMin * 60000 + bSec * 1000 + bMSec;
        return aTotal - bTotal;
      });
      if (state.scores.length > 30) {
        state.scores = state.scores.slice(0, 30);
      }
      state.recentEntry = { ...action.payload, isNew: true };
    },
  },
});

export const { addScore } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
