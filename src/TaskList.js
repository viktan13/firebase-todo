import React, {useEffect, useState} from 'react';
import {collection, onSnapshot, orderBy, query, deleteDoc, doc, updateDoc} from "firebase/firestore";
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

    function onToggleDone(id, newStatus) {
        updateDoc(doc(db, 'todoList', id), {completed: newStatus})
            .then(r => console.log(r))
            .catch(err => console.log(err));
    }

    return (
        <ul className="list-group">
            {todoList.map(el => (
                <li key={el.id} className="list-group-item">
                    <div className="row">
                        <div className="col-8">
                            {el.completed ? <s>{el.title}</s> : el.title}
                        </div>
                        <div className="col-4 btn-group" >
                            <button onClick={() => onDeleteTask(el.id)} className="btn btn-outline-danger">Delete</button>
                            <button onClick={() => onToggleDone(el.id, !el.completed)} className="btn btn-outline-success">Done</button>
                            <button onClick={() => props.onEdit(el.id)} className="btn btn-outline-warning">Edit</button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;