import NoteCard from "../../components/NoteCard/NoteCard"
import { useState } from "react"

export default function MyNotesList({ notes, setNotes }) {
    const noteCards = notes.map((n, idx) => <NoteCard note={n} key={idx} />)
    const [noteInfo, setNoteInfo] = useState({
        text: '',
        user: ''
    })

    function handleChange(evt) {
        setNoteInfo({text: evt.target.value, user: ''})
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const notes = await setNotes([...notes, noteInfo])
    }

    return (
        <>
            {notes.len ?
                <>
                    <h4>{noteCards}</h4>
                    <label className="flex-ctr-ctr">Add another Note</label>
                    <form className='flex-ctr-ctr' onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="New Note"
                            value={noteInfo.text}
                            name="text"
                            onChange={handleChange}
                            required
                        />
                        <button>Add Note</button>
                    </form>
                </>
                :
                <>
                    <p>No Notes Yet!</p>
                    <label className="flex-ctr-ctr">Add a Note</label>
                    <form className='flex-ctr-ctr' onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="New Note" 
                            value={noteInfo.text} name="text" 
                            onChange={handleChange}    
                            required
                        />
                        <button>Add Note</button>
                    </form>
                </>
            }
        </>
    )
}
