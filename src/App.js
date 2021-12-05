import {useState} from 'react'
import Header from './component/Header'
import Tasks from './component/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor Appointment',
        day: 'Feb 5th at 2:30 pm',
        reminder: true,
    },

    {
        id: 2,
        text: 'Metting at School',
        day: 'Feb 6th at 3:30 pm',
        reminder: true,
    },

    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 11:30 pm',
        reminder: true,
    },
])

// Delete Task Function

const deleteTask = (id) => {
  setTasks(tasks.filter( (task) => task.id !== id ))
}

  return (
    < div className="container">
      <Header/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Task to Show'}
    </div>
  );
}

export default App;
