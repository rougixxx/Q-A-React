import {Row, Form, Button, Col} from 'react-bootstrap'
import { useState} from "react"
import { question } from './data'
export const FormInput = ({onAdd, notify}) => {
 
  const [qu, setQu] = useState("")
  const [an, setAn] = useState("")
  const addNewItem = () => {
    if (qu === "" || an === "") {
      notify("من فضلك املا البيانات", "Error")
      return;
    }
    question.push({id:Math.random(), q: qu, a: an})
    setQu("")
    setAn("")
    onAdd()
   
  }
    return (
        <Row className='my-3'>
          <Col sm="5">
        <Form.Control type="text" value={qu} placeholder="ادخل السؤال"  onChange={(e) => {setQu(e.target.value)}}/>
        </Col>
        <Col sm="5">
        <Form.Control type="text" value={an} placeholder="ادخل الاجابة" onChange={(e) => { setAn(e.target.value)}} />
        </Col>
        <Col sm="2">
      <button className="btn-color w-100" type="submit" onClick={addNewItem}>
        اضافة
      </button>
      </Col>
      </Row>
    )
}