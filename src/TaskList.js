import React, {useEffect, useState} from 'react';
import {collection, onSnapshot, orderBy, query, deleteDoc, doc, getFirestore} from "firebase/firestore";
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

    const onDeleteTask = (id) => {
        deleteDoc(doc(db, 'todoList', id))
            .then(() => console.log("Entire Document has been deleted successfully."))
            .catch(err => console.log(err));
    }

    return (
        <ul>
            {todoList.map(el => (
                <li key={el.title}>
                    {el.title}
                    <button onClick={() => onDeleteTask(el.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;