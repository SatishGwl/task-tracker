import {useState, useEffect} from 'react'
import Header from './component/Header'
import Tasks from './component/Tasks'
import AddTask from './component/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  //fetch data from db.json

  useEffect(()=> {
    const getTasks = async () =>{
    const tasksFromServer = await fetchTasks ()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[])

  //Fetch Task from db.json

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

//Add Task

const addTask = (task)=> {
  const id = Math.floor(Math.random() * 1000) + 1
  console.log(id)

  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

// Delete Task Function

const deleteTask = (id) => {
  setTasks(tasks.filter( (task) => task.id !== id ))
}

//Toggle Reminder

const toggleReminder = (id) =>{
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}


  return (
    < div className="container">
      <Header onAdd = {()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle = {toggleReminder}/> : 'No Task to Show'}
    </div>
  );
}

export default App;
