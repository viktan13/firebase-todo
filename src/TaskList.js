import React, {useEffect, useState} from 'react';
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import db from "./connectDB";

const TaskList = (props) => {
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
        <ul>
            {todoList.map(el => (
                <li key={el.id}>{el.title} <button>Delete</button></li>
            ))}
        </ul>
    );
};

export default TaskList;