import { useState } from 'react';
import './App.css';
import datalist from './data';
import Cards from './components/Cards'


function App() {

  const [cityList,setCityList] = useState(datalist)

  function removeCity (id){
    setCityList(cityList.filter((city)=> city.id!== id))
  }
  if(cityList.length === 0){
    return(
    <div>
        <div className="h-96 text-7xl flex flex-col justify-center items-center font-bold">
          &#9785; <span>OPPS!! Not Intrested</span>
        </div>
    </div>
    )
  }
  return (
    <Cards cityList={cityList} removeCity={removeCity} />
  )
}


export default App;
