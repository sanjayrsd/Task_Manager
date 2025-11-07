export default function Taskform() {
    return (
        <div>
            <h1>Taskform Component</h1>
            <span>
                <form>
                    <input type="text" placeholder="Enter the Task"/>
                    <button type="submit">Add Task</button>
                    <select>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                    <select>
                        <option value="general">General</option>
                        <option value="personal">Personal</option>
                        <option value="work">Work</option>
                    </select>
                </form>
            </span>
        </div>
    )
}
