import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const FormT = (props) => {
    const {addTask}=props;
    const [txt, setTxt]=useState("");

    const handelSubmit=(e)=>{
        e.preventDefault();
    
        const newTask={txt:txt,taskDone:false}
        addTask(newTask);
        setTxt("");
        setTaskDone(false);
    }
    
    return (
        <div className='formTask'> 
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label id="prompt"> 
                    <Spinner animation="grow" variant="info" />
                    <Spinner animation="grow" variant="light" />
                    <Spinner animation="grow" variant="primary" />
                Enter Your Task   </Form.Label>
                    <Form.Control name="txt"  value={txt} type="text" className='fs-4' required placeholder="My Task To Do" onChange={(e)=>setTxt(e.target.value)} />
                    
                </Form.Group>

            
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Button className="w-100 fs-4" variant="outline-primary" type="submit">
                    Add Task
                    </Button>
                </Form.Group>
        
            </Form>

        </div>
    )
}

export default FormT