import './App.css';
import CreateTaskForm from "./CreateTaskForm";
import TaskList from "./TaskList";
import {useState} from "react";
import EditTaskForm from "./EditTaskForm";

function App() {

    const [editTaskId, setEditTaskId] = useState(null);

    const onEdit = (id) => {
        setEditTaskId(id);
    }

    const onEditCancel = () => {
        setEditTaskId(null);
    }


    return (
        <div>
            <CreateTaskForm />
            <TaskList onEdit={onEdit}/>
            <EditTaskForm id={editTaskId} onCancel={onEditCancel}/>
        </div>
    );
}

export default App;
