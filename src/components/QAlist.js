import { Row, Accordion } from 'react-bootstrap'
import {question} from './data'

export const QAList = ({ data, deleteOneItem }) => {
    const localData = JSON.parse(localStorage.getItem("items"))
    const onDeleteOneItem = (ID) => {
        if (localStorage.getItem("items") != null) {
        const index = question.findIndex( (item) => item.id === ID)
        question.splice(index, 1)
        deleteOneItem(question)
        }
    }

    return (

        <Row>
            <Accordion>
                {
                    localStorage.getItem("items") != null  ? (localData.map((item, index) => {
                        return (
                            <Accordion.Item key={index} eventKey={item.id}>
                                <Accordion.Header>
                                    <div className="m-auto">
                                        {item.q}
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="px-3 d-inline text-end ">
                                        {item.a}
                                    </div>
                                    <button className='btn-color' onClick={() => onDeleteOneItem(item.id)}>مسح السؤال</button>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })): <h2 className='fs-4 text-center p-5'>There is no Questions Now</h2>
      }

            </Accordion>

        </Row>
    )
}