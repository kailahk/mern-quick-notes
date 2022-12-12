import { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import MyNotesList from '../MyNotesList/MyNotesList';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([
    {text: '', user: ''}
  ]);

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <MyNotesList notes={notes} setNotes={setNotes} />
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
