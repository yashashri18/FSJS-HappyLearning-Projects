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

const myArray = new Array(9).fill("empty")

const App = () => {

    const [winmsg, setwinmsg] = useState("");
    const [isCross, setIsCross] = useState(false);

    const ReloadHandler = () =>{
        setwinmsg("");
        setIsCross(false);
        myArray.fill("empty",0,9);
    }

    const CheckWin = () => {
        if(myArray[0] === myArray[1] && myArray[0] === myArray[2] && myArray[0]!== "empty"){
            setwinmsg(`${myArray[0]} win`)
        }
        if(myArray[3] === myArray[4] && myArray[3] === myArray[5] && myArray[3]!== "empty"){
            setwinmsg(`${myArray[3]} win`)
        }
        if(myArray[6] === myArray[7] && myArray[6] === myArray[8] && myArray[6]!== "empty"){
            setwinmsg(`${myArray[6]} win`)
        }
        if(myArray[0] === myArray[3] && myArray[0] === myArray[6] && myArray[0]!== "empty"){
            setwinmsg(`${myArray[0]} win`)
        }
        if(myArray[1] === myArray[5] && myArray[1] === myArray[7] && myArray[1]!== "empty"){
            setwinmsg(`${myArray[1]} win`)
        }
        if(myArray[2] === myArray[5] && myArray[2] === myArray[8] && myArray[2]!== "empty"){
            setwinmsg(`${myArray[2]} win`)
        }
        if(myArray[0] === myArray[4] && myArray[0] === myArray[8] && myArray[0]!== "empty"){
            setwinmsg(`${myArray[0]} win`)
        }
        if(myArray[2] === myArray[4] && myArray[2] === myArray[6] && myArray[2]!== "empty"){
            setwinmsg(`${myArray[2]} win`)
        }
    }

    const changeIcon = (index) => {
        if(winmsg){
            return toast.success("Game already Finished", { position: "top-right",});
        }
        if(myArray[index] === "empty"){
            myArray[index] = isCross ? "cross" : "circle";
            setIsCross(!isCross)
        }else{
            return toast.success("Already Filled", { position: "top-right",});
        }
        CheckWin();
    }
  return (
    <Container className="p-5">
      <ToastContainer />
      <Row>
        <Col md={6} className="offset-md-3">
          {
            winmsg ? 
            (<h1>Game Finish</h1>):
            (isCross ? <h1>Cross ki turn</h1> : <h1>Circle ki turn</h1>)
          }
          <div className="grid">
            {myArray.map((value, index) => (
              <Card onClick={() => changeIcon(index)}>
                <CardBody className="box">
                  <Icon name={value}/>
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
        <Button color="success" block onClick={ReloadHandler}>
        Reload the Game
    </Button>
      </Row>
      
    </Container>
  )
}

export default App
