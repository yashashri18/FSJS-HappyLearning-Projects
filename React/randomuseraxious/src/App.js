import axios from "axios"; 
import { useEffect, useState } from "react";
import Card from "./components/Card";



function App() {

  const [details, setDetails] = useState({})

  // const fetchDetails = async () => {
  //   const {data} = await axios.get('https://randomuser.me/api/')
  //   //console.log(data)
  //   const detailsss = data.results[0]
  //   setDetails(detailsss)
  //   //console.log(details)
  // }

  useEffect(()=> {
    async function fetchDetails () {
      const jsondata = await axios.get('https://randomuser.me/api/')
      //console.log(jsondata)
      const detailsss = jsondata.data.results[0]
      setDetails(detailsss)
      console.log(detailsss)
    }
    fetchDetails()
  },[])

  return (
    <Card mydetails={details}/>
  );
}

export default App;
