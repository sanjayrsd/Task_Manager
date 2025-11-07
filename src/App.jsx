import TaskList from "./Components/TaskList"
import Taskform from "./Components/Taskform"
import ProgressTracker from "./Components/ProgressTracker"

export default function App() {
  return (
    <div>
      <h1>Hello! Welcome to the Task_Buddy</h1>
      <p>Hi, I'm the taskmanager to track our task and details.</p>
      <Taskform/>
      <TaskList/>
      <ProgressTracker/>
      <button>Clear All Tasks</button>
    </div>
  )
}