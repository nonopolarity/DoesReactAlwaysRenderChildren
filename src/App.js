import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [timeNow, setTimeNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTimeNow(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>Time now is {timeNow.toLocaleTimeString()}</div>
  );
}

export default App;
