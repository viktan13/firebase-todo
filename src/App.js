import './App.css';
import db from './connectDB';
import {collection, getDocs} from 'firebase/firestore';

function App() {

  async function getTodoList(db) {
    const todoCol = collection(db, 'todoList');
    const todoSnapshot = await getDocs(todoCol);
    const todoList = todoSnapshot.docs.map(doc => doc.data());
    return todoList;
  }



  return (
    <div className="App">

    </div>
  );
}

export default App;
