import React, {useState}  from "react"

import Icon from './components/Icon'

//tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//reactstrap
import 'bootstrap/dist/css/bootstrap.css';
//we need to include our css after bootstarp css 
//otherwise bootstarp css will override our css

import './App.css';
import { Card, CardBody, Container , Button , Col , Row } from 'reactstrap';


const itemArray = new Array(9).fill("empty");

const App = () => {

  const [isCross, setIsCross] = useState(false)
  const [winmsg , setWinMsg] = useState("")

  const reloadGame = () => {
    //make everyting same as start
    setIsCross(false)
    setWinMsg('')
    itemArray.fill("empty", 0, 9);
  }
  const checkIsWinner = () => {
    if(itemArray[0] === itemArray[1] &&  
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty") {
        setWinMsg(`${itemArray[0]} wins`)
    } else if(itemArray[3] === itemArray[4] &&  
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty") {
        setWinMsg(`${itemArray[3]} wins`)
    } else if(itemArray[6] === itemArray[7] &&  
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty") {
        setWinMsg(`${itemArray[6]} wins`)
    }else if(itemArray[0] === itemArray[4] &&  
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== "empty") {
        setWinMsg(`${itemArray[0]} wins`)
    }else if(itemArray[2] === itemArray[4] &&  
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== "empty") {
        setWinMsg(`${itemArray[2]} wins`)
    }else if(itemArray[0] === itemArray[3] &&  
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== "empty") {
        setWinMsg(`${itemArray[0]} wins`)
    }else if(itemArray[1] === itemArray[4] &&  
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== "empty") {
        setWinMsg(`${itemArray[1]} wins`)
    }
    else if(itemArray[2] === itemArray[5] &&  
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== "empty") {
        setWinMsg(`${itemArray[2]} wins`)
    }
  }

  const chnageItem = (itemNumber) => {
    if(winmsg){
      return toast(winmsg, {type:"success"});
    }
    if(itemArray[itemNumber] === "empty"){
      itemArray[itemNumber] = isCross ? "cross":"circle";
      setIsCross(!isCross)
    }else{
      return toast("Already filled", {type:"error"});
    }
    checkIsWinner();
  }

  return ( 
   <Container className="p-5">
    <ToastContainer position="bottom-center"/>
      <Row>
        <Col md={6} className="offset-md-3">
          {winmsg ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winmsg}
              </h1>
            </div>
          ) : (
            <h1 className="text-warning text-center">
              {isCross ? "Cross's turn it is " : "Circle's turn it is "}
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card onClick={()=> chnageItem(index)}>
                <CardBody className="box">
                  <Icon name={item}/>
                </CardBody>
              </Card>
            ))}
          </div>
          <Button
            className="mb-5 mt-5" 
              color="success"
              block
              onClick={reloadGame}
              >Reload Game</Button>
        </Col>
      </Row>
   </Container>
  );
}

export default App;
