import { Container, Row, Col } from "react-bootstrap";
import {FormInput} from './components/FormInput'
import { QAList } from "./components/QAlist";
import { question } from "./components/data"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data, setData] = useState(question)
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...question]))
    setData([...question])
    notify("تم الاضافة بنجاح", "Success")
  }
  const deleteAllItems = () => {
    localStorage.removeItem("items")
    question.splice(0, question.length)
    setData([])
    notify("تم الحدف الكل بنجاح", "Success")
  }
  const deleteOneItem = (items) =>{
    localStorage.setItem("items", JSON.stringify([...question]))
    setData([...items])
    if(items.length <= 0 ) {
      deleteAllItems()
    }
    notify("تم الحدف السؤال بنجاح", "Success")
  }
  const notify = (message, type) =>{ 
    if (type === "Error") {
      toast.error(message)
    } else if (type === "Success") {
    toast.success(message);
    }
  }
  return (
    <div className="font text-color  color-body">
      <Container className="p-5 ">
        <Row className="justify-content-center ">
          <Col sm="4">
            <div className="fs-3 text-center py-2"> اسؤلة و اجوبة شاءعة</div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} notify={notify} />
            <QAList data={data} deleteOneItem={deleteOneItem} />
            {
               localStorage.getItem("items") != null  ? (<button className="btn-color w-100 my-3" onClick={deleteAllItems}>مسح الكل</button>) : null
            }
            
          </Col>
        </Row>
        <ToastContainer/>
      </Container>

    </div>
  );
}

export default App;
