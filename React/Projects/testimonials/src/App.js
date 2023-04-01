import './App.css';
import data from './data.js'
import Cards from './components/Cards';
import { useState } from 'react';
function App() {
  const [details] = useState(data)
  return (
    <div className=" h-screen flex flex-row items-center justify-center">
      <Cards details={details}/>
    </div>
    
  );
}

export default App;
