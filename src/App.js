import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import TheTimeNow from "./TheTimeNow";

function App() {
  const [timeNow, setTimeNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTimeNow(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <div>Time now is {timeNow.toLocaleTimeString()}</div>
      <TheTimeNow /><TheTimeNow />
    </div>
  );
}

export default App;
