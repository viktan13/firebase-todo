import './App.css';
import db from './connectDB';
import {collection, query, onSnapshot} from 'firebase/firestore';
import {useEffect, useState} from "react";

function App() {

  const[todoList, setTodoList] = useState([]);

  useEffect(() => {
  const todoListColRef = query(collection(db, 'todoList'));
  onSnapshot(todoListColRef, (snapshot) => {
      setTodoList(snapshot.docs.map(el => ({
          id: el.id,
          ...el.data(),
      })))
  })
  });



  return (
    <div>

      <ul>
        {todoList.map(el => (
            <li key={el.id}>{el.title}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
