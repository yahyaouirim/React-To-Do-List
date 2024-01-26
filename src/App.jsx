import './App.css'
import { useState } from 'react';
import Display from './components/Display';
import FormT from './components/FormT';

function App() {
  const [taskDone, setTaskDone]=useState(false);
  const [list, setList]=useState([])
  const[currentIndex, setCurrentIndex]=useState(0);
  const addTask=(oneTask)=>{
    setList([...list, oneTask])
  }
  return (
    <>
      <FormT addTask={addTask}/>
      <Display list={list} setList={setList}  currentIndex={currentIndex} taskDone={taskDone}/>
    </>
  )
}

export default App
