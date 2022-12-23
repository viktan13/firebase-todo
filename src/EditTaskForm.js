import db from './connectDB';
import {doc, getDoc, updateDoc} from 'firebase/firestore';
import {useEffect, useState} from "react";


const EditTaskForm = (props) => {

    const [title, setTitle] = useState('');

    //if (!props.id) return null;


    useEffect(() => {
    if(!props.id) return;
        getDoc(doc(db, 'todoList', props.id)).then(doc => {
            setTitle(doc.data().title);
        })
    }, [props.id]);



    const handleSubmit = (e) => {
        e.preventDefault();
        updateDoc(doc(db, 'todoList', props.id), {title})
            .then(r => console.log(r))
            .catch(err => console.log(err));
        props.onCancel();
        setTitle('');
    }

    const handleCancel = () => {
        props.onCancel();
        setTitle('');
    }

if(!title || !props.id) return null;

    return (
        <form className="input-group col-6">
            <input type="text" className="form-control" placeholder="Enter task title" value={title} onChange={e => setTitle(e.target.value)}/>
            <button type="submit" onClick={handleSubmit} className="btn btn-outline-secondary">Save</button>
            <button type="submit" onClick={handleCancel} className="btn-close"></button>
        </form>
    );
};

export default EditTaskForm;