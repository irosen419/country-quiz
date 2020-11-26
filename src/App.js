import { useState } from 'react'
import QuizCard from './Containers/QuizCard'

function App() {
  const [start, setStart] = useState(false)
  return (
    <div className="App">
      <h1>Country Quiz</h1>
      {start ? <QuizCard /> : null}
      {start ? null : <button onClick={() => setStart(true)}>Start</button>}
    </div>
  );
}

export default App;
