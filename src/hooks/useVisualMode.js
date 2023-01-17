import { useState } from 'react';

const useVisualMode = function(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function(newMode, replace = false) {
  !replace && setHistory(prev => [...prev, mode]);
  return setMode(newMode)
  }

  // The back function first checks whether the length of the history is less than or equal to 1, if so it returns nothing,
  // if not, it creates a copy of the history array and uses the Array.pop() method to remove the last element from the copy history array,
  // then it sets the mode to the new last element of the history, and finally it sets the history to the updated array.

  const back = function() {
    if (history.length <= 1) {
      return;
    }
    const newHistory = [...history];
    newHistory.pop();
    const prevMode = newHistory[newHistory.length - 1];
    setMode(prevMode);
    setHistory(newHistory);
  }
  return {mode, transition, back}
}

export default useVisualMode;