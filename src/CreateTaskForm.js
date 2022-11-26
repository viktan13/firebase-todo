import db from './connectDB';
import {collection, addDoc, Timestamp} from 'firebase/firestore';
import {useState} from "react";


const CreateTaskForm = () => {


    const [title, setTitle] = useState('');

    const addToList = (e) => {
        e.preventDefault();
        console.log(db);
        addDoc(collection(db, 'todoList'), {
            title,
            done: false,
            created: Timestamp.now(),
        }).then(res => console.log(res)).catch(err => console.log(err));
        setTitle('');
    }

    return (
        <form>
            <input type="text" placeholder="Enter task title" value={title} onChange={e => setTitle(e.target.value)}/>
            <button type="submit" onClick={addToList}>Add to List</button>
        </form>
    );
};

export default CreateTaskForm;