import './App.css';
import db from './connectDB';
import {collection, query, onSnapshot, addDoc, Timestamp} from 'firebase/firestore';
import {useEffect, useState} from "react";
import CreateTaskForm from "./CreateTaskForm";

function App() {

    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        const todoListColRef = query(collection(db, 'todoList'));
        onSnapshot(todoListColRef, (snapshot) => {
            setTodoList(snapshot.docs.map(el => ({
                ...el.data(),
            })))
        })
    });


    return (
        <div>
            <CreateTaskForm />
            <ul>
                {todoList.map(el => (
                    <li key={el.id}>{el.title}</li>
                ))}
            </ul>
            <button onClick={addTo}>Add</button>

        </div>
    );
}

export default App;
