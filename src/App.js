import './App.css';
import db from './connectDB';
import {collection, query, onSnapshot, orderBy} from 'firebase/firestore';
import {useEffect, useState} from "react";
import CreateTaskForm from "./CreateTaskForm";

function App() {

    const [todoList, setTodoList] = useState([]);


    useEffect(() => {
        const todoListColRef = query(collection(db, 'todoList'), orderBy('created', 'asc'));
        onSnapshot(todoListColRef, (snapshot) => {
            setTodoList(snapshot.docs.map(el => ({
                ...el.data(),
            })))
        })
    }, []);


    return (
        <div>
            <CreateTaskForm />
            <ul>
                {todoList.map(el => (
                    <li key={el.id}>{el.title}</li>
                ))}
            </ul>


        </div>
    );
}

export default App;
