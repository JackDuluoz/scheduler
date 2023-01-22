import { useState } from "react";

const useVisualMode = function (initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function (newMode, replace = false) {
    if (replace === false) {
      setMode(newMode);
      setHistory([...history, newMode]);
    }
    if (replace === true) {
      setMode(newMode);
    }
  };

  const back = function () {
    if (history.length > 1) {
      history.pop();
      setHistory(history);
      setMode(history[history.length - 1]);
    } else {
      setMode(mode);
    }
  };

  return { mode, transition, back };
};

export default useVisualMode;
