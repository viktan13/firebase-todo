import './App.css';
import db from './connectDB';
import {collection, getDocs} from 'firebase/firestore';
import {useEffect, useState} from "react";

function App() {

  const[todoList, setTodoList] = useState([]);

  useEffect(() => {
  async function getTodoList(db) {
    const todoCol = collection(db, 'todoList');
    const todoSnapshot = await getDocs(todoCol);
    const dbtodoList = todoSnapshot.docs.map(doc => doc.data());
    setTodoList(dbtodoList);
  }
  getTodoList(db);
  })



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
