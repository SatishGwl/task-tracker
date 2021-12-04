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
        id: 1,
        text: 'Food Shopping',
        day: 'Feb 5th at 11:30 pm',
        reminder: true,
    },
])

  return (
    < div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
