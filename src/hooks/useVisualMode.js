import { useState } from 'react';

const useVisualMode = function (initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function(newMode, replace = false) {
    !replace && setHistory(prev => [...prev, mode]);
    return setMode(newMode)
  }
  const back = function() {
    return setMode(history.pop())
  }
  return {mode, transition, back}
}

export default useVisualMode;
