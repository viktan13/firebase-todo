import React, {useEffect, useState} from 'react';
import {collection, onSnapshot, orderBy, query, deleteDoc, doc, getFirestore} from "firebase/firestore";
import db from "./connectDB";

const TaskList = (props) => {
    const [todoList, setTodoList] = useState([]);


    useEffect(() => {
        const todoListColRef = query(collection(db, 'todoList'), orderBy('created', 'asc'));
        onSnapshot(todoListColRef, (snapshot) => {
            setTodoList(snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            })))
        })
    }, []);

    const onDeleteTask = (id) => {
        deleteDoc(doc(db, 'todoList', id))
            .then(() => console.log("Entire Document has been deleted successfully."))
            .catch(err => console.log(err));
    }

    return (
        <ul>
            {todoList.map(el => (
                <li key={el.id}>
                    {el.title}
                    <button onClick={() => onDeleteTask()}>Delete</button>
                    <button onClick={() => console.log(el.id)}>Show the object</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;